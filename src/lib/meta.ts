import type { Metadata } from "next";
import { BASE_META, OG_IMAGE, PAGE_META, SITE_URL } from "@/constants/meta";
import type { Language } from "@/types";

type PageKey = keyof typeof PAGE_META;

interface BuildMetadataOptions {
  absoluteTitle?: boolean;
}

export function buildPageMetadata(
  lang: Language,
  page: PageKey,
  options: BuildMetadataOptions = {},
): Metadata {
  const base = BASE_META[lang];
  const pageMeta = PAGE_META[page][lang];

  const titleField = options.absoluteTitle ? { absolute: pageMeta.title } : pageMeta.title;

  return {
    title: titleField,
    description: pageMeta.description,
    keywords: base.keywords,
    openGraph: {
      title: pageMeta.title,
      description: pageMeta.description,
      url: SITE_URL,
      siteName: base.siteTitle,
      images: [
        {
          url: OG_IMAGE,
          width: 1024,
          height: 1024,
          alt: base.openGraphAlt,
        },
      ],
      locale: base.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageMeta.title,
      description: pageMeta.description,
      images: [OG_IMAGE],
    },
  };
}

export function buildBaseMetadata(lang: Language): Metadata {
  const base = BASE_META[lang];

  return {
    title: {
      default: base.siteTitle,
      template: `%s | ${base.siteTitle}`,
    },
    description: base.description,
    keywords: base.keywords,
    openGraph: {
      title: base.siteTitle,
      description: base.description,
      url: SITE_URL,
      siteName: base.siteTitle,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: base.openGraphAlt,
        },
      ],
      locale: base.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: base.siteTitle,
      description: base.description,
      images: [OG_IMAGE],
    },
    icons: {
      icon: "/assets/img/icon.png",
    },
  };
}
