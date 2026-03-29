import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Mysélf — Musik, die bewegt",
  description:
    "Offizielle Website von Mysélf. Newcomer-Sängerin aus Deutschland. Entdecke Musik, Tour-Dates, Merch und mehr.",
  keywords: ["Mysélf", "Sängerin", "Musik", "Newcomer", "Deutsch", "Tour"],
  openGraph: {
    title: "Mysélf — Musik, die bewegt",
    description:
      "Offizielle Website von Mysélf. Newcomer-Sängerin aus Deutschland.",
    type: "website",
    locale: "de_DE",
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
