import type { Language } from "@/types";

const SYMBOL_AND_LANGUAGE_BY_CODE: Record<string, { symbol: string; lang: Language }> = {
  USD: { symbol: "$", lang: "en" },
  CZK: { symbol: " Kč", lang: "cs" },
  EUR: { symbol: " €", lang: "de" },
};

const LOCALE_BY_LANGUAGE: Record<Language, string> = {
  en: "en-US",
  cs: "cs-CZ",
  de: "de-DE",
};

export function formatAmountForLanguage(value: number, symbol: string, lang: Language): string {
  const locale = LOCALE_BY_LANGUAGE[lang] ?? "en-US";
  const formatted = Number.isFinite(value) ? value.toLocaleString(locale) : "0";
  const trimmedSymbol = symbol.trim();
  const symbolHasLeadingSpace = symbol.startsWith(" ");

  if (lang === "en") {
    return `${trimmedSymbol} ${formatted}`;
  }

  if (symbolHasLeadingSpace) {
    return `${formatted} ${symbol}`;
  }

  return `${formatted} ${trimmedSymbol}`;
}

export function formatAmountFromCurrencyCode(
  value: number,
  currencyCode?: string | null,
  fallbackSymbol = "$",
  fallbackLang: Language = "en",
): string {
  if (!Number.isFinite(value)) {
    return formatAmountForLanguage(0, fallbackSymbol, fallbackLang);
  }

  const entry = currencyCode ? SYMBOL_AND_LANGUAGE_BY_CODE[currencyCode.toUpperCase()] : undefined;

  if (entry) {
    return formatAmountForLanguage(value, entry.symbol, entry.lang);
  }

  const inferredLang: Language = ((): Language => {
    if (fallbackSymbol.includes("Kč")) return "cs";
    if (fallbackSymbol.includes("€")) return "de";
    return fallbackLang;
  })();

  return formatAmountForLanguage(value, fallbackSymbol, inferredLang);
}
