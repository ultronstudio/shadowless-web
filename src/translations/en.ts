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
    subtitle: "First-Person Psychological Horror",
    quote: "\"The darkness isn't what you should fear. It's what you see when you turn on the light.\"",
    wishlist: "Add to Wishlist",
    support: "Fuel the Nightmare"
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
    title: "Join the Descent",
    intro: "Shadowless is a passion project born from a love for true horror. The foundation is laid, the nightmare is scripted. Now, I need you to help me bring the shadows to life.",
    funded: "Funded",
    statusLabel: {
      live: "ACTIVE",
      success: "SUCCESS",
      failed: "CLOSED"
    },
    backers: "Souls Pledged",
    daysLeft: "Days Remaining",
    developerTitle: "The Developer",
    developerName: "Petr Vurm",
    developerRole: "Solo Developer",
    developerBio: "I am Petr. A student, a developer, a horror enthusiast. I don't just want to make a game; I want to create a scar on your psyche. Shadowless is my vision of what happens when the lights go out inside your head.",
    developerQuote: "\"Help me build a nightmare we can all share.\"",
    breakdownTitle: "Allocation of Resources",
    breakdown: {
      dev: "Core Development",
      devDesc: "Assets, mocap, licensing, polishing",
      audio: "Auditory Design",
      audioDesc: "Professional composition, dubbing, sound engineering",
      tax: "Rewards for Backers",
      fees: "Taxes and Fees"
    },
    stretchGoalsTitle: "Milestones",
    stretchGoals: [
      { amount: 27777, title: "It Breaths", description: "Campaign success. Digital rewards secured. The nightmare begins." },
      { amount: 55000, title: "Symphony of Fear", description: "Professional composer hired to create a unique, nerve-wracking score." },
      { amount: 110000, title: "Binaural Nightmare", description: "Full 3D immersive sound design. You will hear them breathing behind you." },
      { amount: 240000, title: "Voice of Madness", description: "Professional English voice acting to bring the characters' despair to life." },
      { amount: 330000, title: "The True Vision", description: "Full production quality. No compromises. The game exactly as envisioned." },
      { amount: 400000, title: "Hyper-Realism", description: "Expanded asset fidelity and fluid motion-matched animations." },
      { amount: 500000, title: "Cinematic Trauma", description: "Key narrative beats rendered as film-quality in-game cutscenes." },
      { amount: 660000, title: "Portable Dread", description: "Nintendo Switch port. Take the fear with you." },
      { amount: 900000, title: "The Lost Chapter", description: "A new narrative expansion plunging deeper into the lore." },
      { amount: 1200000, title: "Console Release", description: "PlayStation 5 and Xbox Series X/S versions." }
    ],
    cta: "Back this Project",
    supporters: {
      title: "Supporter Contributions",
      toggleOpen: "Show supporters",
      toggleClose: "Hide supporters",
      loading: "Summoning supporters...",
      error: "Unable to load supporters right now.",
      empty: "No recorded supporters yet. Be the first to descend.",
      tableHeaders: {
        name: "Name",
        amount: "Total contributed"
      }
    },
    modal: {
      title: "Choose Your Fate",
      recommendedLabel: "Recommended",
      stepTitles: {
        tier: "Select a Tier",
        details: "Backer Details",
        card: "Payment Method",
        review: "Review & Confirm"
      },
      stepDescriptions: {
        tier: "Pick the pledge that matches your devotion.",
        details: "Tell us who you are so we can deliver your rewards.",
        card: "Enter your card details using the secure Stripe form.",
        review: "Confirm every detail before committing your pledge."
      },
      payBtn: "Commit",
      continueBtn: "Continue",
      reviewBtn: "Go to Summary",
      processing: "Synchronizing...",
      successTitle: "Pact Sealed",
      successMsg: "Your support echoes in the void. Check your inbox for confirmation.",
      closeBtn: "Close",
      backToTiers: "Back to Tiers",
      backToDetails: "Edit Details",
      editDetails: "Change Backer Details",
      editPayment: "Change Payment Method",
      selectedTier: "Chosen Tier",
      testCardNotice: "Use Stripe test card 4242 4242 4242 4242 with any future expiry, CVC 123, ZIP 12345.",
      firstNameLabel: "First Name",
      lastNameLabel: "Last Name",
      emailLabel: "Email",
      notesLabel: "Additional Notes",
      notesOptionalHint: "Optional. Anything we should know about your pledge?",
      summaryHeading: "Final Review",
      summaryContact: "Contact",
      summaryNotes: "Notes",
      summaryAmount: "Total",
      notesEmpty: "No additional notes provided.",
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
          name: "Shadow Observer",
          price: 5,
          currency: "$",
          rewards: ["Digital Gratitude", "Name in Credits"],
          limit: TIER_LIMITS["tier1"] ?? undefined,
          sold: 0
        },
        {
          id: "tier2",
          name: "Wanderer",
          price: 15,
          currency: "$",
          rewards: ["All previous rewards", "Digital Copy of Shadowless"],
          limit: TIER_LIMITS["tier2"] ?? undefined,
          sold: 0
        },
        {
          id: "tier3",
          name: "Explorer",
          price: 25,
          currency: "$",
          rewards: ["All previous rewards", "Original Soundtrack", "High-Res Wallpapers"],
          limit: TIER_LIMITS["tier3"] ?? undefined,
          sold: 0
        },
        {
          id: "tier4",
          name: "Truth Seeker",
          price: 45,
          currency: "$",
          rewards: ["All previous rewards", "Digital Artbook", "Lore Book (PDF)", "Early Access", "Inner Circle Community"],
          limit: TIER_LIMITS["tier4"] ?? undefined,
          sold: 0
        },
        {
          id: "tier5",
          name: "DLC: Hellwalker",
          price: 60,
          currency: "$",
          rewards: ["All previous rewards", "DLC \"HELL\" Expansion"],
          recommended: true,
          limit: TIER_LIMITS["tier5"] ?? undefined,
          sold: 0
        },
        {
          id: "tier6",
          name: "Digital Curator",
          price: 75,
          currency: "$",
          rewards: ["All previous rewards", "Digital Backer Certificate", "Personalized Video Message"],
          limit: TIER_LIMITS["tier6"] ?? undefined,
          sold: 0
        },
        {
          id: "tier7",
          name: "Physical Curator",
          price: 90,
          currency: "$",
          rewards: ["All \"Digital Curator\" rewards", "Physical Copy (Boxed)", "Printed Artbook"],
          limit: TIER_LIMITS["tier7"] ?? undefined,
          sold: 0
        },
        {
          id: "tier8",
          name: "Collector Deluxe",
          price: 110,
          currency: "$",
          rewards: ["All previous rewards", "Physical Soundtrack CD", "Sticker Pack"],
          limit: TIER_LIMITS["tier8"] ?? undefined,
          sold: 0
        },
        {
          id: "tier9",
          name: "Wearer of Shadows",
          price: 150,
          currency: "$",
          rewards: ["All previous rewards", "Exclusive \"Shadowless\" Apparel"],
          limit: TIER_LIMITS["tier9"] ?? undefined,
          sold: 0
        },
        {
          id: "tier10",
          name: "The Visionary",
          price: 200,
          currency: "$",
          rewards: ["All previous rewards", "Unique Personalized Artwork"],
          limit: TIER_LIMITS["tier10"] ?? undefined,
          sold: 0
        },
        {
          id: "tier11",
          name: "Shadow Shaper",
          price: 300,
          currency: "$",
          rewards: ["All previous rewards", "Private Discord Q&A", "Design a Background Character"],
          limit: TIER_LIMITS["tier11"] ?? undefined,
          sold: 0
        },
        {
          id: "tier12",
          name: "Architect",
          price: 1000,
          currency: "$",
          rewards: ["All previous rewards", "Consult on Development", "In-Game Reference/Easter Egg"],
          limit: TIER_LIMITS["tier12"] ?? undefined,
          sold: 0
        },
        {
          id: "tier14",
          name: "Lord of the Void",
          price: 1500,
          currency: "$",
          rewards: ["All previous rewards", "Ultimate Collector's Box"],
          limit: TIER_LIMITS["tier14"] ?? undefined,
          sold: 0
        }
      ]
    }
  },
  thankYou: {
    title: "Welcome to the Void",
    subtitle: "Your contribution has been accepted.",
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
    lastUpdatedValue: "26 November 2025",
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
          "You agree to provide accurate contact and delivery details and to update them promptly so the Creator can issue legally required notices and deliver any rewards linked to your pledge tier."
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
          "Each pledge tier describes the intended rewards. Digital rewards may be delivered electronically, while any physical goods require a valid shipping address and may trigger customs duties, import taxes, or local handling fees.",
          "Delivery timelines are estimates. Production or logistics constraints may require adjustments, and the Creator will communicate updates via the email associated with your pledge.",
          "If a specific reward becomes impracticable, the Creator will provide a reasonable substitute of equal or greater value. Refunds are not available in lieu of such substitutions."
        ]
      },
      {
        id: "changes",
        heading: "5. Project Changes and Timelines",
        paragraphs: [
          "The Creator may refine scope, features, or stretch goals to respond to technical, legal, or financial constraints while safeguarding the overall quality of Shadowless.",
          "In the event of material delays, the Creator will inform backers and supply an updated fulfilment plan. Your entitlement to the rewards of your selected tier remains valid regardless of the total amount ultimately raised."
        ]
      },
      {
        id: "data",
        heading: "6. Communication and Data Protection",
        paragraphs: [
          "The Creator uses your personal data solely to administer pledges, comply with legal obligations, deliver rewards, and communicate campaign information. Your data will never be sold to third parties.",
          "You may opt out of non-essential updates at any time. Transactional or fulfilment-related communications will continue while your pledge remains outstanding to ensure you receive the rewards owed to you."
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
    pledgeReminderBody: "All contributions to the Shadowless campaign are treated as non-refundable donations unless mandatory consumer law provides otherwise. Your right to receive the rewards attached to your selected tier survives regardless of the final funding amount, and the Creator remains obliged to deliver them once produced.",
    contactHeading: "Contact",
    contactBusinessLabel: "Registered owner",
    contactBusinessValue: "Petr Vurm, sole proprietor (Czech Republic)",
    contactBusinessIdLabel: "Business ID (IČ)",
    contactBusinessIdValue: "21180164",
    contactEmailLabel: "Contact email",
    contactEmail: "kontakt@petrvurm.cz",
    backLinkLabel: "Back to home"
  },
  footer: {
    rights: "All rights reserved.",
    madeIn: "Crafted in the dark heart of the Czech Republic.",
    quote: "\"Light is just a temporary illusion.\"",
    termsLink: "Terms & Conditions"
  }
};
