import { Nunito } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

const siteUrl = "https://www.sfrsolicitors.co.uk";
const title = "Law Firm & Solicitors | Legal Advice, Injury, CICA & Immigration";
const description =
  "Professional legal advice and representation for disputes, personal injury and accident claims, CICA claims and immigration matters. Speak to our legal team today.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "SFR Solicitors",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.variable}>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

