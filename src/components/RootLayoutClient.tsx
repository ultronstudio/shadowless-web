/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useCallback, useEffect, useMemo, useState, type MouseEvent, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { TRANSLATIONS } from "@/translations";
import { Language, type Content } from "@/types";
import LanguageContext from "@/context/LanguageContext";
import { STEAM_URL } from "@/constants";
import Footer from "@/sections/Footer";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "@/lib/language";
import { BASE_META, PAGE_META } from "@/constants/meta";

type PageKey = keyof typeof PAGE_META;

const FALLBACK_PAGE: PageKey = "home";

function resolvePageKey(pathname: string): PageKey {
    if (pathname === "/" || pathname === "") {
        return "home";
    }

    if (pathname.startsWith("/terms")) {
        return "terms";
    }

    if (pathname.startsWith("/thank-you")) {
        return "thankYou";
    }

    return FALLBACK_PAGE;
}

function upsertNameMeta(name: string, content: string) {
    let element = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
    if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
    }
    element.setAttribute("content", content);
}

function upsertPropertyMeta(property: string, content: string) {
    let element = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
    if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
    }
    element.setAttribute("content", content);
}

interface RootLayoutClientProps {
    children: ReactNode;
    initialLang?: Language;
}

interface NavigationProps {
    content: Content;
    lang: Language;
    isSwitching: boolean;
    onLangChange: (lang: Language) => void;
}

function Navigation({ content, lang, isSwitching, onLangChange }: NavigationProps) {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("hero");

    const updateActiveSection = useCallback(() => {
        if (!isHome) return;

        const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
        if (sections.length === 0) return;

        const referencePoint = window.innerHeight * 0.35;
        let closestSectionId = "hero";
        let smallestDistance = Number.POSITIVE_INFINITY;

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.bottom < 0 || rect.top > window.innerHeight) {
                return;
            }

            const sectionCenter = rect.top + rect.height / 2;
            const distance = Math.abs(sectionCenter - referencePoint);
            if (distance < smallestDistance) {
                smallestDistance = distance;
                closestSectionId = section.id;
            }
        });

        setActiveSection(closestSectionId);
    }, [isHome]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            updateActiveSection();
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", updateActiveSection);
        updateActiveSection();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", updateActiveSection);
        };
    }, [updateActiveSection]);

    useEffect(() => {
        if (!isHome) {
            setActiveSection("hero");
            return;
        }
        updateActiveSection();
    }, [isHome, updateActiveSection]);

    const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        if (!isHome) return;
        event.preventDefault();
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
    };

    const navLinkClass = (sectionId: string) =>
        `relative group uppercase text-[0.65rem] tracking-[0.3em] transition-all duration-300 drop-shadow-md ${
            activeSection === sectionId ? "text-blood font-bold" : "text-zinc-300 hover:text-blood"
        }`;

    const navClassName = `fixed top-0 left-0 w-full z-50 px-6 transition-all duration-300 ease-in-out ${
        isScrolled ? "py-3 bg-black/95 backdrop-blur-md border-b border-zinc-900 shadow-2xl" : "py-6 bg-gradient-to-b from-black/80 to-transparent"
    }`;

    return (
        <nav className={navClassName}>
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    href="/"
                    className="opacity-90 hover:opacity-100 transition-opacity cursor-pointer select-none"
                >
                    <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white drop-shadow-md">
                        SHADOWLESS
                    </span>
                </Link>

                <div className="flex items-center gap-4 md:gap-8">
                    <div className="hidden md:flex items-center gap-8 font-serif tracking-[0.35em] text-xs">
                        <Link
                            href={isHome ? "#lore" : "/#lore"}
                            onClick={(e) => scrollToSection(e, "lore")}
                            className={navLinkClass("lore")}
                        >
                            {content.nav.story}
                            <span
                                className={`absolute -bottom-1 left-0 w-full h-px bg-blood transform origin-left transition-transform duration-300 ${
                                    activeSection === "lore" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                }`}
                            ></span>
                        </Link>
                        <Link
                            href={isHome ? "#about" : "/#about"}
                            onClick={(e) => scrollToSection(e, "about")}
                            className={navLinkClass("about")}
                        >
                            {content.nav.game}
                            <span
                                className={`absolute -bottom-1 left-0 w-full h-px bg-blood transform origin-left transition-transform duration-300 ${
                                    activeSection === "about" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                }`}
                            ></span>
                        </Link>
                        <Link
                            href={isHome ? "#crowdfunding" : "/#crowdfunding"}
                            onClick={(e) => scrollToSection(e, "crowdfunding")}
                            className={navLinkClass("crowdfunding")}
                        >
                            {content.nav.campaign}
                            <span
                                className={`absolute -bottom-1 left-0 w-full h-px bg-blood transform origin-left transition-transform duration-300 ${
                                    activeSection === "crowdfunding"
                                        ? "scale-x-100"
                                        : "scale-x-0 group-hover:scale-x-100"
                                }`}
                            ></span>
                        </Link>
                        <Link
                            href={isHome ? "#gallery" : "/#gallery"}
                            onClick={(e) => scrollToSection(e, "gallery")}
                            className={navLinkClass("gallery")}
                        >
                            {content.nav.gallery}
                            <span
                                className={`absolute -bottom-1 left-0 w-full h-px bg-blood transform origin-left transition-transform duration-300 ${
                                    activeSection === "gallery"
                                        ? "scale-x-100"
                                        : "scale-x-0 group-hover:scale-x-100"
                                }`}
                            ></span>
                        </Link>
                        <Link
                            href={STEAM_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="text-white border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all uppercase text-xs shadow-lg"
                        >
                            {content.nav.steam}
                        </Link>
                    </div>

                    <div className="flex items-center gap-3 md:border-l md:border-zinc-700 md:pl-6 ml-2">
                        <Globe
                            size={16}
                            className={`text-zinc-400 transition-all duration-500 ${
                                isSwitching ? "rotate-180 text-white" : ""
                            }`}
                        />
                        <div className="flex bg-black/60 rounded border border-zinc-800/50 p-1 backdrop-blur-md">
                            {SUPPORTED_LANGUAGES.map((l) => (
                                <button
                                    key={l}
                                    onClick={() => onLangChange(l)}
                                    className={`cursor-pointer px-3 py-1 text-[10px] font-serif font-bold tracking-widest uppercase rounded transition-all duration-300 ${
                                        lang === l
                                            ? "bg-blood text-white shadow-[0_0_10px_rgba(138,11,11,0.5)] scale-105"
                                            : "text-zinc-400 hover:text-zinc-200 hover:bg-white/10"
                                    }`}
                                >
                                    {l}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default function RootLayoutClient({ children, initialLang }: RootLayoutClientProps) {
    const pathname = usePathname();
    const [lang, setLang] = useState<Language>(initialLang ?? DEFAULT_LANGUAGE);
    const [isSwitching, setIsSwitching] = useState(false);

    const currentPage = useMemo<PageKey>(() => resolvePageKey(pathname || "/"), [pathname]);

    const content = TRANSLATIONS[lang];

    useEffect(() => {
        if (typeof window === "undefined") return;

        const storedLang = window.localStorage?.getItem("shadowless-lang") as Language | null;
        if (storedLang && SUPPORTED_LANGUAGES.includes(storedLang)) {
            setLang(storedLang);
            return;
        }

        const browserLang = window.navigator?.languages?.[0] || window.navigator?.language || "";
        const normalized = browserLang.split("-")[0]?.toLowerCase();
        if (normalized && SUPPORTED_LANGUAGES.includes(normalized as Language)) {
            setLang(normalized as Language);
        }
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;
        window.localStorage?.setItem("shadowless-lang", lang);
        document.documentElement.lang = lang;
    }, [lang]);

    useEffect(() => {
        if (typeof document === "undefined") return;

        const baseMeta = BASE_META[lang];
        const pageMeta = PAGE_META[currentPage][lang];

        if (!baseMeta || !pageMeta) {
            return;
        }

        const pageTitle = currentPage === "home" ? pageMeta.title : `${pageMeta.title} | ${baseMeta.siteTitle}`;
        document.title = pageTitle;

        upsertNameMeta("description", pageMeta.description);
        upsertNameMeta("keywords", baseMeta.keywords.join(", "));
        upsertPropertyMeta("og:title", pageMeta.title);
        upsertPropertyMeta("og:description", pageMeta.description);
        upsertPropertyMeta("og:site_name", baseMeta.siteTitle);
        upsertPropertyMeta("og:locale", baseMeta.locale);
        upsertNameMeta("twitter:title", pageMeta.title);
        upsertNameMeta("twitter:description", pageMeta.description);
    }, [lang, currentPage]);

    const handleLangChange = useCallback((newLang: Language) => {
        if (newLang === lang) return;
        setIsSwitching(true);
        setLang(newLang);
        setTimeout(() => setIsSwitching(false), 500);
    }, [lang]);

    const providerValue = useMemo(
        () => ({
            lang,
            content,
            isSwitching,
            setLanguage: handleLangChange,
        }),
        [lang, content, isSwitching, handleLangChange],
    );

    return (
        <LanguageContext.Provider value={providerValue}>
            <Navigation
                content={content}
                lang={lang}
                isSwitching={isSwitching}
                onLangChange={handleLangChange}
            />
            {children}
            <Footer content={content.footer} />
        </LanguageContext.Provider>
    );
}
