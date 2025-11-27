import { TIER_LIMITS } from "@/constants/tiers";
import type { Content } from "@/types";

export const deContent: Content = {
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
    label: "Die Erzählung",
    title: "Dalton Adams",
    p1: "Shadowless ist keine Geschichte über ein Spukhaus. Es ist die Obduktion einer Seele.",
    p2: "Du bist Dalton Adams. Ein Mann auf der Flucht vor dem Echo eines Lebens, das nicht mehr existiert. Der Umzug in ein abgelegenes tschechisches Dorf sollte ein Neuanfang sein, doch die Stille hier wiegt schwer. Nach Lucys Unfall und Ethans ... Veränderung ... ist Isolation nicht mehr nur körperlich.",
    p3: "Das Haus hört zu. Es atmet. Und es erinnert sich an Dinge, die du vergessen wolltest.",
    quote: "\"Kommen die Wände näher, oder dehnt sich dein Verstand in die Leere aus? In diesem Haus ist geistige Gesundheit eine begrenzte Ressource.\"",
    p4: "Stell dich dem, was in den Augenwinkeln lauert. Aber denk daran: Die Wahrheit zu erkennen, könnte schlimmer sein als der Wahnsinn selbst."
  },
  about: {
    title: "Labyrinth des",
    titleHighlight: "Unterbewusstseins",
    envDescription: "Das Haus der Adams ist ein feindlicher Organismus. Angetrieben von Unreal Engine 5 ist jeder Schatten berechnet, jedes Knarren eine Warnung. Der Grundriss verschiebt sich, sobald du nicht hinsiehst. Vom erstickenden Dachboden bis zum bodenlosen Keller spiegelt die Umgebung Daltons zerfallende Psyche wider.",
    gameplayTitle: "Überleben",
    gameplayPoints: [
      "Totale Hilflosigkeit. Keine Waffen. Kein Kampf. Deine einzige Verteidigung ist Laufen, Verstecken oder Beten.",
      "Fragmente der Wahrheit. Setze die Tragödie über Environmental Storytelling zusammen. Das Haus kennt die Antworten.",
      "Nicht-euklidische Rätsel. Logik gilt hier nicht. Manipuliere eine Realität, die permanent zerbricht."
    ],
    features: [
      {
        title: "Psychologischer Terror",
        description: "Keine billigen Jump-Scares. Nur eine erstickende Atmosphäre, die lange nach dem Spiel bleibt.",
        icon: "brain"
      },
      {
        title: "Unzuverlässige Realität",
        description: "Hat sich die Puppe bewegt? War die Tür vorher da? Traue nichts – nicht einmal deinen Augen.",
        icon: "eye"
      },
      {
        title: "Next-Gen Grauen",
        description: "Lumen- und Nanite-Technologie liefert Fotorealismus, der den Horror unangenehm greifbar macht.",
        icon: "monitor"
      },
      {
        title: "Reaktives Audio",
        description: "Metasounds erschaffen eine Klanglandschaft, in der Stille lauter ist als ein Schrei.",
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
    developerTitle: "Der Entwickler",
    developerName: "Petr Vurm",
    developerRole: "Einzelentwickler",
    developerBio: "Ich bin Petr. Schüler, Entwickler, Horror-Fanatiker. Ich will nicht nur ein Spiel machen – ich will eine Narbe auf deiner Psyche hinterlassen. Shadowless ist meine Vision davon, was geschieht, wenn im Kopf das Licht erlischt.",
    developerQuote: "\"Hilf mir, einen Albtraum zu bauen, den wir alle teilen können.\"",
    breakdownTitle: "Verwendung der Mittel",
    breakdown: {
      dev: "Grundlegende Entwicklung",
      devDesc: "Assets, Mocap, Lizenzen, Feinschliff",
      audio: "Audiodesign",
      audioDesc: "Professioneller Komponist, Sprachaufnahmen, Sounddesign",
      tax: "Belohnungen für Unterstützer",
      fees: "Steuern und Gebühren"
    },
    stretchGoalsTitle: "Meilensteine",
    stretchGoals: [
      { amount: 25200, title: "Es erwacht", description: "Kampagnenerfolg. Digitale Belohnungen gesichert. Der Albtraum beginnt." },
      { amount: 50400, title: "Symphonie der Angst", description: "Professioneller Komponist für einen einzigartigen, nervenaufreibenden Soundtrack." },
      { amount: 100800, title: "Binauraler Albtraum", description: "Vollständig immersives 3D-Audio. Du wirst sie hinter dir atmen hören." },
      { amount: 218400, title: "Stimme des Wahnsinns", description: "Professionelle englische Sprecher, die der Verzweiflung Leben einhauchen." },
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
      availability: {
        available: "Noch {remaining} von {total}",
        soldOut: "Ausverkauft"
      },
      tiers: [
        {
          id: "tier1",
          name: "Schatten-Beobachter",
          price: 5,
          currency: " €",
          rewards: ["Digitaler Dank", "Name in den Credits"],
          limit: TIER_LIMITS["tier1"] ?? undefined,
          sold: 0
        },
        {
          id: "tier2",
          name: "Wanderer",
          price: 14,
          currency: " €",
          rewards: ["Alle vorherigen Belohnungen", "Digitale Kopie von Shadowless"],
          limit: TIER_LIMITS["tier2"] ?? undefined,
          sold: 0
        },
        {
          id: "tier3",
          name: "Entdecker",
          price: 24,
          currency: " €",
          rewards: ["Alle vorherigen Belohnungen", "Original Soundtrack", "High-Res Wallpaper-Paket"],
          limit: TIER_LIMITS["tier3"] ?? undefined,
          sold: 0
        },
        {
          id: "tier4",
          name: "Wahrheitssucher",
          price: 43,
          currency: " €",
          rewards: ["Alle vorherigen Belohnungen", "Digitales Artbook", "Lore-Buch (PDF)", "Early Access", "Innerer Kreis"],
          limit: TIER_LIMITS["tier4"] ?? undefined,
          sold: 0
        },
        {
          id: "tier5",
          name: "DLC: Höllenwanderer",
          price: 57,
          currency: " €",
          rewards: ["Alle vorherigen Belohnungen", "DLC \"HÖLLE\" Erweiterung"],
          recommended: true,
          limit: TIER_LIMITS["tier5"] ?? undefined,
          sold: 0
        },
        {
          id: "tier6",
          name: "Digitaler Kurator",
          price: 71,
          currency: " €",
          rewards: ["Alle vorherigen Belohnungen", "Digitales Zertifikat", "Persönliche Videobotschaft"],
          limit: TIER_LIMITS["tier6"] ?? undefined,
          sold: 0
        },
        {
          id: "tier7",
          name: "Physischer Kurator",
          price: 85,
          currency: " €",
          rewards: ["Alle \"Digitaler Kurator\" Belohnungen", "Physische Box-Version", "Gedrucktes Artbook"],
          limit: TIER_LIMITS["tier7"] ?? undefined,
          sold: 0
        },
        {
          id: "tier8",
          name: "Sammler Deluxe",
          price: 105,
          currency: " €",
          rewards: ["Alle vorherigen Belohnungen", "Soundtrack auf CD", "Sticker-Set"],
          limit: TIER_LIMITS["tier8"] ?? undefined,
          sold: 0
        },
        {
          id: "tier9",
          name: "Träger des Schattens",
          price: 142,
          currency: " €",
          rewards: ["Alle vorherigen Belohnungen", "Exklusive Shadowless-Kleidung"],
          limit: TIER_LIMITS["tier9"] ?? undefined,
          sold: 0
        },
        {
          id: "tier10",
          name: "Der Visionär",
          price: 190,
          currency: " €",
          rewards: ["Alle vorherigen Belohnungen", "Einzigartiges personalisiertes Kunstwerk"],
          limit: TIER_LIMITS["tier10"] ?? undefined,
          sold: 0
        },
        {
          id: "tier11",
          name: "Schatten-Gestalter",
          price: 285,
          currency: " €",
          rewards: ["Alle vorherigen Belohnungen", "Privates Discord Q&A", "Gestalte einen Nebencharakter"],
          limit: TIER_LIMITS["tier11"] ?? undefined,
          sold: 0
        },
        {
          id: "tier12",
          name: "Architekt",
          price: 950,
          currency: " €",
          rewards: ["Alle vorherigen Belohnungen", "Mitwirkung an der Entwicklung", "Eigenes Easter Egg im Spiel"],
          limit: TIER_LIMITS["tier12"] ?? undefined,
          sold: 0
        },
        {
          id: "tier14",
          name: "Herr der Leere",
          price: 1425,
          currency: " €",
          rewards: ["Alle vorherigen Belohnungen", "Ultimative Sammlerbox"],
          limit: TIER_LIMITS["tier14"] ?? undefined,
          sold: 0
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
          "Diese Bedingungen unterliegen dem Recht der Tschechischen Republik unter Ausschluss ihrer Kollisionsnormen. Streitigkeiten werden den zuständigen tschechischen Gerichten vorgelegt, sofern zwingende Bestimmungen deines Wohnsitzstaates nichts anderes vorsehen."
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
};
