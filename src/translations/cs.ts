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
    subtitle: "Český psychologický horor",
    quote: "\"Český psychologický horor o vině, tichu a domě, který nezapomíná.\"",
    pitch: "Pomozte financovat první produkční fázi hry: anglický voice-over, zvuk, hratelnou ukázku a přípravu na Steam. Shadowless je nezávislý solo projekt a každá podpora posouvá hru blíž k dokončení.",
    wishlist: "Přidat do seznamu přání",
    support: "Podpořit přímo",
    supportStartovac: "Podpořit přes Startovač"
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
    title: "Podpořte projekt",
    intro: "Shadowless je nezávislý psychologický horor v aktivním vývoji. Příběh je napsaný, vize je jasná. Vaše podpora pomáhá financovat další produkční fázi a přivádí tuto hru k životu.",
    primaryNote: "Tento web je hlavní místo podpory projektu Shadowless. Platba přes web přímo financuje vývoj hry. Alternativně můžete přispět přes Startovač — českou crowdfundingovou platformu. Obě cesty podporují stejný vývoj Shadowless.",
    funded: "Vybráno",
    statusLabel: {
      live: "AKTIVNÍ",
      success: "ÚSPĚCH",
      failed: "UZAVŘENO"
    },
    backers: "Podporovatelů",
    daysLeft: "Dní do konce",
    developerTitle: "Vývojář",
    developerName: "Petr Vurm",
    developerRole: "Samostatný vývojář",
    developerBio: "Jsem Petr. Student, vývojář, fanatik do hororu. Nechci jen vyrobit hru. Chci vám vytvořit jizvu na psychice. Shadowless je moje vize toho, co se stane, když v hlavě zhasne světlo.",
    developerQuote: "\"Pomozte mi vybudovat noční můru, kterou budeme sdílet.\"",
    breakdownTitle: "Jak jsou prostředky využity",
    breakdown: {
      dev: "Základní vývoj",
      devDesc: "3D assety, textury, prostředí, licence enginu",
      audio: "Audio a voice-over",
      audioDesc: "Dabingové testy, casting, zvukový design, atmosféra",
      tax: "Odměny pro podporovatele",
      fees: "Daně, poplatky a rezerva"
    },
    firstMilestone: {
      title: "První milník",
      amount: 60000,
      description: "Casting / voice test, anglický voice-over test, zvukový směr, příprava traileru a první veřejná prezentace.",
      note: "První milník nezaplatí celou hru — zaplatí první produkční krok."
    },
    whereMoneyGoesTitle: "Kam peníze půjdou",
    whereMoneyGoesItems: [
      { label: "Voice-over / casting / dabingové testy" },
      { label: "Zvukové assety a atmosféra" },
      { label: "3D assety, textury a prostředí" },
      { label: "Trailer a prezentační materiály" },
      { label: "Steam / technické náklady" },
      { label: "Poplatky, daně a rezerva" }
    ],
    whatExistsTitle: "Co už existuje",
    whatExistsItems: [
      "Příběhová bible",
      "Hlavní koncept hry",
      "Plán kapitol a konců",
      "Web projektu",
      "Vizuální směr",
      "Rozpracované prostředí domu",
      "Prototypování mechanik",
      "Příprava Steam prezentace",
      "Galerie a první prezentační materiály"
    ],
    fairWarning: "Shadowless je hra ve vývoji. Podporou pomáháte financovat její další tvorbu. Digitální odměny budou doručeny postupně podle stavu vývoje. Termíny se mohou změnit podle rozsahu hry, rozpočtu a technických možností. Pokud by se rozsah nebo plán výrazně změnil, podporovatelé budou informováni přes web a e-mail.",
    stretchGoalsTitle: "Milníky",
    stretchGoals: [
      { amount: 60000, title: "První hlas stínů", description: "Casting, anglický voice-over test, zvukový směr a první veřejná prezentace." },
      { amount: 250000, title: "Hratelná ukázka", description: "První hratelný vertical slice zachycující klíčovou atmosféru a mechaniky hry." },
      { amount: 600000, title: "Anglický dabing pro demo", description: "Profesionální anglický voice-over pro hratelné demo — první postavy ožívají." },
      { amount: 1200000, title: "Steam + veřejné demo", description: "Spuštění Steam stránky, vydání veřejného dema, první velká prezentace Shadowless." },
      { amount: 2400000, title: "Širší anglická produkce", description: "Rozšíření anglického dabingu a audio produkce na větší část hry." },
      { amount: 4800000, title: "Český profesionální dabing", description: "Profesionální český dabing — hra bude plně hratelná i v češtině." },
      { amount: 9600000, title: "Český dabing se známými hlasy", description: "Vyšší rozpočet umožní oslovit známé české dabéry a herce. Konkrétní jména nejsou garantována — záleží na uzavřených smlouvách v době produkce." }
    ],
    cta: "Podpořit projekt",
    supporters: {
      title: "Příspěvky podporovatelů",
      toggleOpen: "Zobrazit podporovatele",
      toggleClose: "Skrýt podporovatele",
      loading: "Načítám podporovatele...",
      error: "Podporovatele se momentálně nepodařilo načíst.",
      empty: "Zatím není zaznamenán žádný podporovatel. Buď prvním, kdo se přidá.",
      tableHeaders: {
        name: "Jméno",
        amount: "Celkový příspěvek"
      }
    },
    modal: {
      title: "Zvolte svou podporu",
      recommendedLabel: "Doporučeno",
      stepTitles: {
        tier: "Vyberte úroveň",
        details: "Vaše údaje",
        card: "Platební metoda",
        review: "Kontrola a potvrzení"
      },
      stepDescriptions: {
        tier: "Zvolte příspěvek, který odpovídá vaší ochotě pomoct.",
        details: "Napište nám, komu máme odměny doručit.",
        card: "Zadejte údaje o kartě v zabezpečeném formuláři Stripe.",
        review: "Před dokončením příspěvku potvrďte všechny údaje."
      },
      payBtn: "Dokončit podporu",
      continueBtn: "Pokračovat",
      reviewBtn: "Přejít na rekapitulaci",
      processing: "Zpracovávám...",
      successTitle: "Příspěvek přijat",
      successMsg: "Děkujeme. Potvrzení dorazí na váš e-mail.",
      closeBtn: "Zavřít",
      backToTiers: "Zpět na výběr",
      backToDetails: "Upravit údaje",
      editDetails: "Změnit údaje",
      editPayment: "Změnit způsob platby",
      selectedTier: "Vybraná úroveň",
      testCardNotice: "Použijte testovací kartu Stripe 4242 4242 4242 4242, libovolné budoucí datum expirace, CVC 123 a PSČ 12345.",
      firstNameLabel: "Jméno",
      lastNameLabel: "Příjmení",
      emailLabel: "E-mail",
      notesLabel: "Poznámky",
      notesOptionalHint: "Volitelné.",
      summaryHeading: "Finální rekapitulace",
      summaryContact: "Kontakt",
      summaryNotes: "Poznámky",
      summaryAmount: "Celkem",
      notesEmpty: "Bez doplňujících poznámek.",
      consentTerms: "Přečetl/a jsem si obchodní podmínky a souhlasím s nimi.",
      consentPrivacy: "Přečetl/a jsem si zásady zpracování osobních údajů a souhlasím s nimi.",
      consentGameDev: "Beru na vědomí, že Shadowless je hra ve vývoji a digitální odměny budou doručovány postupně podle stavu vývoje.",
      consentRequired: "Pro dokončení platby je nutné potvrdit všechna políčka.",
      validation: {
        required: "Toto pole je povinné.",
        email: "Zadejte platný e-mail."
      },
      availability: {
        available: "Zbývá {remaining} z {total}",
        soldOut: "Vyprodáno"
      },
      tiers: [
        {
          id: "tier1",
          name: "Symbolická podpora",
          price: 150,
          currency: " Kč",
          rewards: ["Digitální poděkování", "Jméno na stránce podporovatelů webu"],
          limit: TIER_LIMITS["tier1"] ?? undefined,
          sold: 0
        },
        {
          id: "tier2",
          name: "Jméno v titulcích",
          price: 300,
          currency: " Kč",
          rewards: ["Všechny předchozí odměny", "Jméno v titulcích hry v sekci podporovatelů"],
          limit: TIER_LIMITS["tier2"] ?? undefined,
          sold: 0
        },
        {
          id: "tier3",
          name: "Digitální kopie hry",
          price: 450,
          currency: " Kč",
          rewards: ["Všechny předchozí odměny", "Digitální kopie Shadowless po vydání. Preferovaná platforma je Steam — konkrétní způsob doručení bude potvrzen podle pravidel distribuční platformy v době vydání."],
          limit: TIER_LIMITS["tier3"] ?? undefined,
          sold: 0
        },
        {
          id: "tier4",
          name: "Founder Pack",
          price: 750,
          currency: " Kč",
          rewards: ["Digitální kopie hry", "Soundtrack v digitální podobě", "Balíček tapet", "Jméno na stránce podporovatelů"],
          limit: TIER_LIMITS["tier4"] ?? undefined,
          sold: 0
        },
        {
          id: "tier5",
          name: "Hledač pravdy",
          price: 1350,
          currency: " Kč",
          rewards: ["Všechny předchozí odměny", "Digitální artbook", "Lore dokument v PDF", "Jméno v titulcích hry"],
          recommended: true,
          limit: TIER_LIMITS["tier5"] ?? undefined,
          sold: 0
        },
        {
          id: "tier6",
          name: "Archivář",
          price: 2250,
          currency: " Kč",
          rewards: ["Všechny předchozí odměny", "Přístup k vývojovým novinkám a zákulisním materiálům", "Uzavřená komunita (po spuštění)"],
          limit: TIER_LIMITS["tier6"] ?? undefined,
          sold: 0
        },
        {
          id: "tier7",
          name: "Patron vývoje",
          price: 4500,
          currency: " Kč",
          rewards: ["Všechny předchozí odměny", "Přístup k testovací verzi, až bude připravena — termín závisí na stavu vývoje", "Výraznější poděkování v titulcích a na webu"],
          limit: TIER_LIMITS["tier7"] ?? undefined,
          sold: 0
        },
        {
          id: "tier8",
          name: "Patron hlasů",
          price: 9000,
          currency: " Kč",
          rewards: ["Všechny předchozí odměny", "Speciální poděkování v sekci 'Voice & Audio Supporters'"],
          limit: TIER_LIMITS["tier8"] ?? undefined,
          sold: 0
        },
        {
          id: "tier9",
          name: "Produkční patronát",
          price: 18000,
          currency: " Kč",
          rewards: ["Zvláštní poděkování jako významný produkční podporovatel", "Výrazné poděkování na webu a v titulcích hry"],
          limit: TIER_LIMITS["tier9"] ?? undefined,
          sold: 0
        }
      ]
    }
  },
  thankYou: {
    title: "Děkujeme",
    subtitle: "Váš příspěvek byl přijat.",
    orderLabel: "ID objednávky",
    tierLabel: "Zvolená úroveň",
    amountLabel: "Částka příspěvku",
    supporterLabel: "Podporovatel",
    emailLabel: "Kontaktní e-mail",
    paymentIdLabel: "ID Stripe platby",
    notesLabel: "Poznámky",
    notesEmpty: "Žádné doplňující poznámky.",
    emailNote: "Potvrzení a detaily příspěvku byly odeslány na váš e-mail.",
    backBtn: "Přejít na web"
  },
  terms: {
    title: "Všeobecné obchodní podmínky",
    lastUpdatedLabel: "Poslední aktualizace",
    lastUpdatedValue: "27. června 2026",
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
          "Souhlasíte s poskytnutím přesných kontaktních údajů a s jejich včasnou aktualizací, aby vás Tvůrce mohl informovat a doručit vám odměny spojené s vybranou úrovní."
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
          "Každá úroveň popisuje zamýšlené digitální odměny. Veškeré odměny jsou doručovány digitálně a elektronicky — žádná úroveň nezahrnuje fyzické zboží.",
          "Uvedené termíny jsou orientační. Produkční omezení mohou vyžadovat úpravy; Tvůrce bude o změnách informovat na e-mail připojený k vašemu příspěvku.",
          "Pokud se konkrétní odměnu nepodaří zajistit, poskytne Tvůrce přiměřenou digitální náhradu stejné či vyšší hodnoty. Náhrada peněžní formou se neposkytuje."
        ]
      },
      {
        id: "changes",
        heading: "5. Změny projektu a harmonogram",
        paragraphs: [
          "Tvůrce může upravovat rozsah, funkce nebo stretch cíle tak, aby reagoval na technické, právní či finanční okolnosti a zachoval celkovou kvalitu Shadowless.",
          "V případě podstatného zpoždění nebo změny rozsahu budou přispěvatelé informováni přes web a e-mail a obdrží aktualizovaný plán plnění. Váš nárok na odměny zvoleného stupně zůstává zachován bez ohledu na celkově vybranou částku."
        ]
      },
      {
        id: "data",
        heading: "6. Komunikace a ochrana údajů",
        paragraphs: [
          "Tvůrce používá vaše osobní údaje výhradně ke správě příspěvků, splnění zákonných povinností, doručení odměn a komunikaci o kampani. Údaje nebudou prodány třetím stranám.",
          "Z nevyžádaných novinek se můžete kdykoli odhlásit. Transakční nebo plnící e-maily budou zasílány po dobu, po kterou je váš příspěvek aktivní, aby bylo zajištěno dodání odměn.",
          "Podrobnosti o zpracování osobních údajů naleznete v Zásadách zpracování osobních údajů."
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
    pledgeReminderBody: "Všechny příspěvky do kampaně Shadowless se považují za nevratné dary, pokud vám závazná spotřebitelská legislativa neposkytuje jiné právo. Digitální odměny budou doručovány postupně podle stavu vývoje. Pokud by se rozsah nebo plán výrazně změnil, podporovatelé budou informováni přes web a e-mail.",
    contactHeading: "Kontakt",
    contactBusinessLabel: "Provozovatel",
    contactBusinessValue: "Petr Vurm, živnostník (Česká republika)",
    contactBusinessIdLabel: "IČ",
    contactBusinessIdValue: "21180164",
    contactEmailLabel: "Kontaktní e-mail",
    contactEmail: "kontakt@petrvurm.cz",
    backLinkLabel: "Zpět na hlavní stránku"
  },
  privacy: {
    title: "Zásady zpracování osobních údajů",
    lastUpdatedLabel: "Poslední aktualizace",
    lastUpdatedValue: "27. června 2026",
    intro: "Tyto Zásady zpracování osobních údajů popisují, jak Petr Vurm (\"Tvůrce\") shromažďuje, zpracovává a chrání osobní údaje v rámci crowdfundingové kampaně Shadowless provozované na adrese shadowlessthegame.eu.",
    sections: [
      {
        id: "controller",
        heading: "1. Správce osobních údajů",
        paragraphs: [
          "Správcem osobních údajů je Petr Vurm, živnostník, Česká republika, IČ 21180164. Kontakt: kontakt@petrvurm.cz."
        ]
      },
      {
        id: "data-collected",
        heading: "2. Jaké údaje shromažďujeme",
        paragraphs: [
          "Při odesílání příspěvku shromažďujeme: jméno, příjmení, e-mailovou adresu, volitelné poznámky, referenci platby (Stripe payment intent ID), výši příspěvku, zvolenou úroveň a datum příspěvku.",
          "Čísla platebních karet ani platební údaje neukládáme — zpracovává je výhradně Stripe (stripe.com). Podrobnosti o zpracování dat ze strany Stripe naleznete v jejich zásadách ochrany osobních údajů."
        ]
      },
      {
        id: "purpose",
        heading: "3. Účel a právní základ zpracování",
        paragraphs: [
          "Vaše osobní údaje zpracováváme pro následující účely:",
        ],
        bullets: [
          "Správa příspěvku a doručení digitálních odměn — právní základ: plnění smlouvy.",
          "Zasílání potvrzení objednávky a novinek o kampani — právní základ: oprávněný zájem / souhlas.",
          "Plnění zákonných a účetních povinností — právní základ: zákonná povinnost.",
          "Vedení veřejného seznamu podporovatelů (jméno, příjmení, částka) — právní základ: oprávněný zájem. Vymazání z tohoto seznamu lze kdykoliv vyžádat."
        ]
      },
      {
        id: "retention",
        heading: "4. Doba uchovávání údajů",
        paragraphs: [
          "Záznamy o příspěvcích jsou uchovávány po dobu stanovenou českým účetním zákonem (zpravidla 10 let). Kontaktní údaje jsou uchovávány do doby, kdy jsou odměny splněny a údaje již nejsou potřebné pro zákonné účely.",
          "Vymazání vašich osobních údajů lze kdykoli vyžádat, s výhradou zákonných povinností uchovávání."
        ]
      },
      {
        id: "rights",
        heading: "5. Vaše práva",
        paragraphs: [
          "Na základě GDPR a platné české legislativy máte právo na: přístup ke svým osobním údajům, opravu nepřesných údajů, výmaz (právo být zapomenut), omezení zpracování a vznesení námitky proti zpracování.",
          "Pro uplatnění jakéhokoli z těchto práv nás kontaktujte na kontakt@petrvurm.cz. Odpovíme do 30 dnů."
        ]
      },
      {
        id: "third-parties",
        heading: "6. Třetí strany",
        paragraphs: [
          "Vaše údaje sdílíme výhradně s níže uvedenými poskytovateli služeb za účelem provozu kampaně:",
        ],
        bullets: [
          "Stripe, Inc. — zpracování plateb.",
          "Resend / poskytovatel e-mailových služeb — zasílání potvrzení objednávek.",
          "Supabase / hostitel databáze — uchovávání záznamů o příspěvcích."
        ]
      },
      {
        id: "security",
        heading: "7. Bezpečnost",
        paragraphs: [
          "Přijímáme přiměřená technická a organizační opatření na ochranu vašich osobních údajů. Veškeré platební údaje jsou zpracovávány výhradně prostřednictvím PCI-DSS-kompatibilní infrastruktury Stripe.",
          "V případě narušení bezpečnosti dat, které představuje riziko pro vaše práva, budeme v souladu se zákonem informovat příslušný dozorový úřad a dotčené osoby."
        ]
      }
    ],
    contactHeading: "Kontakt",
    contactEmail: "kontakt@petrvurm.cz",
    backLinkLabel: "Zpět na hlavní stránku"
  },
  footer: {
    rights: "Všechna práva vyhrazena.",
    madeIn: "Vyrobeno v temném srdci České republiky.",
    quote: "\"Světlo je jen dočasná iluze.\"",
    termsLink: "Obchodní podmínky",
    privacyLink: "Zásady zpracování údajů"
  }
};
