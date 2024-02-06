import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "@navigation/locales";

export default getRequestConfig(async ({ locale }) => {
  const baseLocale = new Intl.Locale(locale).baseName;
  if (!locales.includes(baseLocale)) notFound();

  return {
    messages: (await import(`../src/messages/${locale}.json`)).default,
  };
});
