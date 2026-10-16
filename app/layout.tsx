import type { Metadata } from "next";
import { Bricolage_Grotesque, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
});

export const metadata: Metadata = {
  title: "Jyon — Shopify, Klaviyo & Automation",
  description:
    "Portfolio of Jyon: Shopify, Klaviyo, email and funnel marketing, Make automations, Notion systems and design.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${bricolage.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
