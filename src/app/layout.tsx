import "@/styles/globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { siteConfig } from "@/config/site";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollUp } from "@/components/scroll-up";

const fontSans = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ["Portfolio", "CV", "resume", "Personal Site"],
  authors: [
    {
      name: "Chuluq",
    },
  ],
  creator: "Chuluq",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fontSans.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollUp />
      </body>
    </html>
  );
}
