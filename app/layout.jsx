import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        {/* <Header /> */}
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
