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
        { title: " The Threshold", desc: "Once a welcome. Now a warning." },
        { title: "The Descent", desc: "Some stairs only go down." },
        { title: "The Archive", desc: "Memories preserved in dust and regret." },
        { title: "The Altar", desc: "Whatever happened here, it wasn't prayer." }
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
      backers: "Souls Joined",
      daysLeft: "Days Remaining",
      developerTitle: "The Architect",
      developerBio: "I am Petr. A student, a developer, a horror enthusiast. I don't just want to make a game; I want to create a scar on your psyche. Shadowless is my vision of what happens when the lights go out inside your head.",
      developerQuote: "\"Help me build a nightmare we can all share.\"",
      breakdownTitle: "Resource Allocation",
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
      lastUpdatedValue: "25 November 2025",
      intro: "These Terms & Conditions govern your participation in the Shadowless crowdfunding campaign operated by Petr Vurm (the \"Creator\"). By submitting a pledge you agree to the obligations set out below.",
      sections: [
        {
          id: "campaign",
          heading: "1. Nature of the Campaign",
          paragraphs: [
            "Shadowless is an independent video game project currently in active development. Pledges collected through this site are voluntary contributions that enable the Creator to finance production milestones.",
            "A pledge is not an equity investment nor a guarantee of commercial release. It represents your support for the Creator's vision and acceptance of the development risks inherent to creative projects."
          ]
        },
        {
          id: "eligibility",
          heading: "2. Eligibility & Account Information",
          paragraphs: [
            "You confirm that you are at least 18 years old, or that you have obtained the consent of a legal guardian, and that you are legally permitted to enter into these Terms under the laws of your jurisdiction.",
            "You agree to provide accurate contact details so that the Creator can communicate updates and deliver any rewards associated with your selected pledge tier."
          ]
        },
        {
          id: "pledges",
          heading: "3. Pledges and Payments",
          paragraphs: [
            "Payments are processed by Stripe. When you confirm your pledge, the full pledge amount is charged immediately in the currency displayed for your tier.",
            "All pledges are final and non-refundable, even if the campaign does not reach its aspirational funding goal or the scope of the project changes. The Creator commits to applying every collected contribution toward the continued development of Shadowless."
          ],
          bullets: [
            "Your financial institution may apply additional fees or currency conversion charges, which you agree to bear.",
            "Stripe securely stores and handles all payment credentials; the Creator does not receive or retain your card details."
          ]
        },
        {
          id: "rewards",
          heading: "4. Rewards",
          paragraphs: [
            "Each pledge tier lists the planned rewards. Digital rewards may be delivered electronically, while physical items (if any) will require a valid shipping address and may incur customs duties based on your location.",
            "Delivery timelines are estimates. Development realities may necessitate adjustments, and the Creator will provide status updates via the email supplied with your pledge.",
            "If a promised reward becomes impracticable, the Creator will offer a reasonable substitute of equal or greater value. Refunds remain unavailable under any circumstances."
          ]
        },
        {
          id: "changes",
          heading: "5. Project Changes & Delays",
          paragraphs: [
            "Creative projects can evolve. The Creator may refine features, adjust milestones, or reprioritise stretch goals to protect the overall quality of Shadowless.",
            "Should material delays occur, the Creator will inform backers and outline a revised plan for fulfilment. Your entitlement to the rewards of your chosen tier remains intact regardless of funding totals."
          ]
        },
        {
          id: "data",
          heading: "6. Communication & Data",
          paragraphs: [
            "Your contact information is used solely to administer pledges, deliver rewards, and share campaign updates. The Creator will never sell your data to third parties.",
            "You may unsubscribe from non-essential updates at any time, but transactional emails regarding fulfilment will continue to ensure you receive the rewards you are owed."
          ]
        }
      ],
      pledgeReminderHeading: "Important non-refundable pledge notice",
      pledgeReminderBody: "All contributions to the Shadowless campaign are non-refundable, even if the campaign does not reach its target amount. Your contractual right to receive the rewards attached to your selected tier survives regardless of final funding totals, and the Creator remains obliged to deliver them once produced.",
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
        { title: "Práh", desc: "Dříve uvítání. Nyní varování." },
        { title: "Sestup", desc: "Některé schody vedou jen dolů." },
        { title: "Archiv", desc: "Vzpomínky konzervované v prachu." },
        { title: "Oltář", desc: "Cokoliv se tu stalo, modlitba to nebyla." }
      ]
    },
    crowdfunding: {
      title: "Vstupte do stínů",
      intro: "Shadowless je projekt zrozený z čisté posedlosti hororem. Kostra je hotová, noční můra je napsaná. Teď potřebuji vás, abychom stíny probudili k životu.",
      funded: "Vybráno",
      statusLabel: {
        live: "AKTIVNÍ",
        success: "ÚSPĚCH",
        failed: "UZAVŘENO"
      },
      backers: "Duší se připojilo",
      daysLeft: "Dní do konce",
      developerTitle: "Architekt",
      developerBio: "Jsem Petr. Student, vývojář, fanatik do hororu. Nechci jen vyrobit hru. Chci vám vytvořit jizvu na psychice. Shadowless je moje vize toho, co se stane, když v hlavě zhasne světlo.",
      developerQuote: "\"Pomozte mi vybudovat noční můru, kterou budeme sdílet.\"",
      breakdownTitle: "Alokace zdrojů",
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
      lastUpdatedValue: "25. listopadu 2025",
      intro: "Tyto Všeobecné obchodní podmínky upravují účast na crowdfundingové kampani Shadowless, kterou pořádá Petr Vurm (\"Tvůrce\"). Odesláním příspěvku s nimi vyjadřujete souhlas.",
      sections: [
        {
          id: "campaign",
          heading: "1. Charakter kampaně",
          paragraphs: [
            "Shadowless je nezávislý herní projekt ve fázi aktivního vývoje. Příspěvky vybrané prostřednictvím těchto stránek jsou dobrovolnou podporou určenou k financování produkčních milníků.",
            "Příspěvek není investicí ani zárukou komerčního vydání. Je vyjádřením podpory vize Tvůrce a přijetím rizik spojených s vývojem kreativních projektů."
          ]
        },
        {
          id: "eligibility",
          heading: "2. Způsobilost a kontaktní údaje",
          paragraphs: [
            "Stvrzujete, že je vám alespoň 18 let, nebo že máte souhlas zákonného zástupce, a že vám právní předpisy vašeho státu umožňují tyto podmínky přijmout.",
            "Souhlasíte s poskytnutím pravdivých kontaktních údajů, aby vás Tvůrce mohl informovat o novinkách a doručit odměny spojené s vaší zvolenou úrovní."
          ]
        },
        {
          id: "pledges",
          heading: "3. Příspěvky a platby",
          paragraphs: [
            "Platby zpracovává společnost Stripe. Po potvrzení příspěvku je celá částka okamžitě zaúčtována v měně uvedené u zvolené úrovně.",
            "Všechny příspěvky jsou konečné a nevratné, i v případě, že kampaň nedosáhne cílové částky nebo dojde ke změně rozsahu projektu. Tvůrce se zavazuje využít každou získanou korunu na další vývoj Shadowless."
          ],
          bullets: [
            "Vaše banka může účtovat dodatečné poplatky nebo provést měnovou konverzi, kterou hradíte vy.",
            "Platební údaje bezpečně spravuje Stripe; Tvůrce k nim nemá přístup ani je neukládá."
          ]
        },
        {
          id: "rewards",
          heading: "4. Odměny",
          paragraphs: [
            "Každá úroveň příspěvku uvádí plánované odměny. Digitální odměny budou doručeny elektronicky, fyzické položky (pokud budou) vyžadují platnou dodací adresu a mohou podléhat clu či daním dle vašeho státu.",
            "Uvedené termíny jsou orientační. Vývoj může vyžadovat úpravy harmonogramu; Tvůrce bude o stavu informovat na e-mailu uvedeném při příspěvku.",
            "Pokud se ukáže, že slíbenou odměnu nelze zajistit, nabídne Tvůrce přiměřenou alternativu minimálně stejné hodnoty. Vrácení peněz není v žádném případě možné."
          ]
        },
        {
          id: "changes",
          heading: "5. Změny a zpoždění projektu",
          paragraphs: [
            "Kreativní projekty se mohou vyvíjet. Tvůrce může upravovat funkce, milníky či priority stretch cílů, aby zachoval celkovou kvalitu Shadowless.",
            "V případě zásadního zpoždění budou přispěvatelé informováni společně s novým plánem dodání. Vaše nárokovaná odměna zůstává zachována bez ohledu na celkovou vybranou částku."
          ]
        },
        {
          id: "data",
          heading: "6. Komunikace a data",
          paragraphs: [
            "Vaše kontaktní údaje slouží výhradně ke správě příspěvků, doručení odměn a k zasílání informací o kampani. Tvůrce vaše data nikdy neprodá třetím stranám.",
            "Z nevyžádaných novinek se můžete kdykoli odhlásit, avšak transakční e-maily související s doručením odměn budou zasílány i nadále, aby bylo možné odměny splnit."
          ]
        }
      ],
      pledgeReminderHeading: "Důležité upozornění na nevratnost příspěvků",
      pledgeReminderBody: "Všechny příspěvky do kampaně Shadowless jsou nevratné, a to i v případě, že kampaň nedosáhne cílové částky. Váš nárok na odměny přidělené ke zvolené úrovni tím není dotčen a Tvůrce je povinen je po dokončení dodat.",
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
        { title: "Die Schwelle", desc: "Einst ein Willkommen. Jetzt eine Warnung." },
        { title: "Der Abstieg", desc: "Manche Treppen führen nur nach unten." },
        { title: "Das Archiv", desc: "Erinnerungen, konserviert in Staub." },
        { title: "Der Altar", desc: "Was auch immer hier geschah, es war kein Gebet." }
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
      backers: "Verlorene Seelen",
      daysLeft: "Verbleibende Tage",
      developerTitle: "Der Architekt",
      developerBio: "Ich bin Petr. Schüler, Entwickler, Horror-Fanatiker. Ich will nicht nur ein Spiel machen; ich will eine Narbe auf deiner Psyche hinterlassen. Shadowless ist meine Vision dessen, was passiert, wenn im Kopf das Licht ausgeht.",
      developerQuote: "\"Hilf mir, einen Albtraum zu bauen, den wir alle teilen können.\"",
      breakdownTitle: "Ressourcenverteilung",
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
      lastUpdatedValue: "25. November 2025",
      intro: "Diese Allgemeinen Geschäftsbedingungen regeln deine Teilnahme an der Shadowless-Crowdfunding-Kampagne, die von Petr Vurm (der \"Schöpfer\") betrieben wird. Mit deiner Unterstützung akzeptierst du die folgenden Regelungen.",
      sections: [
        {
          id: "campaign",
          heading: "1. Art der Kampagne",
          paragraphs: [
            "Shadowless ist ein unabhängiges Videospielprojekt in aktiver Entwicklung. Die über diese Seite eingezogenen Beiträge sind freiwillige Unterstützungszahlungen zur Finanzierung der Produktionsmeilensteine.",
            "Ein Beitrag ist weder eine Kapitalbeteiligung noch eine Garantie für eine Markteinführung. Er ist ein Ausdruck deiner Unterstützung für die Vision des Schöpfers und deiner Zustimmung zu den Risiken kreativer Projekte."
          ]
        },
        {
          id: "eligibility",
          heading: "2. Teilnahmeberechtigung und Angaben",
          paragraphs: [
            "Du bestätigst, dass du mindestens 18 Jahre alt bist oder die Zustimmung eines gesetzlichen Vertreters besitzt und dass die Gesetze deines Landes den Abschluss dieser Bedingungen zulassen.",
            "Du verpflichtest dich, korrekte Kontaktdaten anzugeben, damit der Schöpfer Updates senden und die mit deiner Stufe verbundenen Belohnungen zustellen kann."
          ]
        },
        {
          id: "pledges",
          heading: "3. Beiträge und Zahlungen",
          paragraphs: [
            "Zahlungen werden von Stripe verarbeitet. Mit dem Bestätigen deiner Unterstützung wird der vollständige Betrag sofort in der bei deiner Stufe angegebenen Währung belastet.",
            "Alle Beiträge sind endgültig und nicht erstattungsfähig, auch wenn das Kampagnenziel nicht erreicht wird oder sich der Projektumfang ändert. Der Schöpfer verpflichtet sich, jeden eingezogenen Betrag in die Weiterentwicklung von Shadowless zu investieren."
          ],
          bullets: [
            "Dein Finanzinstitut kann zusätzliche Gebühren oder Wechselkurskosten erheben, die du übernimmst.",
            "Stripe speichert und verarbeitet alle Zahlungsdaten sicher; der Schöpfer erhält keinen Zugriff auf deine Kartendaten."
          ]
        },
        {
          id: "rewards",
          heading: "4. Belohnungen",
          paragraphs: [
            "Jede Unterstützerstufe beschreibt die geplanten Belohnungen. Digitale Inhalte werden elektronisch geliefert; physische Gegenstände (falls vorhanden) erfordern eine gültige Lieferadresse und können je nach Land Zölle oder Steuern auslösen.",
            "Liefertermine sind Schätzungen. Entwicklungsrealitäten können Anpassungen notwendig machen; der Schöpfer informiert per E-Mail über den Fortschritt.",
            "Sollte eine Belohnung nicht realisierbar sein, stellt der Schöpfer eine angemessene Alternative von gleichem oder höherem Wert zur Verfügung. Rückerstattungen sind unter keinen Umständen vorgesehen."
          ]
        },
        {
          id: "changes",
          heading: "5. Projektänderungen und Verzögerungen",
          paragraphs: [
            "Kreative Projekte entwickeln sich weiter. Der Schöpfer kann Funktionen anpassen, Meilensteine verschieben oder Stretch-Goals neu priorisieren, um die Qualität von Shadowless zu sichern.",
            "Bei wesentlichen Verzögerungen informiert der Schöpfer die Unterstützer und legt einen aktualisierten Erfüllungsplan vor. Dein Anspruch auf die Belohnungen deiner gewählten Stufe bleibt unabhängig vom Endbetrag bestehen."
          ]
        },
        {
          id: "data",
          heading: "6. Kommunikation und Daten",
          paragraphs: [
            "Deine Kontaktdaten werden ausschließlich zur Verwaltung der Beiträge, zur Lieferung der Belohnungen und für Kampagnen-Updates verwendet. Eine Weitergabe an Dritte findet nicht statt.",
            "Du kannst dich jederzeit von optionalen Updates abmelden; transaktionsbezogene E-Mails zur Erfüllung werden jedoch weiterhin gesendet, damit du deine Belohnungen erhältst."
          ]
        }
      ],
      pledgeReminderHeading: "Wichtiger Hinweis zur Nicht-Rückerstattung",
      pledgeReminderBody: "Alle Beiträge für die Shadowless-Kampagne sind endgültig und werden nicht zurückerstattet, selbst wenn das Finanzierungsziel verfehlt wird. Dein Anspruch auf die Belohnungen deiner gewählten Stufe bleibt davon unberührt, und der Schöpfer ist verpflichtet, sie nach Fertigstellung zu liefern.",
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