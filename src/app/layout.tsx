import type { Metadata } from "next";
import { Inter, Passero_One } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <body className={`${inter.variable} ${passero.variable} antialiased`}>
        <div className="min-h-screen w-full bg-black relative">
          {/* Cosmic Nebula */}
          <div
            className="absolute inset-0 "
            style={{
              background: `
       radial-gradient(ellipse 110% 70% at 25% 80%, rgba(147, 51, 234, 0.12), transparent 55%),
       radial-gradient(ellipse 130% 60% at 75% 15%, rgba(59, 130, 246, 0.10), transparent 65%),
       radial-gradient(ellipse 80% 90% at 20% 30%, rgba(236, 72, 153, 0.14), transparent 50%),
       radial-gradient(ellipse 100% 40% at 60% 70%, rgba(16, 185, 129, 0.08), transparent 45%),
       #000000
     `,
            }}
          />
          {/* Content */}
          <main className="relative z-10">
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
            </main>
        </div>
      </body>
    </html>
  );
}
