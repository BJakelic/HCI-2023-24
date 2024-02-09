import type { Metadata } from "next";
import { Roboto, Roboto_Condensed, Playfair_Display } from "next/font/google";
import clsx from "clsx";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Logo } from "@/components/Logo";
import Link from "next/link";
import "./globals.css";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const roboto_condensed = Roboto_Condensed({
  weight: ["300", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});
const playfairDisplay = Playfair_Display({
  weight: ["400", "800"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    template: "SpecsChecks | %s",
    default: "SpecsChecks",
  },
  description: "Next.js lab project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          roboto.variable,
          roboto_condensed.variable,
          playfairDisplay.variable
        )}
      >
        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}