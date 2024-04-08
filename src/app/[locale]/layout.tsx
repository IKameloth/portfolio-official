import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ActiveSectionProvider } from "@/context/active-section-context";
import { ThemeProvider } from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import BackgroundColor from "@/components/BackgroundColor";
import Header from "@/components/navbar/Header";
import UpButton from "@/components/UpButton";
import { NextIntlClientProvider, useMessages } from "next-intl";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Camilo Matteo - Portfolio",
  description: "Web developer | Front-End developer | ReactJS | NextJS",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();

  return (
    <html
      lang={locale}
      className="!scroll-smooth"
      suppressHydrationWarning={true}
    >
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <BackgroundColor />
        <ThemeProvider>
          <ActiveSectionProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <Header />
              {children}
              <Footer />
              <Toaster />
              <UpButton />
            </NextIntlClientProvider>
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
