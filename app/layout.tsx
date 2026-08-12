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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body className={`${noto.variable} ${space.variable}`}>{children}</body>
    </html>
  );
}
