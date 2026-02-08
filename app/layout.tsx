import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elemac Hydro Solutions | Elevate with Confidence",
  description: "Premium lift and elevator services. Hydraulic lifts, home elevators, and cargo lifts solutions.",
  icons: {
    icon: '/favicon.png', // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWidgets />
      </body>
    </html>
  );
}
