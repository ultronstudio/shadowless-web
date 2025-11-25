import type { Language } from "@/types";

export const SITE_URL = "https://shadowless.game";
export const OG_IMAGE = "/assets/img/cover.png";

interface BaseMeta {
  siteTitle: string;
  description: string;
  keywords: string[];
  locale: string;
  openGraphAlt: string;
}

interface PageMeta {
  title: string;
  description: string;
}

export const BASE_META: Record<Language, BaseMeta> = {
  en: {
    siteTitle: "Shadowless",
    description:
      "Shadowless is a psychological horror video game in development. Join the crowdfunding campaign, explore the story, and unlock exclusive backer rewards.",
    keywords: ["Shadowless", "psychological horror", "indie game", "crowdfunding", "Petr Vurm"],
    locale: "en_US",
    openGraphAlt: "Shadowless crowdfunding cover art",
  },
  cs: {
    siteTitle: "Shadowless",
    description:
      "Shadowless je psychologický hororový projekt ve vývoji. Podpořte crowdfunding, prozkoumejte příběh a odemkněte odměny pro přispěvatele.",
    keywords: ["Shadowless", "psychologický horor", "indie hra", "crowdfunding", "Petr Vurm"],
    locale: "cs_CZ",
    openGraphAlt: "Shadowless crowdfunding grafika",
  },
  de: {
    siteTitle: "Shadowless",
    description:
      "Shadowless ist ein psychologisches Horror-Indie-Spiel in Entwicklung. Unterstütze die Crowdfunding-Kampagne, entdecke die Geschichte und sichere dir Belohnungen.",
    keywords: ["Shadowless", "psychologischer Horror", "Indie-Spiel", "Crowdfunding", "Petr Vurm"],
    locale: "de_DE",
    openGraphAlt: "Shadowless Crowdfunding Artwork",
  },
};

export const PAGE_META: Record<"home" | "terms" | "thankYou", Record<Language, PageMeta>> = {
  home: {
    en: {
      title: "Shadowless",
      description:
        "Experience the Shadowless crowdfunding campaign: discover the lore, select a tier, and help bring the psychological horror vision to life.",
    },
    cs: {
      title: "Shadowless",
      description:
        "Poznejte crowdfunding Shadowless: ponořte se do lore, vyberte si úroveň příspěvku a pomozte oživit psychologický horor.",
    },
    de: {
      title: "Shadowless",
      description:
        "Erlebe die Shadowless-Crowdfunding-Kampagne: tauche in die Geschichte ein, wähle deine Unterstützerstufe und hilf, den psychologischen Horror zu verwirklichen.",
    },
  },
  terms: {
    en: {
      title: "Terms & Conditions",
      description:
        "Read the Shadowless crowdfunding terms covering non-refundable pledges, reward fulfilment obligations, and contact details for creator Petr Vurm (ID 21180164).",
    },
    cs: {
      title: "Všeobecné obchodní podmínky",
      description:
        "Přečtěte si obchodní podmínky kampaně Shadowless – nevratnost příspěvků, dodání odměn a kontaktní údaje na Petra Vurma (IČ 21180164).",
    },
    de: {
      title: "Allgemeine Geschäftsbedingungen",
      description:
        "Lies die Geschäftsbedingungen der Shadowless-Kampagne – nicht rückerstattbare Beiträge, Belohnungserfüllung und Kontaktdaten von Petr Vurm (ID 21180164).",
    },
  },
  thankYou: {
    en: {
      title: "Thank You",
      description:
        "Your Shadowless support has been recorded. Review your pledge details and return to the campaign whenever you are ready to explore more.",
    },
    cs: {
      title: "Poděkování",
      description:
        "Váš příspěvek pro Shadowless byl zaznamenán. Podívejte se na detaily odměny a kdykoli se vraťte zpět do kampaně.",
    },
    de: {
      title: "Danke",
      description:
        "Deine Unterstützung für Shadowless wurde erfasst. Prüfe deine Belohnung und kehre jederzeit zur Kampagne zurück.",
    },
  },
};
