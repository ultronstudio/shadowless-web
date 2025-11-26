import { Content, Language } from "@/types";

export const TRANSLATIONS: Record<Language, Content> = {
  en: {
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
        tiers: [
          {
            id: 'tier1',
            name: 'Shadow Observer',
            price: 5,
            currency: '$',
            rewards: ['Digital Gratitude', 'Name in Credits']
          },
          {
            id: 'tier2',
            name: 'Wanderer',
            price: 15,
            currency: '$',
            rewards: ['All previous rewards', 'Digital Copy of Shadowless']
          },
          {
            id: 'tier3',
            name: 'Explorer',
            price: 25,
            currency: '$',
            rewards: ['All previous rewards', 'Original Soundtrack', 'High-Res Wallpapers']
          },
          {
            id: 'tier4',
            name: 'Truth Seeker',
            price: 45,
            currency: '$',
            rewards: ['All previous rewards', 'Digital Artbook', 'Lore Book (PDF)', 'Early Access', 'Inner Circle Community']
          },
          {
            id: 'tier5',
            name: 'DLC: Hellwalker',
            price: 60,
            currency: '$',
            rewards: ['All previous rewards', 'DLC "HELL" Expansion'],
            recommended: true
          },
          {
            id: 'tier6',
            name: 'Digital Curator',
            price: 75,
            currency: '$',
            rewards: ['All previous rewards', 'Digital Backer Certificate', 'Personalized Video Message']
          },
          {
            id: 'tier7',
            name: 'Physical Curator',
            price: 90,
            currency: '$',
            rewards: ['All "Digital Curator" rewards', 'Physical Copy (Boxed)', 'Printed Artbook']
          },
          {
            id: 'tier8',
            name: 'Collector Deluxe',
            price: 110,
            currency: '$',
            rewards: ['All previous rewards', 'Physical Soundtrack CD', 'Sticker Pack']
          },
          {
            id: 'tier9',
            name: 'Wearer of Shadows',
            price: 150,
            currency: '$',
            rewards: ['All previous rewards', 'Exclusive "Shadowless" Apparel']
          },
          {
            id: 'tier10',
            name: 'The Visionary',
            price: 200,
            currency: '$',
            rewards: ['All previous rewards', 'Unique Personalized Artwork']
          },
          {
            id: 'tier11',
            name: 'Shadow Shaper',
            price: 300,
            currency: '$',
            rewards: ['All previous rewards', 'Private Discord Q&A', 'Design a Background Character']
          },
          {
            id: 'tier12',
            name: 'Architect',
            price: 1000,
            currency: '$',
            rewards: ['All previous rewards', 'Consult on Development', 'In-Game Reference/Easter Egg']
          },
          {
            id: 'tier14',
            name: 'Lord of the Void',
            price: 1500,
            currency: '$',
            rewards: ['All previous rewards', 'Ultimate Collector\'s Box']
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
  },
  cs: {
    nav: {
      story: "Příběh",
      game: "Hra",
      campaign: "Kampaň",
      gallery: "Galerie",
      steam: "Steam"
    },
    hero: {
      subtitle: "Psychologický horor z pohledu první osoby",
      quote: "\"Nejhorší pravda není ta, co číhá ve tmě. Je to ta, kterou uvidíš, když rozsvítíš.\"",
      wishlist: "Přidat do seznamu přání",
      support: "Přilej olej do ohně"
    },
    lore: {
      label: "Příběh",
      title: "Daltona Adamse",
      p1: "Shadowless není o domě, kde straší. Je o mysli, která zapomněla, jak utéct.",
      p2: "Hraješ za Daltona Adamse. Muže, který utíká před ozvěnou vlastního života. Přestěhování do tiché české vesnice mělo být vysvobozením, ale ticho je tu příliš hlasité. Po nehodě Lucy a Ethanově... proměně... už Dalton není nikdy sám.",
      p3: "Dům naslouchá. Dýchá. A pamatuje si věci, které jsi chtěl navždy pohřbít.",
      quote: "\"Svírají tě stěny, nebo se tvá mysl rozpíná do prázdnoty? V tomto domě je příčetnost vyčerpatelný zdroj.\"",
      p4: "Postav se tomu, co se krčí v koutě tvého zorného pole. Ale pamatuj: poznat pravdu může být horší než zešílet."
    },
    about: {
      title: "Labyrint",
      titleHighlight: "podvědomí",
      envDescription: "Dům Adamsových je nepřátelský organismus. Díky Unreal Engine 5 je každý stín vypočítaný, každé vrznutí je varování. Půdorys se mění, když se nedíváš. Od dusivého podkroví po sklep, který nemá dno – prostředí reaguje na tvůj rozpadající se psychický stav.",
      gameplayTitle: "Přežití",
      gameplayPoints: [
        "Absolutní bezmoc. Žádné zbraně. Žádný boj. Tvá jediná obrana je útěk, úkryt nebo modlitba.",
        "Střípky pravdy. Skládej tragédii dohromady pomocí environmentálního vyprávění. Dům zná odpovědi.",
        "Ne-euklidovské hádanky. Logika zde neplatí. Manipuluj s realitou, která se ti rozpadá pod rukama."
      ],
      features: [
        {
          title: "Psychologický teror",
          description: "Žádné laciné lekačky. Jen hutná atmosféra, která v tobě zůstane dlouho po vypnutí hry.",
          icon: "brain"
        },
        {
          title: "Nespolehlivá realita",
          description: "Pohnula se ta figurína? Byly ty dveře tamhle? Nevěř ničemu. Ani vlastním očím.",
          icon: "eye"
        },
        {
          title: "Fotorealistický děs",
          description: "Technologie Lumen a Nanite přináší vizuál, díky kterému je hrůza nepříjemně hmatatelná.",
          icon: "monitor"
        },
        {
          title: "Reaktivní audio",
          description: "Systém Metasounds vytváří zvukovou kulisu, kde je ticho hlasitější než křik.",
          icon: "home"
        }
      ]
    },
    gallery: {
      title: "Galerie úzkosti",
      subtitle: "Vizuální důkazy úpadku",
      items: [
        { title: "Ložnice", desc: "Místo, které kdysi vítalo. Teď varuje." },
        { title: "Předsíň", desc: "Některé schody vedou jen dolů." },
        { title: "Obývací pokoj", desc: "Vzpomínky zachované v prachu a lítosti." },
        { title: "Koupelna", desc: "Cokoliv se tu stalo, modlitba to nebyla." }
      ]
    },
    crowdfunding: {
      title: "Podpořte stíny",
      intro: "Shadowless je projekt zrozený z čisté posedlosti hororem. Kostra je hotová, noční můra je napsaná. Teď potřebuji vás, abychom stíny probudili k životu.",
      funded: "Vybráno",
      statusLabel: {
        live: "AKTIVNÍ",
        success: "ÚSPĚCH",
        failed: "UZAVŘENO"
      },
      backers: "Duší se upsalo",
      daysLeft: "Dní do konce",
      developerTitle: "Vývojář",
      developerName: "Petr Vurm",
      developerRole: "Samostatný vývojář",
      developerBio: "Jsem Petr. Student, vývojář, fanatik do hororu. Nechci jen vyrobit hru. Chci vám vytvořit jizvu na psychice. Shadowless je moje vize toho, co se stane, když v hlavě zhasne světlo.",
      developerQuote: "\"Pomozte mi vybudovat noční můru, kterou budeme sdílet.\"",
      breakdownTitle: "Využití darovaných prostředků",
      breakdown: {
        dev: "Základní vývoj",
        devDesc: "Assety, mocap, licence, optimalizace.",
        audio: "Zvukový design",
        audioDesc: "Profesionální skladatel, dabing, zvukový design.",
        tax: "Odměny pro podporovatele",
        fees: "Daně a poplatky"
      },
      stretchGoalsTitle: "Milníky",
      stretchGoals: [
        { amount: 666666, title: "Oživení", description: "Úspěch kampaně. Digitální odměny zajištěny. Noční můra začíná." },
        { amount: 1320000, title: "Symfonie strachu", description: "Najmutí profesionálního skladatele pro unikátní, nervy drásající soundtrack." },
        { amount: 2640000, title: "Binaurální noční můra", description: "Plně imerzivní 3D zvuk. Uslyšíte je dýchat přímo za sebou." },
        { amount: 5760000, title: "Hlas šílenství", description: "Profesionální anglický dabing, který vdechne postavám zoufalství." },
        { amount: 7920000, title: "Pravá vize", description: "Plná produkční kvalita. Žádné kompromisy. Hra přesně taková, jaká má být." },
        { amount: 9600000, title: "Hyper-realismus", description: "Rozšířené detaily prostředí a plynulé motion-matching animace." },
        { amount: 12000000, title: "Filmové trauma", description: "Klíčové momenty příběhu jako plně renderované filmové scény." },
        { amount: 15840000, title: "Kapesní děs", description: "Port na Nintendo Switch. Vezměte si strach s sebou." },
        { amount: 21600000, title: "Ztracená kapitola", description: "Nová příběhová expanze, která jde hlouběji do historie domu." },
        { amount: 28800000, title: "Konzolový debut", description: "Vydání pro PlayStation 5 a Xbox Series X/S." }
      ],
      cta: "Podpořit projekt",
      modal: {
        title: "Zvolte svůj osud",
        recommendedLabel: "Doporučeno",
        stepTitles: {
          tier: "Vyberte úroveň",
          details: "Údaje podporovatele",
          card: "Platební metoda",
          review: "Kontrola a potvrzení"
        },
        stepDescriptions: {
          tier: "Zvolte příspěvek, který odpovídá vaší ochotě pomoct.",
          details: "Napište nám, komu máme odměny doručit.",
          card: "Zadejte údaje o kartě v zabezpečeném formuláři Stripe.",
          review: "Než odešlete platbu, potvrďte všechny údaje."
        },
        payBtn: "Přispět",
        continueBtn: "Pokračovat",
        reviewBtn: "Přejít na rekapitulaci",
        processing: "Synchronizace...",
        successTitle: "Příspěvek přijat",
        successMsg: "Vaše podpora rezonuje v prázdnotě. Potvrzení dorazí emailem.",
        closeBtn: "Zavřít",
        backToTiers: "Zpět na výběr",
        backToDetails: "Upravit údaje",
        editDetails: "Změnit údaje podporovatele",
        editPayment: "Změnit způsob platby",
        selectedTier: "Vybraná úroveň",
        testCardNotice: "Použijte testovací kartu Stripe 4242 4242 4242 4242, libovolné budoucí datum expirace, CVC 123 a PSČ 12345.",
        firstNameLabel: "Jméno",
        lastNameLabel: "Příjmení",
        emailLabel: "Email",
        notesLabel: "Poznámky",
        notesOptionalHint: "Volitelné. Cokoliv, co bychom měli vědět o vašem příspěvku",
        summaryHeading: "Finální rekapitulace",
        summaryContact: "Kontakt",
        summaryNotes: "Poznámky",
        summaryAmount: "Celkem",
        notesEmpty: "Bez doplňujících poznámek.",
        validation: {
          required: "Toto pole je povinné.",
          email: "Zadejte platný email."
        },
        tiers: [
          {
            id: 'tier1',
            name: 'Pozorovatel stínů',
            price: 150,
            currency: ' Kč',
            rewards: ['Digitální vděčnost', 'Jméno v titulcích']
          },
          {
            id: 'tier2',
            name: 'Poutník',
            price: 450,
            currency: ' Kč',
            rewards: ['Všechny předchozí odměny', 'Digitální kopie Shadowless']
          },
          {
            id: 'tier3',
            name: 'Průzkumník',
            price: 750,
            currency: ' Kč',
            rewards: ['Všechny předchozí odměny', 'Originální Soundtrack', 'Balíček tapet ve vysokém rozlišení']
          },
          {
            id: 'tier4',
            name: 'Hledač pravdy',
            price: 1350,
            currency: ' Kč',
            rewards: ['Všechny předchozí odměny', 'Digitální artbook', 'Kniha Lore (PDF)', 'Předběžný přístup', 'Vstup do uzavřené komunity']
          },
          {
            id: 'tier5',
            name: 'DLC: Hellwalker',
            price: 1800,
            currency: ' Kč',
            rewards: ['Všechny předchozí odměny', 'Příběhové DLC "HELL"'],
            recommended: true
          },
          {
            id: 'tier6',
            name: 'Digitální kurátor',
            price: 2250,
            currency: ' Kč',
            rewards: ['Všechny předchozí odměny', 'Digitální certifikát', 'Osobní video poděkování']
          },
          {
            id: 'tier7',
            name: 'Fyzický kurátor',
            price: 2700,
            currency: ' Kč',
            rewards: ['Všechny odměny "Digitální kurátor"', 'Fyzická kopie (Box)', 'Tištěný artbook']
          },
          {
            id: 'tier8',
            name: 'Sběratel Deluxe',
            price: 3300,
            currency: ' Kč',
            rewards: ['Všechny předchozí odměny', 'Soundtrack na CD', 'Sada samolepek']
          },
          {
            id: 'tier9',
            name: 'Nositel stínu',
            price: 4500,
            currency: ' Kč',
            rewards: ['Všechny předchozí odměny', 'Exkluzivní oblečení Shadowless']
          },
          {
            id: 'tier10',
            name: 'Vizionář',
            price: 6000,
            currency: ' Kč',
            rewards: ['Všechny předchozí odměny', 'Unikátní artwork na míru']
          },
          {
            id: 'tier11',
            name: 'Tvůrce stínů',
            price: 9000,
            currency: ' Kč',
            rewards: ['Všechny předchozí odměny', 'Soukromé Q&A na Discordu', 'Návrh vedlejší postavy do hry']
          },
          {
            id: 'tier12',
            name: 'Architekt',
            price: 30000,
            currency: ' Kč',
            rewards: ['Všechny předchozí odměny', 'Konzultace vývoje', 'Vlastní easter egg / reference ve hře']
          },
          {
            id: 'tier14',
            name: 'Vládce prázdnoty',
            price: 45000,
            currency: ' Kč',
            rewards: ['Všechny předchozí odměny', 'Ultimátní sběratelský box']
          }
        ]
      }
    },
    thankYou: {
      title: "Vítejte v prázdnotě",
      subtitle: "Váš příspěvek byl přijat.",
      orderLabel: "ID Objednávky",
      tierLabel: "Zvolená úroveň",
      amountLabel: "Částka příspěvku",
      supporterLabel: "Podporovatel",
      emailLabel: "Kontaktní email",
      paymentIdLabel: "ID Stripe platby",
      notesLabel: "Poznámky",
      notesEmpty: "Žádné doplňující poznámky.",
      emailNote: "Potvrzení a detaily příspěvku byly odeslány na váš email.",
      backBtn: "Přejít na web"
    },
    terms: {
      title: "Všeobecné obchodní podmínky",
      lastUpdatedLabel: "Poslední aktualizace",
      lastUpdatedValue: "26. listopadu 2025",
      intro: "Tyto Všeobecné obchodní podmínky upravují účast na crowdfundingové kampani Shadowless, kterou pořádá Petr Vurm (\"Tvůrce\"). Odesláním příspěvku potvrzujete, že s nimi souhlasíte.",
      sections: [
        {
          id: "campaign",
          heading: "1. Přehled kampaně",
          paragraphs: [
            "Shadowless je nezávislá videohra ve vývoji pod vedením Tvůrce. Příspěvky odeslané prostřednictvím těchto stránek představují dobrovolnou podporu financující průběžné produkční milníky a administraci kampaně.",
            "Příspěvek nezakládá partnerství, podíl na zisku ani garanci komerčního vydání. Podporou kampaně berete na vědomí nejistoty, které jsou pro kreativní softwarové projekty typické."
          ]
        },
        {
          id: "eligibility",
          heading: "2. Způsobilost a registrace",
          paragraphs: [
            "Stvrzujete, že je vám alespoň 18 let, případně že máte souhlas zákonného zástupce, a že podle platných právních předpisů máte způsobilost k uzavření těchto Podmínek.",
            "Souhlasíte s poskytnutím přesných kontaktních a doručovacích údajů a s jejich včasnou aktualizací, aby vás Tvůrce mohl informovat a doručit vám odměny spojené s vybranou úrovní."
          ]
        },
        {
          id: "pledges",
          heading: "3. Příspěvky, platby a daně",
          paragraphs: [
            "Veškeré platby zpracovává Stripe. Po potvrzení příspěvku je částka uvedená u vaší úrovně okamžitě stržena v uvedené měně.",
            "Příspěvky jsou konečné a nevratné, ledaže vám kogentní spotřebitelská legislativa poskytuje zákonné právo na odstoupení. Tvůrce použije všechny obdržené prostředky výhradně na vývoj a administraci projektu Shadowless."
          ],
          bullets: [
            "Vaše banka nebo vydavatel karty může účtovat směnné poplatky, daně či další náklady, které nesete vy.",
            "Platební údaje bezpečně uchovává Stripe; Tvůrce k nim nemá přístup ani je neukládá."
          ]
        },
        {
          id: "rewards",
          heading: "4. Odměny a plnění",
          paragraphs: [
            "Každá úroveň popisuje plánované odměny. Digitální odměny budou doručeny elektronicky, fyzické zboží vyžaduje platnou doručovací adresu a může podléhat clu, daním či místním poplatkům.",
            "Uvedené termíny jsou orientační. Produkční nebo logistická omezení mohou vyžadovat úpravy; Tvůrce bude o změnách informovat na e-mail připojený k vašemu příspěvku.",
            "Pokud se konkrétní odměnu nepodaří zajistit, poskytne Tvůrce přiměřenou náhradu stejné či vyšší hodnoty. Náhrada peněžní formou se neposkytuje."
          ]
        },
        {
          id: "changes",
          heading: "5. Změny projektu a harmonogram",
          paragraphs: [
            "Tvůrce může upravovat rozsah, funkce nebo stretch cíle tak, aby reagoval na technické, právní či finanční okolnosti a zachoval celkovou kvalitu Shadowless.",
            "V případě podstatného zpoždění budou přispěvatelé informováni a obdrží aktualizovaný plán plnění. Váš nárok na odměny zvoleného stupně zůstává zachován bez ohledu na celkově vybranou částku."
          ]
        },
        {
          id: "data",
          heading: "6. Komunikace a ochrana údajů",
          paragraphs: [
            "Tvůrce používá vaše osobní údaje výhradně ke správě příspěvků, splnění zákonných povinností, doručení odměn a komunikaci o kampani. Údaje nebudou prodány třetím stranám.",
            "Z nevyžádaných novinek se můžete kdykoli odhlásit. Transakční nebo plnící e-maily budou zasílány po dobu, po kterou je váš příspěvek aktivní, aby bylo zajištěno dodání odměn."
          ]
        },
        {
          id: "liability",
          heading: "7. Odpovědnost a rozhodné právo",
          paragraphs: [
            "V rozsahu dovoleném zákonem odpovídá Tvůrce pouze za škodu způsobenou úmyslně nebo z hrubé nedbalosti; vylučuje odpovědnost za nepřímé nebo následné škody.",
            "Tyto Podmínky se řídí právem České republiky s vyloučením kolizních norem. Případné spory budou řešit příslušné české soudy, ledaže vám kogentní předpisy vašeho bydliště přiznávají jiné forum."
          ]
        }
      ],
      pledgeReminderHeading: "Důležité upozornění k nevratnosti příspěvků",
      pledgeReminderBody: "Všechny příspěvky do kampaně Shadowless se považují za nevratné dary, pokud vám závazná spotřebitelská legislativa neposkytuje jiné právo. Váš nárok na odměny zvoleného stupně trvá bez ohledu na celkovou vybranou částku a Tvůrce je po jejich výrobě dodá.",
      contactHeading: "Kontakt",
      contactBusinessLabel: "Provozovatel",
      contactBusinessValue: "Petr Vurm, živnostník (Česká republika)",
      contactBusinessIdLabel: "IČ",
      contactBusinessIdValue: "21180164",
      contactEmailLabel: "Kontaktní e-mail",
      contactEmail: "kontakt@petrvurm.cz",
      backLinkLabel: "Zpět na hlavní stránku"
    },
    footer: {
      rights: "Všechna práva vyhrazena.",
      madeIn: "Vyrobeno v temném srdci České republiky.",
      quote: "\"Světlo je jen dočasná iluze.\"",
      termsLink: "Obchodní podmínky"
    }
  },
  de: {
    nav: {
      story: "Geschichte",
      game: "Spiel",
      campaign: "Kampagne",
      gallery: "Galerie",
      steam: "Steam"
    },
    hero: {
      subtitle: "Psychologischer Horror in der Ego-Perspektive",
      quote: "\"Die Dunkelheit ist nicht das, was du fürchten solltest. Sondern das, was du siehst, wenn du das Licht einschaltest.\"",
      wishlist: "Auf die Wunschliste",
      support: "Nähre den Albtraum"
    },
    lore: {
      label: "Die Geschichte auf",
      title: "Dalton Adams",
      p1: "Shadowless ist keine Geschichte über ein Spukhaus. Es ist die Obduktion einer Seele.",
      p2: "Du bist Dalton Adams. Ein Mann auf der Flucht vor dem Echo eines Lebens, das nicht mehr existiert. Der Umzug in ein abgelegenes tschechisches Dorf sollte ein Neuanfang sein, aber die Stille hier ist schwer. Nach Lucys Unfall und Ethans... Veränderung... ist die Isolation nicht nur physisch.",
      p3: "Das Haus hört zu. Es atmet. Und es erinnert sich an Dinge, die du vergessen wolltest.",
      quote: "\"Kommen die Wände näher, oder dehnt sich dein Verstand in die Leere aus? In diesem Haus ist geistige Gesundheit eine begrenzte Ressource.\"",
      p4: "Stell dich dem, was in den Augenwinkeln lauert. Aber denk daran: Die Wahrheit zu erkennen, könnte schlimmer sein als der Wahnsinn selbst."
    },
    about: {
      title: "Labyrinth des",
      titleHighlight: "Unterbewusstseins",
      envDescription: "Das Haus der Adams ist ein feindlicher Organismus. Angetrieben von Unreal Engine 5 ist jeder Schatten berechnet, jedes Knarren eine Warnung. Der Grundriss verschiebt sich, wenn du nicht hinsiehst. Vom erstickenden Dachboden bis zum Keller ohne Boden – die Umgebung spiegelt Daltons zerfallende Psyche wider.",
      gameplayTitle: "Überleben",
      gameplayPoints: [
        "Totale Hilflosigkeit. Keine Waffen. Kein Kampf. Deine einzige Verteidigung ist Laufen, Verstecken oder Beten.",
        "Fragmente der Wahrheit. Setze die Tragödie durch Environmental Storytelling zusammen. Das Haus kennt die Antworten.",
        "Nicht-euklidische Rätsel. Logik gilt hier nicht. Manipuliere eine Realität, die ständig zerbricht."
      ],
      features: [
        {
          title: "Psychologischer Terror",
          description: "Keine billigen Jump-Scares. Nur eine erstickende Atmosphäre, die lange nach dem Spiel bleibt.",
          icon: "brain"
        },
        {
          title: "Unzuverlässige Realität",
          description: "Hat sich die Puppe bewegt? War die Tür vorher da? Traue nichts. Nicht einmal deinen Augen.",
          icon: "eye"
        },
        {
          title: "Next-Gen Grauen",
          description: "Lumen & Nanite Technologie liefern einen Fotorealismus, der den Horror unangenehm greifbar macht.",
          icon: "monitor"
        },
        {
          title: "Reaktives Audio",
          description: "Metasounds erzeugen eine Klanglandschaft, in der Stille lauter ist als ein Schrei.",
          icon: "home"
        }
      ]
    },
    gallery: {
      title: "Galerie der Angst",
      subtitle: "Visuelle Beweise des Verfalls",
      items: [
        { title: "Schlafzimmer", desc: "Ein Ort, der einst willkommen hieß. Jetzt warnt." },
        { title: "Flur", desc: "Manche Treppen führen nur nach unten." },
        { title: "Wohnzimmer", desc: "Erinnerungen, konserviert in Staub und Reue." },
        { title: "Badezimmer", desc: "Was auch immer hier passiert ist, es war kein Gebet." }
      ]
    },
    crowdfunding: {
      title: "Tritt in die Schatten",
      intro: "Shadowless ist ein Leidenschaftsprojekt, geboren aus purer Liebe zum Horror. Das Fundament steht, der Albtraum ist geschrieben. Jetzt brauche ich dich, um die Schatten zum Leben zu erwecken.",
      funded: "Finanziert",
      statusLabel: {
        live: "AKTIV",
        success: "ERFOLG",
        failed: "GESCHLOSSEN"
      },
      backers: "Seelen verpflichtet",
      daysLeft: "Verbleibende Tage",
      developerTitle: "Der Developer",
      developerName: "Petr Vurm",
      developerRole: "Einzelentwickler",
      developerBio: "Ich bin Petr. Schüler, Entwickler, Horror-Fanatiker. Ich will nicht nur ein Spiel machen; ich will eine Narbe auf deiner Psyche hinterlassen. Shadowless ist meine Vision dessen, was passiert, wenn im Kopf das Licht ausgeht.",
      developerQuote: "\"Hilf mir, einen Albtraum zu bauen, den wir alle teilen können.\"",
      breakdownTitle: "Verwendung der Mittel",
      breakdown: {
        dev: "Grundlegende Entwicklung",
        devDesc: "Assets, Mocap, Lizenzen, Politur.",
        audio: "Audiodesign",
        audioDesc: "Professioneller Komponist, Synchronisation, Sounddesign.",
        tax: "Belohnungen für Unterstützer",
        fees: "Steuern und Gebühren"
      },
      stretchGoalsTitle: "Meilensteine",
      stretchGoals: [
        { amount: 25200, title: "Es erwacht", description: "Kampagnenerfolg. Digitale Belohnungen gesichert. Der Albtraum beginnt." },
        { amount: 50400, title: "Symphonie der Angst", description: "Professioneller Komponist für einen einzigartigen, nervenaufreibenden Soundtrack." },
        { amount: 100800, title: "Binauraler Albtraum", description: "Vollständig immersives 3D-Audio. Du wirst sie hinter dir atmen hören." },
        { amount: 218400, title: "Stimme des Wahnsinns", description: "Professionelle englische Synchronsprecher, die der Verzweiflung Leben einhauchen." },
        { amount: 300300, title: "Die wahre Vision", description: "Volle Produktionsqualität. Keine Kompromisse. Das Spiel genau wie geplant." },
        { amount: 364000, title: "Hyper-Realismus", description: "Erweiterte Umgebungsdetails und flüssige Motion-Matching-Animationen." },
        { amount: 455000, title: "Filmisches Trauma", description: "Wichtige Story-Momente als voll gerenderte In-Game-Zwischensequenzen." },
        { amount: 600600, title: "Tragbares Grauen", description: "Portierung auf Nintendo Switch. Nimm die Angst mit." },
        { amount: 819000, title: "Das verlorene Kapitel", description: "Eine neue narrative Erweiterung, die tiefer in die Geschichte eintaucht." },
        { amount: 1092000, title: "Konsolen-Debüt", description: "Veröffentlichung auf PlayStation 5 und Xbox Series X/S." }
      ],
      cta: "Projekt unterstützen",
      modal: {
        title: "Wähle dein Schicksal",
        recommendedLabel: "Empfohlen",
        stepTitles: {
          tier: "Stufe wählen",
          details: "Unterstützerdaten",
          card: "Zahlungsmethode",
          review: "Prüfen & Bestätigen"
        },
        stepDescriptions: {
          tier: "Wähle den Beitrag, der zu deiner Hingabe passt.",
          details: "Sag uns, wohin wir deine Belohnungen schicken sollen.",
          card: "Gib deine Kartendaten im sicheren Stripe-Formular ein.",
          review: "Bestätige alle Angaben, bevor du den Beitrag abschließt."
        },
        payBtn: "Beitragen",
        continueBtn: "Weiter",
        reviewBtn: "Zur Zusammenfassung",
        processing: "Synchronisierung...",
        successTitle: "Beitrag angenommen",
        successMsg: "Deine Unterstützung hallt in der Leere wider. Bestätigung per E-Mail.",
        closeBtn: "Schließen",
        backToTiers: "Zurück zur Auswahl",
        backToDetails: "Details bearbeiten",
        editDetails: "Unterstützerdaten ändern",
        editPayment: "Zahlungsmethode ändern",
        selectedTier: "Gewählte Stufe",
        testCardNotice: "Verwende die Stripe-Testkarte 4242 4242 4242 4242 mit beliebigem zukünftigen Ablaufdatum, CVC 123 und PLZ 12345.",
        firstNameLabel: "Vorname",
        lastNameLabel: "Nachname",
        emailLabel: "E-Mail",
        notesLabel: "Zusätzliche Hinweise",
        notesOptionalHint: "Optional. Alles, was wir über deinen Beitrag wissen sollten?",
        summaryHeading: "Letzte Prüfung",
        summaryContact: "Kontakt",
        summaryNotes: "Hinweise",
        summaryAmount: "Gesamt",
        notesEmpty: "Keine zusätzlichen Hinweise.",
        validation: {
          required: "Dieses Feld ist erforderlich.",
          email: "Bitte eine gültige E-Mail eingeben."
        },
        tiers: [
          {
            id: 'tier1',
            name: 'Schatten-Beobachter',
            price: 5,
            currency: ' €',
            rewards: ['Digitaler Dank', 'Name in den Credits']
          },
          {
            id: 'tier2',
            name: 'Wanderer',
            price: 14,
            currency: ' €',
            rewards: ['Alle vorherigen Belohnungen', 'Digitale Kopie von Shadowless']
          },
          {
            id: 'tier3',
            name: 'Entdecker',
            price: 24,
            currency: ' €',
            rewards: ['Alle vorherigen Belohnungen', 'Original Soundtrack', 'High-Res Wallpaper-Paket']
          },
          {
            id: 'tier4',
            name: 'Wahrheitssucher',
            price: 43,
            currency: ' €',
            rewards: ['Alle vorherigen Belohnungen', 'Digitales Artbook', 'Lore-Buch (PDF)', 'Early Access', 'Zugang zum inneren Kreis']
          },
          {
            id: 'tier5',
            name: 'DLC: Höllenwanderer',
            price: 57,
            currency: ' €',
            rewards: ['Alle vorherigen Belohnungen', 'DLC "HÖLLE" Erweiterung'],
            recommended: true
          },
          {
            id: 'tier6',
            name: 'Digitaler Kurator',
            price: 71,
            currency: ' €',
            rewards: ['Alle vorherigen Belohnungen', 'Digitales Zertifikat', 'Persönliche Videobotschaft']
          },
          {
            id: 'tier7',
            name: 'Physischer Kurator',
            price: 85,
            currency: ' €',
            rewards: ['Alle "Digitaler Kurator" Belohnungen', 'Physische Kopie (Box)', 'Gedrucktes Artbook']
          },
          {
            id: 'tier8',
            name: 'Sammler Deluxe',
            price: 105,
            currency: ' €',
            rewards: ['Alle vorherigen Belohnungen', 'Soundtrack auf CD', 'Sticker-Set']
          },
          {
            id: 'tier9',
            name: 'Träger des Schattens',
            price: 142,
            currency: ' €',
            rewards: ['Alle vorherigen Belohnungen', 'Exklusive Shadowless-Kleidung']
          },
          {
            id: 'tier10',
            name: 'Der Visionär',
            price: 190,
            currency: ' €',
            rewards: ['Alle vorherigen Belohnungen', 'Einzigartiges personalisiertes Kunstwerk']
          },
          {
            id: 'tier11',
            name: 'Schatten-Gestalter',
            price: 285,
            currency: ' €',
            rewards: ['Alle vorherigen Belohnungen', 'Privates Discord Q&A', 'Design eines Hintergrundcharakters']
          },
          {
            id: 'tier12',
            name: 'Architekt',
            price: 950,
            currency: ' €',
            rewards: ['Alle vorherigen Belohnungen', 'Einfluss auf die Entwicklung', 'Eigenes Easter Egg / Referenz im Spiel']
          },
          {
            id: 'tier14',
            name: 'Herr der Leere',
            price: 1425,
            currency: ' €',
            rewards: ['Alle vorherigen Belohnungen', 'Ultimative Sammlerbox']
          }
        ]
      }
    },
    thankYou: {
      title: "Willkommen in der Leere",
      subtitle: "Dein Beitrag wurde akzeptiert.",
      orderLabel: "Bestell-ID",
      tierLabel: "Gewählte Stufe",
      amountLabel: "Beitragsbetrag",
      supporterLabel: "Unterstützer",
      emailLabel: "Kontakt-E-Mail",
      paymentIdLabel: "Stripe-Zahlungs-ID",
      notesLabel: "Hinweise",
      notesEmpty: "Keine zusätzlichen Hinweise.",
      emailNote: "Bestätigung und Beitragsdetails wurden an deine E-Mail gesendet.",
      backBtn: "Zurück zur Website"
    },
    terms: {
      title: "Allgemeine Geschäftsbedingungen",
      lastUpdatedLabel: "Zuletzt aktualisiert",
      lastUpdatedValue: "26. November 2025",
      intro: "Diese Allgemeinen Geschäftsbedingungen regeln deine Teilnahme an der Shadowless-Crowdfunding-Kampagne von Petr Vurm (dem \"Schöpfer\"). Mit dem Abschicken eines Beitrags erkennst du die folgenden Bestimmungen an.",
      sections: [
        {
          id: "campaign",
          heading: "1. Überblick über die Kampagne",
          paragraphs: [
            "Shadowless ist ein unabhängiges Videospiel, das sich unter Leitung des Schöpfers in Entwicklung befindet. Beiträge über diese Website sind freiwillige Unterstützungen zur Finanzierung laufender Produktionsmeilensteine und der Kampagnenverwaltung.",
            "Ein Beitrag begründet keine Partnerschaft, keinen Gewinnanteil und garantiert keine Markteinführung. Mit deiner Unterstützung akzeptierst du die Unwägbarkeiten kreativer Softwareprojekte."
          ]
        },
        {
          id: "eligibility",
          heading: "2. Teilnahmeberechtigung und Registrierung",
          paragraphs: [
            "Du bestätigst, mindestens 18 Jahre alt zu sein oder die Zustimmung eines gesetzlichen Vertreters zu besitzen und nach dem für dich geltenden Recht geschäftsfähig zu sein.",
            "Du verpflichtest dich, korrekte Kontakt- und Lieferdaten bereitzustellen und zeitnah zu aktualisieren, damit der Schöpfer gesetzliche Mitteilungen versenden und Belohnungen zustellen kann."
          ]
        },
        {
          id: "pledges",
          heading: "3. Beiträge, Zahlungen und Steuern",
          paragraphs: [
            "Alle Zahlungen werden über Stripe abgewickelt. Mit der Bestätigung deiner Unterstützung wird der bei deiner Stufe angezeigte Betrag sofort in der ausgewiesenen Währung belastet.",
            "Beiträge sind endgültig und nicht erstattungsfähig, sofern zwingende Verbraucherschutzgesetze dir kein Widerrufsrecht einräumen. Der Schöpfer verwendet sämtliche Mittel ausschließlich für die Entwicklung und Verwaltung von Shadowless."
          ],
          bullets: [
            "Deine Bank oder Kartenherausgeber kann Umrechnungsgebühren, Steuern oder sonstige Kosten erheben, die von dir zu tragen sind.",
            "Stripe speichert Zahlungsdaten sicher; der Schöpfer erhält keinen Zugriff auf deine Karteninformationen."
          ]
        },
        {
          id: "rewards",
          heading: "4. Belohnungen und Erfüllung",
          paragraphs: [
            "Jede Unterstützerstufe beschreibt die vorgesehenen Belohnungen. Digitale Inhalte werden elektronisch geliefert; physische Güter erfordern eine gültige Versandadresse und können Zölle, Einfuhrsteuern oder lokale Gebühren auslösen.",
            "Die angegebenen Lieferzeiten sind Schätzungen. Produktions- oder Logistikzwänge können Anpassungen erforderlich machen; der Schöpfer informiert per E-Mail über Änderungen.",
            "Sollte eine bestimmte Belohnung nicht umsetzbar sein, stellt der Schöpfer eine angemessene Alternative gleichen oder höheren Wertes bereit. Rückerstattungen werden nicht gewährt."
          ]
        },
        {
          id: "changes",
          heading: "5. Projektänderungen und Zeitpläne",
          paragraphs: [
            "Der Schöpfer darf Umfang, Funktionen oder Stretch-Goals anpassen, um auf technische, rechtliche oder finanzielle Rahmenbedingungen zu reagieren und die Qualität von Shadowless zu sichern.",
            "Bei wesentlichen Verzögerungen informiert der Schöpfer die Unterstützer und stellt einen aktualisierten Erfüllungsplan zur Verfügung. Dein Anspruch auf die Belohnungen deiner Stufe bleibt unabhängig vom Endbetrag bestehen."
          ]
        },
        {
          id: "data",
          heading: "6. Kommunikation und Datenschutz",
          paragraphs: [
            "Der Schöpfer verwendet deine personenbezogenen Daten ausschließlich zur Verwaltung der Beiträge, zur Erfüllung gesetzlicher Pflichten, zur Lieferung der Belohnungen und zur Kampagnenkommunikation. Eine Weitergabe an Dritte findet nicht statt.",
            "Du kannst dich jederzeit von nicht zwingenden Benachrichtigungen abmelden. Transaktions- und Erfüllungsnachrichten werden jedoch weiterhin versendet, solange dein Beitrag offen ist, damit du deine Belohnungen erhältst."
          ]
        },
        {
          id: "liability",
          heading: "7. Haftung und anwendbares Recht",
          paragraphs: [
            "Soweit gesetzlich zulässig, haftet der Schöpfer nur für Schäden, die vorsätzlich oder grob fahrlässig verursacht wurden; eine Haftung für indirekte oder Folgeschäden ist ausgeschlossen.",
            "Diese Bedingungen unterliegen dem Recht der Tschechischen Republik unter Ausschluss der Kollisionsnormen. Streitigkeiten werden den zuständigen tschechischen Gerichten vorgelegt, sofern zwingende Bestimmungen deines Wohnsitzstaates nichts anderes vorsehen."
          ]
        }
      ],
      pledgeReminderHeading: "Wichtiger Hinweis zur Nicht-Rückerstattung von Beiträgen",
      pledgeReminderBody: "Alle Beiträge für die Shadowless-Kampagne gelten als nicht erstattungsfähige Zuwendungen, es sei denn, zwingendes Verbraucherrecht sieht etwas anderes vor. Dein Anspruch auf die Belohnungen deiner gewählten Stufe bleibt unabhängig vom endgültigen Finanzierungsbetrag bestehen und der Schöpfer liefert sie nach Fertigstellung aus.",
      contactHeading: "Kontakt",
      contactBusinessLabel: "Betreiber",
      contactBusinessValue: "Petr Vurm, Einzelunternehmer (Tschechische Republik)",
      contactBusinessIdLabel: "Unternehmens-ID (IČ)",
      contactBusinessIdValue: "21180164",
      contactEmailLabel: "Kontakt-E-Mail",
      contactEmail: "kontakt@petrvurm.cz",
      backLinkLabel: "Zurück zur Startseite"
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
      madeIn: "Geschmiedet im dunklen Herzen der Tschechischen Republik.",
      quote: "\"Licht ist nur eine vorübergehende Illusion.\"",
      termsLink: "AGB"
    }
  }
};