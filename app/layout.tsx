import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
  variable: "--font-kanit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Larynx AI — AI Sales System for US Businesses",
  description: "Larynx AI builds custom AI voice agents, WhatsApp automation, and email follow-up systems for US businesses. Never miss a lead again.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={kanit.variable} style={{ overflowX: "hidden" }}>
      <body style={{ overflowX: "hidden", maxWidth: "100vw", backgroundColor: "#0C0C0C", fontFamily: "var(--font-kanit), Kanit, sans-serif" }}
        className="text-[#D7E2EA]">
        <Navbar />
        <main style={{ overflowX: "hidden" }}>{children}</main>
      </body>
    </html>
  );
}
