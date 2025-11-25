import type { Language } from "@/types";

export const SUPPORTED_LANGUAGES: Language[] = ["en", "cs", "de"];
export const DEFAULT_LANGUAGE: Language = "en";

interface LanguagePreference {
  tag: string;
  quality: number;
}

function parseAcceptLanguage(header: string): LanguagePreference[] {
  return header
    .split(",")
    .map((entry) => {
      const [tagPart, ...rest] = entry.trim().split(";");
      let quality = 1;

      rest.forEach((param) => {
        const trimmed = param.trim();
        if (trimmed.startsWith("q=")) {
          const value = Number.parseFloat(trimmed.slice(2));
          if (!Number.isNaN(value)) {
            quality = value;
          }
        }
      });

      return {
        tag: tagPart.toLowerCase(),
        quality,
      };
    })
    .filter((item) => item.tag.length > 0)
    .sort((a, b) => b.quality - a.quality);
}

export function resolveLanguage(acceptLanguageHeader: string | null | undefined): Language {
  if (!acceptLanguageHeader) {
    return DEFAULT_LANGUAGE;
  }

  const preferences = parseAcceptLanguage(acceptLanguageHeader);

  for (const preference of preferences) {
    if (SUPPORTED_LANGUAGES.includes(preference.tag as Language)) {
      return preference.tag as Language;
    }
  }

  for (const preference of preferences) {
    const base = preference.tag.split("-")[0] as Language;
    if (SUPPORTED_LANGUAGES.includes(base)) {
      return base;
    }
  }

  return DEFAULT_LANGUAGE;
}
