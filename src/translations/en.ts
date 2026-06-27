import { TIER_LIMITS } from "@/constants/tiers";
import type { Content } from "@/types";

export const enContent: Content = {
  nav: {
    story: "The Story",
    game: "Game",
    campaign: "Crowdfunding",
    gallery: "Gallery",
    steam: "Steam"
  },
  hero: {
    subtitle: "Czech Psychological Horror",
    quote: "\"A Czech psychological horror about guilt, silence, and a house that never forgets.\"",
    pitch: "Help fund the first production phase: English voice-over, sound design, a playable demo, and Steam preparation. Shadowless is an independent solo project — every contribution brings the game closer to completion.",
    wishlist: "Add to Wishlist",
    support: "Support Directly",
    supportStartovac: "Support via Startovač"
  },
  lore: {
    label: "The Narrative",
    title: "Dalton Adams",
    p1: "Shadowless doesn't just haunt a house. It dissects a soul.",
    p2: "You are Dalton Adams. A man trying to outrun the echoes of a life that no longer exists. The move to a secluded Czech village was supposed to be a fresh start, but the silence here is heavy. After Lucy's accident and Ethan's... change... the isolation isn't just physical.",
    p3: "The house listens. It breathes. And it remembers things you want to forget.",
    quote: "\"Are the walls closing in, or is your mind expanding to fill the void? In this house, sanity is a finite resource.\"",
    p4: "Face what lurks in the corners of your vision. But remember: realizing the truth might be worse than the madness itself."
  },
  about: {
    title: "Labyrinth of the",
    titleHighlight: "Subconscious",
    envDescription: "The Adams' residence is a hostile organism. Powered by Unreal Engine 5, every shadow is calculated, every creak is a warning. The layout shifts when you aren't looking. From the suffocating attic to the basement that feels miles deep, the environment reflects Dalton's fracturing psyche.",
    gameplayTitle: "Survival",
    gameplayPoints: [
      "Total Helplessness. No weapons. No combat. Your only defense is to run, hide, or pray.",
      "Fragments of Truth. Piece together the tragedy through environmental storytelling. The house holds the answers.",
      "Non-Euclidean Puzzles. Logic doesn't apply here. Manipulate a reality that is constantly breaking down."
    ],
    features: [
      {
        title: "Psychological Terror",
        description: "No cheap jump scares. Just a suffocating atmosphere that lingers long after you quit.",
        icon: "brain"
      },
      {
        title: "Unreliable Reality",
        description: "Did that mannequin move? Was that door there before? Trust nothing, not even your eyes.",
        icon: "eye"
      },
      {
        title: "Next-Gen Visceral",
        description: "Lumen & Nanite technology delivers photorealism that makes the horror uncomfortably tangible.",
        icon: "monitor"
      },
      {
        title: "Reactive Audio",
        description: "Metasounds creating a soundscape where silence is louder than a scream.",
        icon: "home"
      }
    ]
  },
  gallery: {
    title: "Gallery of Dread",
    subtitle: "Visual evidence of the decline",
    items: [
      { title: "Bedroom", desc: "A place that once welcomed. Now warns." },
      { title: "Hallway", desc: "Some stairs lead only down." },
      { title: "Living Room", desc: "Memories preserved in dust and regret." },
      { title: "Bathroom", desc: "Whatever happened here, it wasn't prayer." }
    ]
  },
  crowdfunding: {
    title: "Support the Project",
    intro: "Shadowless is an independent psychological horror in active development. The story is written, the vision is clear. Your support helps fund the next production phase and bring this game to life.",
    primaryNote: "This website is the primary place to support Shadowless. Payments made here go directly to fund the game's development. Alternatively, you can support via Startovač — a well-known Czech crowdfunding platform. Both paths fund the same development of Shadowless.",
    funded: "Funded",
    statusLabel: {
      live: "ACTIVE",
      success: "SUCCESS",
      failed: "CLOSED"
    },
    backers: "Supporters",
    daysLeft: "Days Remaining",
    developerTitle: "The Developer",
    developerName: "Petr Vurm",
    developerRole: "Solo Developer",
    developerBio: "I am Petr. A student, a developer, a horror enthusiast. I don't just want to make a game; I want to create a scar on your psyche. Shadowless is my vision of what happens when the lights go out inside your head.",
    developerQuote: "\"Help me build a nightmare we can all share.\"",
    breakdownTitle: "How Funds Are Used",
    breakdown: {
      dev: "Core Development",
      devDesc: "3D assets, textures, environments, engine licensing",
      audio: "Audio & Voice-Over",
      audioDesc: "Voice acting, casting, sound design, atmosphere",
      tax: "Backer Rewards",
      fees: "Taxes, Fees & Reserve"
    },
    firstMilestone: {
      title: "First Milestone",
      amount: 2500,
      description: "Casting / voice test, English voice-over test, audio direction, trailer preparation, first public presentation.",
      note: "The first milestone does not pay for the whole game — it funds the first production step."
    },
    whereMoneyGoesTitle: "Where the Money Goes",
    whereMoneyGoesItems: [
      { label: "Voice-over / casting / dubbing tests" },
      { label: "Sound assets and atmosphere" },
      { label: "3D assets, textures and environments" },
      { label: "Trailer and presentation materials" },
      { label: "Steam / technical costs" },
      { label: "Fees, taxes and reserve" }
    ],
    whatExistsTitle: "What Already Exists",
    whatExistsItems: [
      "Story bible",
      "Core game concept",
      "Chapter and ending plan",
      "Project website",
      "Visual direction",
      "Work-in-progress house environment",
      "Mechanics prototyping",
      "Steam presentation preparation",
      "Gallery and first presentation materials"
    ],
    fairWarning: "Shadowless is a game in development. Your support helps fund its continued creation. Digital rewards will be delivered gradually based on development progress. Timelines may change depending on the scope, budget, and technical requirements of the game. If the scope or plan changes significantly, supporters will be informed via the website and email.",
    stretchGoalsTitle: "Milestones",
    stretchGoals: [
      { amount: 2500, title: "First Voice of Shadows", description: "Casting, English voice-over test, audio direction and first public presentation." },
      { amount: 10400, title: "Playable Demo", description: "First playable vertical slice demonstrating the core atmosphere and mechanics." },
      { amount: 25000, title: "English Voice-Over for Demo", description: "Professional English voice acting for the playable demo — first characters brought to life." },
      { amount: 50000, title: "Steam + Public Demo", description: "Steam page launch, public demo release, first wide-audience presentation of Shadowless." },
      { amount: 100000, title: "Broader English Production", description: "Expanded English voice-over and audio production across more of the game." },
      { amount: 200000, title: "Professional Czech Voice-Over", description: "Professional Czech dubbing — the game can be fully experienced in Czech as well." },
      { amount: 400000, title: "Czech Dubbing with Known Voices", description: "Higher budget makes it possible to approach well-known Czech actors and voice artists. No specific names are guaranteed until contracts are signed." }
    ],
    cta: "Support the Project",
    supporters: {
      title: "Supporter Contributions",
      toggleOpen: "Show supporters",
      toggleClose: "Hide supporters",
      loading: "Loading supporters...",
      error: "Unable to load supporters right now.",
      empty: "No recorded supporters yet. Be the first to contribute.",
      tableHeaders: {
        name: "Name",
        amount: "Total contributed"
      }
    },
    modal: {
      title: "Choose Your Support",
      recommendedLabel: "Recommended",
      stepTitles: {
        tier: "Select a Tier",
        details: "Your Details",
        card: "Payment Method",
        review: "Review & Confirm"
      },
      stepDescriptions: {
        tier: "Pick the tier that matches your level of support.",
        details: "Tell us who you are so we can deliver your rewards.",
        card: "Enter your card details using the secure Stripe form.",
        review: "Review everything before completing your contribution."
      },
      payBtn: "Complete Support",
      continueBtn: "Continue",
      reviewBtn: "Go to Summary",
      processing: "Processing...",
      successTitle: "Support Received",
      successMsg: "Thank you. Check your inbox for confirmation.",
      closeBtn: "Close",
      backToTiers: "Back to Tiers",
      backToDetails: "Edit Details",
      editDetails: "Change Details",
      editPayment: "Change Payment Method",
      selectedTier: "Selected Tier",
      testCardNotice: "Use Stripe test card 4242 4242 4242 4242 with any future expiry, CVC 123, ZIP 12345.",
      firstNameLabel: "First Name",
      lastNameLabel: "Last Name",
      emailLabel: "Email",
      notesLabel: "Additional Notes",
      notesOptionalHint: "Optional.",
      summaryHeading: "Final Review",
      summaryContact: "Contact",
      summaryNotes: "Notes",
      summaryAmount: "Total",
      notesEmpty: "No additional notes provided.",
      consentTerms: "I have read and agree to the Terms & Conditions.",
      consentPrivacy: "I have read and agree to the Privacy Policy.",
      consentGameDev: "I understand that Shadowless is a game in development and that digital rewards will be delivered gradually based on development progress.",
      consentRequired: "Please confirm all consents to complete your contribution.",
      validation: {
        required: "This field is required.",
        email: "Enter a valid email address."
      },
      availability: {
        available: "{remaining} of {total} remaining",
        soldOut: "Sold Out"
      },
      tiers: [
        {
          id: "tier1",
          name: "Symbolic Support",
          price: 6,
          currency: "$",
          rewards: ["Digital thank-you", "Name on the supporters wall on our website"],
          limit: TIER_LIMITS["tier1"] ?? undefined,
          sold: 0
        },
        {
          id: "tier2",
          name: "Name in Credits",
          price: 12,
          currency: "$",
          rewards: ["All previous rewards", "Your name in the game credits — Supporters section"],
          limit: TIER_LIMITS["tier2"] ?? undefined,
          sold: 0
        },
        {
          id: "tier3",
          name: "Digital Copy",
          price: 19,
          currency: "$",
          rewards: ["All previous rewards", "Digital copy of Shadowless after release. Preferred platform is Steam — exact delivery method will be confirmed based on distribution platform rules at the time of release."],
          limit: TIER_LIMITS["tier3"] ?? undefined,
          sold: 0
        },
        {
          id: "tier4",
          name: "Founder Pack",
          price: 31,
          currency: "$",
          rewards: ["Digital copy of Shadowless", "Digital soundtrack", "Wallpaper pack", "Name on the supporters wall"],
          limit: TIER_LIMITS["tier4"] ?? undefined,
          sold: 0
        },
        {
          id: "tier5",
          name: "Truth Seeker",
          price: 56,
          currency: "$",
          rewards: ["All previous rewards", "Digital artbook", "Lore PDF document", "Name in game credits"],
          recommended: true,
          limit: TIER_LIMITS["tier5"] ?? undefined,
          sold: 0
        },
        {
          id: "tier6",
          name: "Archivist",
          price: 94,
          currency: "$",
          rewards: ["All previous rewards", "Access to development updates and behind-the-scenes materials", "Closed community access (when launched)"],
          limit: TIER_LIMITS["tier6"] ?? undefined,
          sold: 0
        },
        {
          id: "tier7",
          name: "Dev Patron",
          price: 188,
          currency: "$",
          rewards: ["All previous rewards", "Access to a test build when available — timeline depends on development progress", "Featured thanks in credits and on the website"],
          limit: TIER_LIMITS["tier7"] ?? undefined,
          sold: 0
        },
        {
          id: "tier8",
          name: "Voice Patron",
          price: 375,
          currency: "$",
          rewards: ["All previous rewards", "Special thanks in the 'Voice & Audio Supporters' section"],
          limit: TIER_LIMITS["tier8"] ?? undefined,
          sold: 0
        },
        {
          id: "tier9",
          name: "Production Patron",
          price: 750,
          currency: "$",
          rewards: ["Special thanks as a significant production supporter", "Prominent thanks on the website and in game credits"],
          limit: TIER_LIMITS["tier9"] ?? undefined,
          sold: 0
        }
      ]
    }
  },
  thankYou: {
    title: "Thank You",
    subtitle: "Your contribution has been received.",
    orderLabel: "Order ID",
    tierLabel: "Selected Tier",
    amountLabel: "Contribution Amount",
    supporterLabel: "Supporter",
    emailLabel: "Contact Email",
    paymentIdLabel: "Stripe Payment ID",
    notesLabel: "Notes",
    notesEmpty: "No additional notes provided.",
    emailNote: "Confirmation and contribution details have been sent to your email.",
    backBtn: "Visit Website"
  },
  terms: {
    title: "Terms & Conditions",
    lastUpdatedLabel: "Last updated",
    lastUpdatedValue: "27 June 2026",
    intro: "These Terms & Conditions govern your participation in the Shadowless crowdfunding campaign operated by Petr Vurm (the \"Creator\"). By making a pledge you acknowledge and accept the provisions below.",
    sections: [
      {
        id: "campaign",
        heading: "1. Campaign Overview",
        paragraphs: [
          "Shadowless is an independent video game currently under development by the Creator. Pledges collected through this website are voluntary contributions that finance ongoing production milestones and campaign administration.",
          "A pledge does not create any partnership, equity stake, or guarantee of commercial release. By supporting the campaign you recognise the inherent uncertainties associated with creative software projects."
        ]
      },
      {
        id: "eligibility",
        heading: "2. Eligibility and Registration",
        paragraphs: [
          "You confirm that you are at least 18 years old, or have obtained the consent of a legal guardian, and that you have the legal capacity to enter into these Terms under the laws applicable to you.",
          "You agree to provide accurate contact details and to update them promptly so the Creator can issue legally required notices and deliver any rewards linked to your pledge tier."
        ]
      },
      {
        id: "pledges",
        heading: "3. Pledges, Payments and Taxes",
        paragraphs: [
          "Stripe processes all payments. When you confirm your pledge, the amount displayed for your tier is charged immediately in the listed currency.",
          "Pledges are final and non-refundable except where mandatory consumer legislation grants you a statutory right of withdrawal. The Creator applies all received funds exclusively to the development and administration of Shadowless."
        ],
        bullets: [
          "Your bank or card issuer may add conversion fees, taxes, or other charges, which remain your responsibility.",
          "Stripe securely stores and protects payment credentials; the Creator never receives or retains your card information."
        ]
      },
      {
        id: "rewards",
        heading: "4. Rewards and Fulfilment",
        paragraphs: [
          "Each pledge tier describes intended digital rewards. All rewards are delivered digitally and electronically — there are no physical goods associated with any tier.",
          "Delivery timelines are estimates. Production constraints may require adjustments, and the Creator will communicate updates via the email associated with your pledge.",
          "If a specific reward becomes impracticable, the Creator will provide a reasonable digital substitute of equal or greater value. Refunds are not available in lieu of such substitutions."
        ]
      },
      {
        id: "changes",
        heading: "5. Project Changes and Timelines",
        paragraphs: [
          "The Creator may refine scope, features, or stretch goals to respond to technical, legal, or financial constraints while safeguarding the overall quality of Shadowless.",
          "In the event of material delays or scope changes, the Creator will inform backers via the website and email and supply an updated fulfilment plan. Your entitlement to the rewards of your selected tier remains valid regardless of the total amount ultimately raised."
        ]
      },
      {
        id: "data",
        heading: "6. Communication and Data Protection",
        paragraphs: [
          "The Creator uses your personal data solely to administer pledges, comply with legal obligations, deliver rewards, and communicate campaign information. Your data will never be sold to third parties.",
          "You may opt out of non-essential updates at any time. Transactional or fulfilment-related communications will continue while your pledge remains outstanding to ensure you receive the rewards owed to you.",
          "For full details on data processing, please see our Privacy Policy."
        ]
      },
      {
        id: "liability",
        heading: "7. Liability and Governing Law",
        paragraphs: [
          "To the maximum extent permitted by law, the Creator is liable only for damages caused by intent or gross negligence and excludes liability for indirect or consequential losses.",
          "These Terms are governed by the laws of the Czech Republic, excluding its conflict-of-law rules. Any dispute will be submitted to the competent Czech courts unless mandatory law in your country of residence grants you a different forum."
        ]
      }
    ],
    pledgeReminderHeading: "Important notice on non-refundable pledges",
    pledgeReminderBody: "All contributions to the Shadowless campaign are treated as non-refundable donations unless mandatory consumer law provides otherwise. Digital rewards will be delivered gradually based on development progress. If the scope or plan changes significantly, supporters will be informed via the website and email.",
    contactHeading: "Contact",
    contactBusinessLabel: "Registered owner",
    contactBusinessValue: "Petr Vurm, sole proprietor (Czech Republic)",
    contactBusinessIdLabel: "Business ID (IČ)",
    contactBusinessIdValue: "21180164",
    contactEmailLabel: "Contact email",
    contactEmail: "kontakt@petrvurm.cz",
    backLinkLabel: "Back to home"
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdatedLabel: "Last updated",
    lastUpdatedValue: "27 June 2026",
    intro: "This Privacy Policy explains how Petr Vurm (\"the Creator\") collects, uses, and protects personal data in connection with the Shadowless crowdfunding campaign operated via shadowlessthegame.eu.",
    sections: [
      {
        id: "controller",
        heading: "1. Data Controller",
        paragraphs: [
          "The data controller is Petr Vurm, sole proprietor, Czech Republic, IČ 21180164. Contact: kontakt@petrvurm.cz."
        ]
      },
      {
        id: "data-collected",
        heading: "2. Data We Collect",
        paragraphs: [
          "When you make a contribution, we collect: first name, last name, email address, optional notes, payment reference (Stripe payment intent ID), amount contributed, selected tier, and date of contribution.",
          "We do not store full card numbers or payment credentials — these are handled exclusively by Stripe (stripe.com). Please refer to Stripe's privacy policy for details on their data handling."
        ]
      },
      {
        id: "purpose",
        heading: "3. Purpose and Legal Basis",
        paragraphs: [
          "We process your personal data for the following purposes:",
        ],
        bullets: [
          "Administering your pledge and delivering digital rewards — legal basis: performance of a contract.",
          "Sending order confirmations and campaign updates — legal basis: legitimate interest / consent.",
          "Complying with legal and accounting obligations — legal basis: legal obligation.",
          "Maintaining the public supporters list (first name, last name, amount) — legal basis: legitimate interest. You may request removal at any time."
        ]
      },
      {
        id: "retention",
        heading: "4. Data Retention",
        paragraphs: [
          "Contribution records are retained for the duration required by Czech accounting law (typically 10 years). Contact data is retained until rewards have been fulfilled and no longer needed for legal purposes.",
          "You may request deletion of your personal data at any time, subject to legal retention obligations."
        ]
      },
      {
        id: "rights",
        heading: "5. Your Rights",
        paragraphs: [
          "Under the GDPR and applicable Czech law, you have the right to: access your personal data, correct inaccurate data, request erasure (right to be forgotten), restrict processing, and object to processing.",
          "To exercise any of these rights, please contact us at kontakt@petrvurm.cz. We will respond within 30 days."
        ]
      },
      {
        id: "third-parties",
        heading: "6. Third Parties",
        paragraphs: [
          "We share your data with the following service providers solely to operate the campaign:",
        ],
        bullets: [
          "Stripe, Inc. — payment processing.",
          "Resend / email service provider — sending order confirmations.",
          "Supabase / database host — storing contribution records."
        ]
      },
      {
        id: "security",
        heading: "7. Security",
        paragraphs: [
          "We take reasonable technical and organisational measures to protect your personal data. All payment data is processed exclusively through Stripe's PCI-DSS-compliant infrastructure.",
          "In the event of a data breach that poses a risk to your rights, we will notify the relevant supervisory authority and affected individuals as required by law."
        ]
      }
    ],
    contactHeading: "Contact",
    contactEmail: "kontakt@petrvurm.cz",
    backLinkLabel: "Back to home"
  },
  footer: {
    rights: "All rights reserved.",
    madeIn: "Crafted in the dark heart of the Czech Republic.",
    quote: "\"Light is just a temporary illusion.\"",
    termsLink: "Terms & Conditions",
    privacyLink: "Privacy Policy"
  }
};
