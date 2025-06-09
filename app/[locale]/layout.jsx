import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from 'next/navigation';
import { routing } from "@/i18n/routing";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Software Solution RM | Soluciones Tecnológicas Personalizadas",
  description: "Digitalizamos tu empresa con software a medida. Soluciones inteligentes para impulsar tu crecimiento empresarial.",
  keywords: "software a medida, desarrollo web, aplicaciones móviles, digitalización empresarial",
};

export default async function RootLayout({ 
  children, 
  params 
}) {
  const { locale } = await params;
  if(!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <NextIntlClientProvider messages={messages}>
          {/* <Header /> */}
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
