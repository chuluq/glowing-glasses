import "@/styles/globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollUp } from "@/components/scroll-up";

const fontSans = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
