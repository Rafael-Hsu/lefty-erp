import type { Metadata } from "next";
import { Noto_Sans_TC, Space_Grotesk } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_TC({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lefty-erp.com"),
  title: "左撇子整合行銷｜為你的好生意，打造一套好系統",
  description: "從商業策略出發，整合流程、資料與行銷，為企業打造真正好用的 ERP、CRM、會員平台與數位系統。",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "讓好生意，長出一套好系統。",
    description: "左撇子整合行銷｜策略、設計、開發、整合",
    url: "https://lefty-erp.com",
    siteName: "左撇子整合行銷",
    locale: "zh_TW",
    type: "website",
    images: [{ url: "/og.png", width: 1732, height: 909, alt: "左撇子整合行銷｜讓好生意，長出一套好系統。" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://lefty-erp.com/#organization",
  name: "左撇子整合行銷",
  alternateName: "LEFTY",
  url: "https://lefty-erp.com/",
  email: "info@lefthandedmkt.com",
  description: "從商業策略出發，協助企業規劃 ERP、CRM、進銷存、會員平台、行銷自動化與系統整合。",
  areaServed: { "@type": "Country", name: "Taiwan" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://lefty-erp.com/#website",
  url: "https://lefty-erp.com/",
  name: "左撇子整合行銷｜數位系統服務",
  inLanguage: "zh-Hant",
  publisher: { "@id": "https://lefty-erp.com/#organization" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body className={`${noto.variable} ${space.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        {children}
      </body>
    </html>
  );
}
