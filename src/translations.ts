import type { Content, Language } from "@/types";

import { csContent } from "@/translations/cs";
import { deContent } from "@/translations/de";
import { enContent } from "@/translations/en";

export const TRANSLATIONS: Record<Language, Content> = {
  en: enContent,
  cs: csContent,
  de: deContent
};