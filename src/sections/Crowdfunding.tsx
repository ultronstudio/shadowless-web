'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { Users, Clock, Code, Music, Shield, Banknote, X } from 'lucide-react';
import CrowdfundingTierCard from '@/components/CrowdfundingTierCard';
import StretchGoalCard from '@/components/StretchGoalCard';
import StripeCheckoutForm from '@/components/StripeCheckoutForm';
import { getStripe } from '@/lib/stripe';
import { formatAmountForLanguage } from '@/lib/currency';
import { useLanguageContext } from '@/context/LanguageContext';
import type { Content, DonationTier, CrowdfundingStats, DonorDetails, Language } from '@/types';

const stripePromise = getStripe();

const currencyByLanguage: Record<Language, string> = {
    en: 'usd',
    cs: 'czk',
    de: 'eur'
};

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '';

type PaymentStep = 'tier' | 'details' | 'card' | 'review';

interface CrowdfundingProps {
    content: Content['crowdfunding'];
    stats: CrowdfundingStats;
    currencySymbol: string;
    onDonate: (tier: DonationTier, donor: DonorDetails, paymentIntentId: string) => void;
}

export default function Crowdfunding({ content, stats, currencySymbol, onDonate }: CrowdfundingProps) {
    const { lang } = useLanguageContext();
    const { currentAmount, targetAmount, backers, daysLeft } = stats;
    // Calculate percentage based on values (ratio stays same regardless of currency)
    const percentage = Math.min((currentAmount / targetAmount) * 100, 100);

    // Campaign Status Logic
    const isSuccess = currentAmount >= targetAmount;
    const isFailed = currentAmount < targetAmount && daysLeft <= 0;
    const isLive = daysLeft > 0 && !isSuccess;

    // Animation for the bar
    const [width, setWidth] = useState(0);
    const progressRef = useRef<HTMLDivElement>(null);

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTier, setSelectedTier] = useState<DonationTier | null>(null);
    const [paymentStep, setPaymentStep] = useState<PaymentStep>('tier');
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const [isCreatingIntent, setIsCreatingIntent] = useState(false);
    const [intentError, setIntentError] = useState<string | null>(null);
    const [donorDetails, setDonorDetails] = useState<DonorDetails>({
        firstName: '',
        lastName: '',
        email: '',
        notes: ''
    });
    const [detailsErrors, setDetailsErrors] = useState<Partial<Record<keyof DonorDetails, string>>>({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setTimeout(() => {
                        setWidth(percentage);
                    }, 300);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (progressRef.current) {
            observer.observe(progressRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [percentage]);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    useEffect(() => {
        if (paymentStep !== 'card' || !selectedTier) {
            return;
        }

        if (!publishableKey) {
            setIntentError('Stripe publishable key is not configured.');
            return;
        }

        if (clientSecret) {
            return;
        }

        const controller = new AbortController();
        const amountInMinorUnits = Math.round(selectedTier.price * 100);
        const currency = currencyByLanguage[lang] ?? 'usd';

        const createPaymentIntent = async () => {
            setIsCreatingIntent(true);
            setIntentError(null);
            setClientSecret(null);

            try {
                const response = await fetch('/api/create-payment-intent', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        amount: amountInMinorUnits,
                        currency,
                        tierId: selectedTier.id
                    }),
                    signal: controller.signal
                });

                const data: { clientSecret?: string; error?: string } = await response.json().catch(() => ({}));

                if (!response.ok || !data.clientSecret) {
                    throw new Error(data.error ?? 'Failed to create payment intent.');
                }

                setClientSecret(data.clientSecret);
            } catch (error) {
                if (controller.signal.aborted) {
                    return;
                }
                const message = error instanceof Error ? error.message : 'Unable to initialise payment form. Please try again.';
                setIntentError(message);
            } finally {
                if (!controller.signal.aborted) {
                    setIsCreatingIntent(false);
                }
            }
        };

        createPaymentIntent();

        return () => {
            controller.abort();
        };
    }, [paymentStep, selectedTier, lang, clientSecret]);

    const createEmptyDonor = (): DonorDetails => ({ firstName: '', lastName: '', email: '', notes: '' });

    const openModal = () => {
        setIsModalOpen(true);
        setPaymentStep('tier');
        setSelectedTier(null);
        setClientSecret(null);
        setIntentError(null);
        setIsCreatingIntent(false);
        setDonorDetails(createEmptyDonor());
        setDetailsErrors({});
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setPaymentStep('tier');
        setSelectedTier(null);
        setClientSecret(null);
        setIntentError(null);
        setIsCreatingIntent(false);
        setDonorDetails(createEmptyDonor());
        setDetailsErrors({});
    };

    const handleTierSelect = (tier: DonationTier) => {
        setSelectedTier(tier);
        setPaymentStep('details');
        setClientSecret(null);
        setIntentError(null);
        setIsCreatingIntent(false);
    };

    const handleBackToTiers = () => {
        setPaymentStep('tier');
        setClientSecret(null);
        setIntentError(null);
        setIsCreatingIntent(false);
        setSelectedTier(null);
        setDonorDetails(createEmptyDonor());
        setDetailsErrors({});
    };

    const handleBackToDetails = () => {
        setPaymentStep('details');
        setClientSecret(null);
        setIntentError(null);
        setIsCreatingIntent(false);
    };

    const handleDonorChange = (field: keyof DonorDetails) => (value: string) => {
        setDonorDetails((prev) => ({
            ...prev,
            [field]: value,
        }));

        setDetailsErrors((prev) => {
            if (!prev[field]) {
                return prev;
            }
            const next = { ...prev };
            delete next[field];
            return next;
        });
    };

    const handleDetailsSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const errors: Partial<Record<keyof DonorDetails, string>> = {};
        const { validation } = content.modal;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const trimmed = {
            firstName: donorDetails.firstName.trim(),
            lastName: donorDetails.lastName.trim(),
            email: donorDetails.email.trim(),
            notes: donorDetails.notes?.trim() ?? '',
        };

        if (!trimmed.firstName) {
            errors.firstName = validation.required;
        }

        if (!trimmed.lastName) {
            errors.lastName = validation.required;
        }

        if (!trimmed.email) {
            errors.email = validation.required;
        } else if (!emailPattern.test(trimmed.email)) {
            errors.email = validation.email;
        }

        if (Object.keys(errors).length > 0) {
            setDetailsErrors(errors);
            return;
        }

        setDonorDetails(trimmed);
        setDetailsErrors({});
        setPaymentStep('card');
        setClientSecret(null);
        setIntentError(null);
        setIsCreatingIntent(false);
    };

    const handleStripeSuccess = (tier: DonationTier, paymentIntentId: string) => {
        const sanitizedNotes = donorDetails.notes?.trim();
        const normalizedDonor: DonorDetails = {
            firstName: donorDetails.firstName,
            lastName: donorDetails.lastName,
            email: donorDetails.email,
            ...(sanitizedNotes ? { notes: sanitizedNotes } : {}),
        };

        onDonate(tier, normalizedDonor, paymentIntentId);
        closeModal();
    };

    return (
        <section id="crowdfunding" data-scroll-offset="40" className="py-24 bg-void relative border-t border-zinc-900">
            <div className="max-w-6xl mx-auto px-4">

                {/* Intro */}
                <div className="text-center mb-20">
                    <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 uppercase">{content.title}</h2>
                    <div className="w-24 h-1 bg-blood mx-auto mb-8"></div>
                    <p className="font-body text-zinc-300 max-w-2xl mx-auto text-lg leading-relaxed">
                        {content.intro}
                    </p>
                </div>

                {/* Campaign Status Card */}
                <div className="bg-void-light border border-zinc-800 p-8 md:p-12 shadow-2xl relative overflow-hidden mb-12">
                    <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-4xl md:text-5xl font-serif text-white">{formatAmountForLanguage(currentAmount, currencySymbol, lang)}</span>
                                <span className="text-zinc-400 font-body">/ {formatAmountForLanguage(targetAmount, currencySymbol, lang)}</span>
                            </div>
                            <div className="h-4 bg-black border border-zinc-700 rounded-full overflow-hidden relative" ref={progressRef}>
                                <div
                                    className="h-full bg-blood relative shadow-[0_0_15px_rgba(138,11,11,0.6)]"
                                    style={{
                                        width: `${width}%`,
                                        transition: 'width 2s cubic-bezier(0.22, 1, 0.36, 1)'
                                    }}
                                >
                                    <div className="absolute top-0 right-0 bottom-0 w-px bg-white opacity-50 shadow-[0_0_10px_white]"></div>
                                </div>
                            </div>
                            <div className="flex justify-between text-sm text-zinc-300 pt-2 font-serif">
                                <span>{percentage.toFixed(0)}% {content.funded.toUpperCase()}</span>
                                {isLive && <span className="text-blood animate-pulse font-bold">{content.statusLabel.live}</span>}
                                {isSuccess && <span className="text-green-500 font-bold">{content.statusLabel.success}</span>}
                                {isFailed && <span className="text-zinc-500 font-bold">{content.statusLabel.failed}</span>}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-black/50 p-6 border border-zinc-800 text-center hover:border-blood/50 transition-colors">
                                <Users className="mx-auto text-zinc-200 mb-2" size={24} />
                                <div className="text-2xl font-bold text-white mb-1">{backers}</div>
                                <div className="text-xs text-zinc-400 uppercase tracking-wider">{content.backers}</div>
                            </div>
                            <div className="bg-black/50 p-6 border border-zinc-800 text-center hover:border-blood/50 transition-colors">
                                <Clock className="mx-auto text-zinc-200 mb-2" size={24} />
                                <div className="text-2xl font-bold text-white mb-1">{Math.max(0, daysLeft)}</div>
                                <div className="text-xs text-zinc-400 uppercase tracking-wider">{content.daysLeft}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Early CTA Button - Visible without scrolling down */}
                <div className="flex justify-center mb-24 animate-fade-in">
                    <button
                        onClick={openModal}
                        disabled={isFailed}
                        className="cursor-pointer group relative bg-transparent border border-blood text-blood hover:bg-blood hover:text-white font-serif tracking-widest py-3 px-12 transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed">
                        <span className="relative z-10 uppercase text-sm font-bold flex items-center gap-2">
                            {content.cta}
                        </span>
                    </button>
                </div>

                {/* Developer & Breakdown Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">

                    {/* About Developer */}
                    <div>
                        <h3 className="font-serif text-2xl text-white mb-6 border-l-4 border-blood pl-4 uppercase">{content.developerTitle}</h3>
                        <div className="bg-zinc-900/50 p-6 border border-zinc-800">
                            <p className="font-serif text-lg text-white mb-2">Petr Vurm</p>
                            <p className="text-xs text-blood uppercase tracking-widest mb-4">Solo Developer</p>
                            <p className="font-body text-zinc-300 text-sm leading-relaxed mb-4">
                                {content.developerBio}
                            </p>
                            <p className="font-body text-zinc-400 text-sm italic">
                                {content.developerQuote}
                            </p>
                        </div>
                    </div>

                    {/* Budget Breakdown */}
                    <div>
                        <h3 className="font-serif text-2xl text-white mb-6 border-l-4 border-blood pl-4 uppercase">{content.breakdownTitle}</h3>
                        <div className="space-y-4 font-body text-sm">

                            <div className="group">
                                <div className="flex justify-between text-zinc-200 mb-1">
                                    <span className="flex items-center gap-2"><Code size={14} className="text-blood" /> {content.breakdown.dev}</span>
                                    <span>50%</span>    
                                </div>
                                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-zinc-500 w-[80%] group-hover:bg-blood transition-colors duration-500"></div>
                                </div>
                                <p className="text-zinc-400 text-xs mt-1">{content.breakdown.devDesc}</p>
                            </div>

                            <div className="group">
                                <div className="flex justify-between text-zinc-200 mb-1">
                                    <span className="flex items-center gap-2"><Music size={14} className="text-blood" /> {content.breakdown.audio}</span>
                                    <span>30%</span>
                                </div>
                                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-zinc-500 w-[60%] group-hover:bg-blood transition-colors duration-500"></div>
                                </div>
                                <p className="text-zinc-400 text-xs mt-1">{content.breakdown.audioDesc}</p>
                            </div>

                            <div className="group">
                                <div className="flex justify-between text-zinc-200 mb-1">
                                    <span className="flex items-center gap-2"><Shield size={14} className="text-blood" /> {content.breakdown.tax}</span>
                                    <span>15%</span>
                                </div>
                                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-zinc-500 w-[45%] group-hover:bg-blood transition-colors duration-500"></div>
                                </div>
                            </div>

                            <div className="group">
                                <div className="flex justify-between text-zinc-200 mb-1">
                                    <span className="flex items-center gap-2"><Banknote size={14} className="text-blood" /> {content.breakdown.fees}</span>
                                    <span>5%</span>
                                </div>
                                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-zinc-500 w-[20%] group-hover:bg-blood transition-colors duration-500"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Stretch Goals */}
                <div className="mb-24">
                    <h3 className="font-serif text-3xl text-white mb-10 text-center uppercase tracking-widest">{content.stretchGoalsTitle}</h3>
                    <div className="grid gap-6">
                        {content.stretchGoals.map((goal) => {
                            const isUnlocked = currentAmount >= goal.amount;
                            return (
                                <StretchGoalCard
                                    key={goal.amount}
                                    goal={goal}
                                    currencySymbol={currencySymbol}
                                    isUnlocked={isUnlocked}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <button
                        onClick={openModal}
                        disabled={isFailed}
                        className="cursor-pointer group relative bg-blood hover:bg-red-900 text-white font-serif tracking-widest py-4 px-16 transition-all duration-300 shadow-[0_0_20px_rgba(138,11,11,0.3)] hover:shadow-[0_0_40px_rgba(138,11,11,0.6)] overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:bg-blood">
                        <span className="relative z-10 uppercase">{content.cta}</span>
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                    </button>
                </div>

                {/* Payment Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
                        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={closeModal}></div>
                        <div className="bg-zinc-950 border border-zinc-800 w-full max-w-2xl relative z-10 shadow-2xl flex flex-col max-h-[90vh]">

                            {/* Modal Header */}
                            <div className="flex justify-between items-center p-6 border-b border-zinc-800 bg-void-light">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.35em] text-blood mb-1">{content.modal.title}</p>
                                    <h3 className="font-serif text-xl text-white tracking-widest uppercase">
                                        {content.modal.stepTitles[paymentStep]}
                                    </h3>
                                </div>
                                <button onClick={closeModal} className="cursor-pointer text-zinc-500 hover:text-white transition-colors">
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 overflow-y-auto">

                                {/* STEP 1: Select Tier */}
                                {paymentStep === 'tier' && (
                                    <div className="space-y-4">
                                        <p className="text-zinc-400 font-body mb-4">{content.modal.stepDescriptions.tier}</p>
                                        <div className="grid gap-4">
                                            {content.modal.tiers.map((tier) => (
                                                <CrowdfundingTierCard
                                                    key={tier.id}
                                                    tier={tier}
                                                    onSelect={handleTierSelect}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* STEP 2: Donor Details */}
                                {paymentStep === 'details' && selectedTier && (
                                    <div className="space-y-6">
                                        <p className="text-zinc-400 font-body">{content.modal.stepDescriptions.details}</p>

                                        <div className="bg-zinc-900/50 p-4 border border-zinc-800 flex justify-between items-center">
                                            <div>
                                                <div className="text-zinc-500 text-xs uppercase tracking-wider">{content.modal.selectedTier}</div>
                                                <div className="text-white font-serif">{selectedTier.name}</div>
                                            </div>
                                            <div className="text-blood font-bold text-xl">{formatAmountForLanguage(selectedTier.price, selectedTier.currency, lang)}</div>
                                        </div>

                                        <form onSubmit={handleDetailsSubmit} className="space-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label className="block text-xs uppercase tracking-widest text-zinc-500">{content.modal.firstNameLabel}</label>
                                                    <input
                                                        type="text"
                                                        autoComplete='first-name'
                                                        value={donorDetails.firstName}
                                                        onChange={(event) => handleDonorChange('firstName')(event.target.value)}
                                                        className="w-full bg-black/60 border border-zinc-800 px-3 py-2 text-sm text-white focus:outline-none focus:border-blood transition-colors"
                                                    />
                                                    {detailsErrors.firstName && <p className="text-xs text-blood">{detailsErrors.firstName}</p>}
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="block text-xs uppercase tracking-widest text-zinc-500">{content.modal.lastNameLabel}</label>
                                                    <input
                                                        type="text"
                                                        autoComplete="family-name"
                                                        value={donorDetails.lastName}
                                                        onChange={(event) => handleDonorChange('lastName')(event.target.value)}
                                                        className="w-full bg-black/60 border border-zinc-800 px-3 py-2 text-sm text-white focus:outline-none focus:border-blood transition-colors"
                                                    />
                                                    {detailsErrors.lastName && <p className="text-xs text-blood">{detailsErrors.lastName}</p>}
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-xs uppercase tracking-widest text-zinc-500">{content.modal.emailLabel}</label>
                                                <input
                                                    type="email"
                                                    autoComplete="email"
                                                    value={donorDetails.email}
                                                    onChange={(event) => handleDonorChange('email')(event.target.value)}
                                                    className="w-full bg-black/60 border border-zinc-800 px-3 py-2 text-sm text-white focus:outline-none focus:border-blood transition-colors"
                                                />
                                                {detailsErrors.email && <p className="text-xs text-blood">{detailsErrors.email}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-xs uppercase tracking-widest text-zinc-500">
                                                    {content.modal.notesLabel}
                                                    <span className="ml-2 font-normal normal-case text-zinc-600">{content.modal.notesOptionalHint}</span>
                                                </label>
                                                <textarea
                                                    rows={4}
                                                    autoComplete="off"
                                                    value={donorDetails.notes ?? ''}
                                                    onChange={(event) => handleDonorChange('notes')(event.target.value)}
                                                    className="w-full bg-black/60 border border-zinc-800 px-3 py-2 text-sm text-white focus:outline-none focus:border-blood transition-colors min-h-[96px]"
                                                />
                                            </div>
                                            <div className="flex flex-col-reverse gap-3 md:flex-row md:justify-between md:items-center pt-2">
                                                <button
                                                    type="button"
                                                    onClick={handleBackToTiers}
                                                    className="cursor-pointer text-xs uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-300"
                                                >
                                                    {content.modal.backToTiers}
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="cursor-pointer inline-flex items-center justify-center bg-blood px-6 py-3 font-serif uppercase tracking-widest text-white transition-colors hover:bg-red-900"
                                                >
                                                    {content.modal.continueBtn}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                )}

                                {/* STEP 3 & 4: Payment + Review */}
                                {(paymentStep === 'card' || paymentStep === 'review') && selectedTier && (
                                    <div className="space-y-6">
                                        <p className="text-zinc-400 font-body">{content.modal.stepDescriptions[paymentStep]}</p>

                                        <div className="bg-zinc-900/50 p-4 border border-zinc-800 flex justify-between items-center">
                                            <div>
                                                <div className="text-zinc-500 text-xs uppercase tracking-wider">{content.modal.selectedTier}</div>
                                                <div className="text-white font-serif">{selectedTier.name}</div>
                                            </div>
                                            <div className="text-blood font-bold text-xl">{formatAmountForLanguage(selectedTier.price, selectedTier.currency, lang)}</div>
                                        </div>

                                        {intentError && (
                                            <div className="rounded border border-blood/40 bg-blood/10 p-3 text-sm text-blood">
                                                {intentError}
                                            </div>
                                        )}

                                        {isCreatingIntent && !clientSecret && (
                                            <div className="flex items-center gap-3 text-sm text-zinc-400">
                                                <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-500 border-t-transparent"></div>
                                                {content.modal.processing}
                                            </div>
                                        )}

                                        {!publishableKey && (
                                            <div className="rounded border border-blood/40 bg-blood/10 p-3 text-sm text-blood">
                                                Stripe is not configured. Set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY to enable payments.
                                            </div>
                                        )}

                                        {clientSecret && publishableKey && stripePromise && (
                                            <Elements
                                                stripe={stripePromise ?? null}
                                                options={{
                                                    clientSecret,
                                                    appearance: {
                                                        theme: 'night',
                                                        variables: {
                                                            colorPrimary: '#8a0b0b',
                                                            colorText: '#f4f4f5'
                                                        }
                                                    }
                                                }}
                                            >
                                                <StripeCheckoutForm
                                                    tier={selectedTier}
                                                    modalContent={content.modal}
                                                    paymentStep={paymentStep}
                                                    onStepChange={(nextStep) => setPaymentStep(nextStep)}
                                                    onSuccess={handleStripeSuccess}
                                                    onBackToDetails={handleBackToDetails}
                                                    donorDetails={donorDetails}
                                                />
                                            </Elements>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}