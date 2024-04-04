import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ActiveSectionProvider } from "@/context/active-section-context";
import { ThemeProvider } from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import BackgroundColor from "@/components/BackgroundColor";
import Header from "@/components/navbar/Header";
import "./globals.css";
import UpButton from "@/components/UpButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Camilo Matteo - Portfolio",
  description: "Web developer | Front-End developer | ReactJS | NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <BackgroundColor />
        <ThemeProvider>
          <ActiveSectionProvider>
            <Header />
            {children}
            <Footer />
            <Toaster />
            <UpButton />
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
