import type { Metadata } from "next";
import { Inter, Passero_One } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SessionProvider } from "next-auth/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const passero = Passero_One({
  variable: "--font-passero",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asshnora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${passero.variable} antialiased inter`}>
        <SessionProvider><div className="min-h-screen w-full bg-[#f5f5dc] relative">
          {/*  Warm Beige Texture  */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(120,119,198,0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255,255,255,0.5) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(120,119,198,0.1) 0%, transparent 50%)`,
            }}
          />
          {/* Content */}
          <main className="">
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
          </main>
        </div></SessionProvider>
      </body>
    </html>
  );
}
