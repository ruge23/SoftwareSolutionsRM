// lib/i18n-config.ts
export const locales = ['en', 'es'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'en';
export const localePrefix = 'always'; // o 'as-needed'

// Función de validación reusable
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}