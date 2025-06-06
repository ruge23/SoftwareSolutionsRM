import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'es'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  try {
    return {
      messages: (await import(`../../public/locales/${locale}/common.json`)).default,
      timeZone: 'America/Argentina_Buenos_Aires'
    };
  } catch (error) {
    console.error('Error loading translations:', error);
    notFound();
  }
});