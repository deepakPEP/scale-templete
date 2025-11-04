import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/tailwind.css";
import "@/styles/main.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/ctaBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ScaleTemplate - Building the Future",
  description: "Building the future with innovative solutions and cutting-edge technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <CTABanner />
        <Footer />
      </body>
    </html>
  );
}
