import { TIER_LIMITS } from "@/constants/tiers";
import type { Content } from "@/types";

export const csContent: Content = {
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
      availability: {
        available: "Zbývá {remaining} z {total}",
        soldOut: "Vyprodáno"
      },
      tiers: [
        {
          id: "tier1",
          name: "Pozorovatel stínů",
          price: 150,
          currency: " Kč",
          rewards: ["Digitální vděčnost", "Jméno v titulcích"],
          limit: TIER_LIMITS["tier1"] ?? undefined,
          sold: 0
        },
        {
          id: "tier2",
          name: "Poutník",
          price: 450,
          currency: " Kč",
          rewards: ["Všechny předchozí odměny", "Digitální kopie Shadowless"],
          limit: TIER_LIMITS["tier2"] ?? undefined,
          sold: 0
        },
        {
          id: "tier3",
          name: "Průzkumník",
          price: 750,
          currency: " Kč",
          rewards: ["Všechny předchozí odměny", "Originální Soundtrack", "Balíček tapet ve vysokém rozlišení"],
          limit: TIER_LIMITS["tier3"] ?? undefined,
          sold: 0
        },
        {
          id: "tier4",
          name: "Hledač pravdy",
          price: 1350,
          currency: " Kč",
          rewards: ["Všechny předchozí odměny", "Digitální artbook", "Kniha Lore (PDF)", "Předběžný přístup", "Vstup do uzavřené komunity"],
          limit: TIER_LIMITS["tier4"] ?? undefined,
          sold: 0
        },
        {
          id: "tier5",
          name: "DLC: Hellwalker",
          price: 1800,
          currency: " Kč",
          rewards: ["Všechny předchozí odměny", "Příběhové DLC \"HELL\""],
          recommended: true,
          limit: TIER_LIMITS["tier5"] ?? undefined,
          sold: 0
        },
        {
          id: "tier6",
          name: "Digitální kurátor",
          price: 2250,
          currency: " Kč",
          rewards: ["Všechny předchozí odměny", "Digitální certifikát", "Osobní video poděkování"],
          limit: TIER_LIMITS["tier6"] ?? undefined,
          sold: 0
        },
        {
          id: "tier7",
          name: "Fyzický kurátor",
          price: 2700,
          currency: " Kč",
          rewards: ["Všechny odměny \"Digitální kurátor\"", "Fyzická kopie (Box)", "Tištěný artbook"],
          limit: TIER_LIMITS["tier7"] ?? undefined,
          sold: 0
        },
        {
          id: "tier8",
          name: "Sběratel Deluxe",
          price: 3300,
          currency: " Kč",
          rewards: ["Všechny předchozí odměny", "Soundtrack na CD", "Sada samolepek"],
          limit: TIER_LIMITS["tier8"] ?? undefined,
          sold: 0
        },
        {
          id: "tier9",
          name: "Nositel stínu",
          price: 4500,
          currency: " Kč",
          rewards: ["Všechny předchozí odměny", "Exkluzivní oblečení Shadowless"],
          limit: TIER_LIMITS["tier9"] ?? undefined,
          sold: 0
        },
        {
          id: "tier10",
          name: "Vizionář",
          price: 6000,
          currency: " Kč",
          rewards: ["Všechny předchozí odměny", "Unikátní artwork na míru"],
          limit: TIER_LIMITS["tier10"] ?? undefined,
          sold: 0
        },
        {
          id: "tier11",
          name: "Tvůrce stínů",
          price: 9000,
          currency: " Kč",
          rewards: ["Všechny předchozí odměny", "Soukromé Q&A na Discordu", "Návrh vedlejší postavy do hry"],
          limit: TIER_LIMITS["tier11"] ?? undefined,
          sold: 0
        },
        {
          id: "tier12",
          name: "Architekt",
          price: 30000,
          currency: " Kč",
          rewards: ["Všechny předchozí odměny", "Konzultace vývoje", "Vlastní easter egg / reference ve hře"],
          limit: TIER_LIMITS["tier12"] ?? undefined,
          sold: 0
        },
        {
          id: "tier14",
          name: "Vládce prázdnoty",
          price: 45000,
          currency: " Kč",
          rewards: ["Všechny předchozí odměny", "Ultimátní sběratelský box"],
          limit: TIER_LIMITS["tier14"] ?? undefined,
          sold: 0
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
};
