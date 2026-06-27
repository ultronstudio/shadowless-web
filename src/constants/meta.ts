import type { Language } from "@/types";
// get site_url from actual host
const host = process.env.NEXT_PUBLIC_SITE_URL;
export const SITE_URL = host ? host.replace(/\/+$/, "") : "https://shadowlessthegame.eu";
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
      "Shadowless is an independent Czech psychological horror game in development. Support the campaign directly or via Startovač, explore the story, and help bring the voice-over and playable demo to life.",
    keywords: [
      "Shadowless", "psychological horror", "indie game", "crowdfunding",
      "voice-over", "Steam", "playable demo", "Petr Vurm", "Czech horror"
    ],
    locale: "en_US",
    openGraphAlt: "Shadowless — Czech psychological horror in development",
  },
  cs: {
    siteTitle: "Shadowless",
    description:
      "Shadowless je nezávislý český psychologický horor ve vývoji. Podpořte projekt přímo na webu nebo přes Startovač a pomozte financovat anglický voice-over, zvukový design a hratelnou ukázku.",
    keywords: [
      "Shadowless", "psychologický horor", "indie hra", "crowdfunding",
      "voice-over", "dabing", "Steam", "hratelná ukázka", "Petr Vurm"
    ],
    locale: "cs_CZ",
    openGraphAlt: "Shadowless — český psychologický horor ve vývoji",
  },
  de: {
    siteTitle: "Shadowless",
    description:
      "Shadowless ist ein unabhängiges tschechisches Psycho-Horror-Spiel in Entwicklung. Unterstütze das Projekt direkt oder über Startovač und hilf, die englische Vertonung und ein spielbares Demo zu finanzieren.",
    keywords: [
      "Shadowless", "psychologischer Horror", "Indie-Spiel", "Crowdfunding",
      "Vertonung", "Steam", "spielbares Demo", "Petr Vurm", "tschechischer Horror"
    ],
    locale: "de_DE",
    openGraphAlt: "Shadowless — tschechischer Psycho-Horror in Entwicklung",
  },
};

export const PAGE_META: Record<"home" | "terms" | "thankYou" | "privacy", Record<Language, PageMeta>> = {
  home: {
    en: {
      title: "Shadowless — Czech Psychological Horror",
      description:
        "Support the first production phase of Shadowless: English voice-over, sound design, a playable demo, and Steam preparation. This is the official crowdfunding page for the independent solo project.",
    },
    cs: {
      title: "Shadowless — Český psychologický horor",
      description:
        "Podpořte první produkční fázi Shadowless: anglický voice-over, zvuk, hratelnou ukázku a přípravu na Steam. Vlastní web je hlavní místo podpory tohoto nezávislého solo projektu.",
    },
    de: {
      title: "Shadowless — Tschechischer psychologischer Horror",
      description:
        "Unterstütze die erste Produktionsphase von Shadowless: englische Vertonung, Sound, ein spielbares Demo und Steam-Vorbereitung. Die offizielle Crowdfunding-Seite des unabhängigen Solo-Projekts.",
    },
  },
  terms: {
    en: {
      title: "Terms & Conditions — Shadowless",
      description:
        "Read the Shadowless crowdfunding terms covering non-refundable pledges, digital reward fulfilment, and contact details for creator Petr Vurm (IČ 21180164).",
    },
    cs: {
      title: "Všeobecné obchodní podmínky — Shadowless",
      description:
        "Přečtěte si obchodní podmínky kampaně Shadowless – nevratnost příspěvků, dodání digitálních odměn a kontaktní údaje na Petra Vurma (IČ 21180164).",
    },
    de: {
      title: "AGB — Shadowless",
      description:
        "Lies die Shadowless-Kampagnenbedingungen – nicht erstattbare Beiträge, digitale Belohnungserfüllung und Kontaktdaten von Petr Vurm (IČ 21180164).",
    },
  },
  thankYou: {
    en: {
      title: "Thank You — Shadowless",
      description:
        "Your Shadowless support has been recorded. Review your pledge details and return to the campaign whenever you are ready.",
    },
    cs: {
      title: "Poděkování — Shadowless",
      description:
        "Váš příspěvek pro Shadowless byl zaznamenán. Podívejte se na detaily odměny a kdykoli se vraťte zpět na web.",
    },
    de: {
      title: "Danke — Shadowless",
      description:
        "Deine Unterstützung für Shadowless wurde erfasst. Prüfe deine Belohnung und kehre jederzeit zur Kampagne zurück.",
    },
  },
  privacy: {
    en: {
      title: "Privacy Policy — Shadowless",
      description:
        "Read the Shadowless privacy policy covering personal data processing, your rights, and contact details for creator Petr Vurm.",
    },
    cs: {
      title: "Zásady zpracování osobních údajů — Shadowless",
      description:
        "Přečtěte si zásady zpracování osobních údajů kampaně Shadowless – účel zpracování, vaše práva a kontakt na Petra Vurma.",
    },
    de: {
      title: "Datenschutzerklärung — Shadowless",
      description:
        "Lies die Datenschutzerklärung der Shadowless-Kampagne – Verarbeitungszwecke, deine Rechte und Kontaktdaten von Petr Vurm.",
    },
  },
};
