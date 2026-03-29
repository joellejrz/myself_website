import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://myself-official.com"),
  title: "Mysélf | Offizielle Website",
  description:
    "Die Stimme einer neuen Ära. Entdecke die offizielle Website von Mysélf: Exklusive Musik-Releases, limitierte Shop-Drops und Tour-Dates.",
  keywords: ["Mysélf", "Musik", "Fuego En El Aire", "Offizielle Website", "Tour", "Künstler"],
  openGraph: {
    title: "Mysélf | Offizielle Website",
    description:
      "Die Stimme einer neuen Ära. Entdecke die offizielle Website von Mysélf: Exklusive Musik-Releases, limitierte Shop-Drops und Tour-Dates.",
    url: "https://myself-official.com",
    siteName: "Mysélf Official",
    images: [
      {
        url: "/fuegoenelairecover.png",
        width: 1200,
        height: 1200,
        alt: "Mysélf - Offizielle Website",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mysélf | Offizielle Website",
    description:
      "Die Stimme einer neuen Ära. Entdecke die offizielle Website von Mysélf: Exklusive Musik-Releases, limitierte Shop-Drops und Tour-Dates.",
    images: ["/fuegoenelairecover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <CookieConsent />
        <CustomCursor />
      </body>
    </html>
  );
}
