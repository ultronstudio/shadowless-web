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
    subtitle: "Tschechischer psychologischer Horror",
    quote: "\"Ein tschechischer psychologischer Horror über Schuld, Stille und ein Haus, das niemals vergisst.\"",
    pitch: "Hilf dabei, die erste Produktionsphase zu finanzieren: englische Vertonung, Sound, ein spielbares Demo und die Steam-Vorbereitung. Shadowless ist ein unabhängiges Solo-Projekt — jede Unterstützung bringt das Spiel dem Abschluss näher.",
    wishlist: "Auf die Wunschliste",
    support: "Direkt unterstützen",
    supportStartovac: "Über Startovač unterstützen"
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
    title: "Das Projekt unterstützen",
    intro: "Shadowless ist ein unabhängiger psychologischer Horror in aktiver Entwicklung. Die Geschichte ist geschrieben, die Vision ist klar. Deine Unterstützung finanziert die nächste Produktionsphase und bringt dieses Spiel zum Leben.",
    primaryNote: "Diese Website ist der primäre Ort zur Unterstützung von Shadowless. Zahlungen über diese Website fließen direkt in die Spielentwicklung. Alternativ kannst du über Startovač unterstützen — eine bekannte tschechische Crowdfunding-Plattform. Beide Wege finanzieren dieselbe Entwicklung von Shadowless.",
    funded: "Finanziert",
    statusLabel: {
      live: "AKTIV",
      success: "ERFOLG",
      failed: "GESCHLOSSEN"
    },
    backers: "Unterstützer",
    daysLeft: "Verbleibende Tage",
    developerTitle: "Der Entwickler",
    developerName: "Petr Vurm",
    developerRole: "Einzelentwickler",
    developerBio: "Ich bin Petr. Schüler, Entwickler, Horror-Fanatiker. Ich will nicht nur ein Spiel machen – ich will eine Narbe auf deiner Psyche hinterlassen. Shadowless ist meine Vision davon, was geschieht, wenn im Kopf das Licht erlischt.",
    developerQuote: "\"Hilf mir, einen Albtraum zu bauen, den wir alle teilen können.\"",
    breakdownTitle: "Wie die Mittel verwendet werden",
    breakdown: {
      dev: "Grundlegende Entwicklung",
      devDesc: "3D-Assets, Texturen, Umgebungen, Engine-Lizenz",
      audio: "Audio & Vertonung",
      audioDesc: "Sprachaufnahmen, Casting, Sounddesign, Atmosphäre",
      tax: "Belohnungen für Unterstützer",
      fees: "Steuern, Gebühren & Reserve"
    },
    firstMilestone: {
      title: "Erster Meilenstein",
      amount: 2275,
      description: "Casting / Sprach-Test, englischer Voice-Over-Test, Audioleitung, Trailer-Vorbereitung und erste öffentliche Präsentation.",
      note: "Der erste Meilenstein finanziert nicht das gesamte Spiel — er finanziert den ersten Produktionsschritt."
    },
    whereMoneyGoesTitle: "Wofür das Geld verwendet wird",
    whereMoneyGoesItems: [
      { label: "Voice-Over / Casting / Vertonungstests" },
      { label: "Soundassets und Atmosphäre" },
      { label: "3D-Assets, Texturen und Umgebungen" },
      { label: "Trailer und Präsentationsmaterialien" },
      { label: "Steam / technische Kosten" },
      { label: "Gebühren, Steuern und Reserve" }
    ],
    whatExistsTitle: "Was bereits existiert",
    whatExistsItems: [
      "Story-Bibel",
      "Kern-Spielkonzept",
      "Kapitel- und Endingsplan",
      "Projektwebsite",
      "Visuelle Richtung",
      "In Arbeit befindliche Hausumgebung",
      "Mechanik-Prototyping",
      "Steam-Präsentationsvorbereitung",
      "Galerie und erste Präsentationsmaterialien"
    ],
    fairWarning: "Shadowless ist ein Spiel in Entwicklung. Deine Unterstützung hilft, seine weitere Entwicklung zu finanzieren. Digitale Belohnungen werden schrittweise je nach Entwicklungsfortschritt geliefert. Zeitpläne können sich je nach Umfang, Budget und technischen Anforderungen des Spiels ändern. Wenn sich Umfang oder Plan wesentlich ändert, werden Unterstützer über die Website und per E-Mail informiert.",
    stretchGoalsTitle: "Meilensteine",
    stretchGoals: [
      { amount: 2275, title: "Erste Stimme der Schatten", description: "Casting, englischer Voice-Over-Test, Audioleitung und erste öffentliche Präsentation." },
      { amount: 9450, title: "Spielbares Demo", description: "Erster spielbarer Vertical Slice, der die Kernatmosphäre und Mechaniken zeigt." },
      { amount: 22750, title: "Englische Vertonung für Demo", description: "Professionelle englische Sprecher für das spielbare Demo — erste Charaktere werden lebendig." },
      { amount: 45500, title: "Steam + Öffentliches Demo", description: "Steam-Seiten-Launch, Veröffentlichung des öffentlichen Demos, erste breite Präsentation von Shadowless." },
      { amount: 91000, title: "Erweiterte englische Produktion", description: "Erweiterung der englischen Vertonung und Audioproduktion auf mehr Teile des Spiels." },
      { amount: 182000, title: "Professionelle tschechische Vertonung", description: "Professionelle tschechische Synchronisation — das Spiel ist vollständig auf Tschechisch spielbar." },
      { amount: 364000, title: "Tschechische Synchronisation mit bekannten Stimmen", description: "Höheres Budget ermöglicht es, bekannte tschechische Schauspieler und Sprecher anzusprechen. Keine spezifischen Namen werden garantiert, bis Verträge unterzeichnet sind." }
    ],
    cta: "Projekt unterstützen",
    supporters: {
      title: "Beiträge der Unterstützer",
      toggleOpen: "Unterstützer anzeigen",
      toggleClose: "Unterstützer verbergen",
      loading: "Unterstützer werden geladen...",
      error: "Unterstützer konnten gerade nicht geladen werden.",
      empty: "Noch keine Unterstützer verzeichnet. Sei die Erste.",
      tableHeaders: {
        name: "Name",
        amount: "Gesamtbeitrag"
      }
    },
    modal: {
      title: "Unterstützung wählen",
      recommendedLabel: "Empfohlen",
      stepTitles: {
        tier: "Stufe wählen",
        details: "Deine Angaben",
        card: "Zahlungsmethode",
        review: "Prüfen & Bestätigen"
      },
      stepDescriptions: {
        tier: "Wähle die Stufe, die zu deiner Unterstützung passt.",
        details: "Sag uns, wohin wir deine Belohnungen schicken sollen.",
        card: "Gib deine Kartendaten im sicheren Stripe-Formular ein.",
        review: "Überprüfe alles, bevor du deinen Beitrag abschließt."
      },
      payBtn: "Unterstützung abschließen",
      continueBtn: "Weiter",
      reviewBtn: "Zur Zusammenfassung",
      processing: "Wird verarbeitet...",
      successTitle: "Unterstützung erhalten",
      successMsg: "Danke. Bestätigung per E-Mail erhalten.",
      closeBtn: "Schließen",
      backToTiers: "Zurück zur Auswahl",
      backToDetails: "Angaben bearbeiten",
      editDetails: "Angaben ändern",
      editPayment: "Zahlungsmethode ändern",
      selectedTier: "Gewählte Stufe",
      testCardNotice: "Verwende die Stripe-Testkarte 4242 4242 4242 4242 mit beliebigem zukünftigen Ablaufdatum, CVC 123 und PLZ 12345.",
      firstNameLabel: "Vorname",
      lastNameLabel: "Nachname",
      emailLabel: "E-Mail",
      notesLabel: "Zusätzliche Hinweise",
      notesOptionalHint: "Optional.",
      summaryHeading: "Letzte Prüfung",
      summaryContact: "Kontakt",
      summaryNotes: "Hinweise",
      summaryAmount: "Gesamt",
      notesEmpty: "Keine zusätzlichen Hinweise.",
      consentTerms: "Ich habe die Allgemeinen Geschäftsbedingungen gelesen und stimme zu.",
      consentPrivacy: "Ich habe die Datenschutzerklärung gelesen und stimme zu.",
      consentGameDev: "Ich verstehe, dass Shadowless ein Spiel in Entwicklung ist und digitale Belohnungen schrittweise je nach Entwicklungsfortschritt geliefert werden.",
      consentRequired: "Bitte bestätige alle Zustimmungen, um deinen Beitrag abzuschließen.",
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
          name: "Symbolische Unterstützung",
          price: 5,
          currency: " €",
          rewards: ["Digitaler Dank", "Name auf der Unterstützer-Seite der Website"],
          limit: TIER_LIMITS["tier1"] ?? undefined,
          sold: 0
        },
        {
          id: "tier2",
          name: "Name in den Credits",
          price: 11,
          currency: " €",
          rewards: ["Alle vorherigen Belohnungen", "Dein Name in den Spielcredits — Unterstützer-Sektion"],
          limit: TIER_LIMITS["tier2"] ?? undefined,
          sold: 0
        },
        {
          id: "tier3",
          name: "Digitale Spielkopie",
          price: 17,
          currency: " €",
          rewards: ["Alle vorherigen Belohnungen", "Digitale Kopie von Shadowless nach der Veröffentlichung. Bevorzugte Plattform ist Steam — die genaue Liefermethode wird gemäß den Regeln der Distributionsplattform zum Zeitpunkt der Veröffentlichung bestätigt."],
          limit: TIER_LIMITS["tier3"] ?? undefined,
          sold: 0
        },
        {
          id: "tier4",
          name: "Founder Pack",
          price: 28,
          currency: " €",
          rewards: ["Digitale Spielkopie", "Digitaler Soundtrack", "Wallpaper-Paket", "Name auf der Unterstützer-Seite"],
          limit: TIER_LIMITS["tier4"] ?? undefined,
          sold: 0
        },
        {
          id: "tier5",
          name: "Wahrheitssucher",
          price: 51,
          currency: " €",
          rewards: ["Alle vorherigen Belohnungen", "Digitales Artbook", "Lore-PDF-Dokument", "Name in den Spielcredits"],
          recommended: true,
          limit: TIER_LIMITS["tier5"] ?? undefined,
          sold: 0
        },
        {
          id: "tier6",
          name: "Archivar",
          price: 85,
          currency: " €",
          rewards: ["Alle vorherigen Belohnungen", "Zugang zu Entwicklungs-Updates und Behind-the-Scenes-Materialien", "Zugang zur geschlossenen Community (bei Launch)"],
          limit: TIER_LIMITS["tier6"] ?? undefined,
          sold: 0
        },
        {
          id: "tier7",
          name: "Entwicklungs-Patron",
          price: 170,
          currency: " €",
          rewards: ["Alle vorherigen Belohnungen", "Zugang zu einem Test-Build, wenn verfügbar — Zeitplan abhängig vom Entwicklungsfortschritt", "Hervorgehobener Dank in den Credits und auf der Website"],
          limit: TIER_LIMITS["tier7"] ?? undefined,
          sold: 0
        },
        {
          id: "tier8",
          name: "Stimmen-Patron",
          price: 340,
          currency: " €",
          rewards: ["Alle vorherigen Belohnungen", "Besonderer Dank in der Sektion 'Voice & Audio Supporters'"],
          limit: TIER_LIMITS["tier8"] ?? undefined,
          sold: 0
        },
        {
          id: "tier9",
          name: "Produktions-Patron",
          price: 680,
          currency: " €",
          rewards: ["Besonderer Dank als bedeutender Produktionsunterstützer", "Prominenter Dank auf der Website und in den Spielcredits"],
          limit: TIER_LIMITS["tier9"] ?? undefined,
          sold: 0
        }
      ]
    }
  },
  thankYou: {
    title: "Danke",
    subtitle: "Dein Beitrag wurde empfangen.",
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
    lastUpdatedValue: "27. Juni 2026",
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
          "Du verpflichtest dich, korrekte Kontaktdaten bereitzustellen und zeitnah zu aktualisieren, damit der Schöpfer gesetzliche Mitteilungen versenden und Belohnungen zustellen kann."
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
          "Jede Unterstützerstufe beschreibt vorgesehene digitale Belohnungen. Alle Belohnungen werden digital und elektronisch geliefert — es sind keine physischen Güter mit einer Stufe verbunden.",
          "Die angegebenen Lieferzeiten sind Schätzungen. Produktionszwänge können Anpassungen erforderlich machen; der Schöpfer informiert per E-Mail über Änderungen.",
          "Sollte eine bestimmte Belohnung nicht umsetzbar sein, stellt der Schöpfer eine angemessene digitale Alternative gleichen oder höheren Wertes bereit. Rückerstattungen werden nicht gewährt."
        ]
      },
      {
        id: "changes",
        heading: "5. Projektänderungen und Zeitpläne",
        paragraphs: [
          "Der Schöpfer darf Umfang, Funktionen oder Meilensteine anpassen, um auf technische, rechtliche oder finanzielle Rahmenbedingungen zu reagieren und die Qualität von Shadowless zu sichern.",
          "Bei wesentlichen Verzögerungen oder Umfangsänderungen informiert der Schöpfer die Unterstützer über die Website und per E-Mail und stellt einen aktualisierten Erfüllungsplan zur Verfügung. Dein Anspruch auf die Belohnungen deiner Stufe bleibt unabhängig vom Endbetrag bestehen."
        ]
      },
      {
        id: "data",
        heading: "6. Kommunikation und Datenschutz",
        paragraphs: [
          "Der Schöpfer verwendet deine personenbezogenen Daten ausschließlich zur Verwaltung der Beiträge, zur Erfüllung gesetzlicher Pflichten, zur Lieferung der Belohnungen und zur Kampagnenkommunikation. Eine Weitergabe an Dritte findet nicht statt.",
          "Du kannst dich jederzeit von nicht zwingenden Benachrichtigungen abmelden. Transaktions- und Erfüllungsnachrichten werden jedoch weiterhin versendet, solange dein Beitrag offen ist.",
          "Vollständige Informationen zur Datenverarbeitung findest du in unserer Datenschutzerklärung."
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
    pledgeReminderBody: "Alle Beiträge für die Shadowless-Kampagne gelten als nicht erstattungsfähige Zuwendungen, es sei denn, zwingendes Verbraucherrecht sieht etwas anderes vor. Digitale Belohnungen werden schrittweise je nach Entwicklungsfortschritt geliefert. Bei wesentlichen Änderungen des Umfangs oder Plans werden Unterstützer über die Website und per E-Mail informiert.",
    contactHeading: "Kontakt",
    contactBusinessLabel: "Betreiber",
    contactBusinessValue: "Petr Vurm, Einzelunternehmer (Tschechische Republik)",
    contactBusinessIdLabel: "Unternehmens-ID (IČ)",
    contactBusinessIdValue: "21180164",
    contactEmailLabel: "Kontakt-E-Mail",
    contactEmail: "kontakt@petrvurm.cz",
    backLinkLabel: "Zurück zur Startseite"
  },
  privacy: {
    title: "Datenschutzerklärung",
    lastUpdatedLabel: "Zuletzt aktualisiert",
    lastUpdatedValue: "27. Juni 2026",
    intro: "Diese Datenschutzerklärung erläutert, wie Petr Vurm (\"der Schöpfer\") personenbezogene Daten im Rahmen der Shadowless-Crowdfunding-Kampagne auf shadowlessthegame.eu erhebt, verwendet und schützt.",
    sections: [
      {
        id: "controller",
        heading: "1. Verantwortlicher",
        paragraphs: [
          "Verantwortlicher ist Petr Vurm, Einzelunternehmer, Tschechische Republik, IČ 21180164. Kontakt: kontakt@petrvurm.cz."
        ]
      },
      {
        id: "data-collected",
        heading: "2. Welche Daten wir erheben",
        paragraphs: [
          "Bei einem Beitrag erheben wir: Vorname, Nachname, E-Mail-Adresse, optionale Hinweise, Zahlungsreferenz (Stripe Payment Intent ID), Beitragsbetrag, gewählte Stufe und Datum des Beitrags.",
          "Vollständige Kartennummern oder Zahlungsdaten speichern wir nicht — diese werden ausschließlich von Stripe (stripe.com) verarbeitet. Details zur Datenverarbeitung durch Stripe findest du in deren Datenschutzrichtlinie."
        ]
      },
      {
        id: "purpose",
        heading: "3. Zweck und Rechtsgrundlage",
        paragraphs: [
          "Wir verarbeiten deine personenbezogenen Daten für folgende Zwecke:",
        ],
        bullets: [
          "Verwaltung deines Beitrags und Lieferung digitaler Belohnungen — Rechtsgrundlage: Vertragserfüllung.",
          "Versand von Bestellbestätigungen und Kampagnen-Updates — Rechtsgrundlage: berechtigtes Interesse / Einwilligung.",
          "Erfüllung gesetzlicher und buchhalterischer Pflichten — Rechtsgrundlage: gesetzliche Verpflichtung.",
          "Pflege der öffentlichen Unterstützerliste (Vorname, Nachname, Betrag) — Rechtsgrundlage: berechtigtes Interesse. Löschung kann jederzeit beantragt werden."
        ]
      },
      {
        id: "retention",
        heading: "4. Aufbewahrungsdauer",
        paragraphs: [
          "Beitragsdaten werden für den nach tschechischem Buchhalterrecht erforderlichen Zeitraum aufbewahrt (in der Regel 10 Jahre). Kontaktdaten werden aufbewahrt, bis Belohnungen erfüllt und die Daten für rechtliche Zwecke nicht mehr benötigt werden.",
          "Du kannst jederzeit die Löschung deiner personenbezogenen Daten beantragen, vorbehaltlich gesetzlicher Aufbewahrungspflichten."
        ]
      },
      {
        id: "rights",
        heading: "5. Deine Rechte",
        paragraphs: [
          "Gemäß DSGVO und anwendbarem tschechischen Recht hast du das Recht auf: Auskunft über deine Daten, Berichtigung unrichtiger Daten, Löschung (Recht auf Vergessenwerden), Einschränkung der Verarbeitung und Widerspruch gegen die Verarbeitung.",
          "Um eines dieser Rechte auszuüben, kontaktiere uns bitte unter kontakt@petrvurm.cz. Wir antworten innerhalb von 30 Tagen."
        ]
      },
      {
        id: "third-parties",
        heading: "6. Dritte",
        paragraphs: [
          "Wir geben deine Daten ausschließlich an folgende Dienstleister weiter, um die Kampagne zu betreiben:",
        ],
        bullets: [
          "Stripe, Inc. — Zahlungsabwicklung.",
          "Resend / E-Mail-Dienstleister — Versand von Bestellbestätigungen.",
          "Supabase / Datenbankhost — Speicherung von Beitragsdaten."
        ]
      },
      {
        id: "security",
        heading: "7. Sicherheit",
        paragraphs: [
          "Wir treffen angemessene technische und organisatorische Maßnahmen zum Schutz deiner personenbezogenen Daten. Alle Zahlungsdaten werden ausschließlich über die PCI-DSS-konforme Infrastruktur von Stripe verarbeitet.",
          "Im Falle eines Datenschutzvorfalls, der deine Rechte gefährdet, werden wir die zuständige Aufsichtsbehörde und betroffene Personen gemäß gesetzlichen Anforderungen informieren."
        ]
      }
    ],
    contactHeading: "Kontakt",
    contactEmail: "kontakt@petrvurm.cz",
    backLinkLabel: "Zurück zur Startseite"
  },
  footer: {
    rights: "Alle Rechte vorbehalten.",
    madeIn: "Geschmiedet im dunklen Herzen der Tschechischen Republik.",
    quote: "\"Licht ist nur eine vorübergehende Illusion.\"",
    termsLink: "AGB",
    privacyLink: "Datenschutz"
  }
};
