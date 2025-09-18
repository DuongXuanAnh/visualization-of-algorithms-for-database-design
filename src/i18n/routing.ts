import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "cs"],
  localePrefix: "as-needed",
  defaultLocale: "en",
});

export type Locale = (typeof routing.locales)[number];
