import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { AppProvider } from "@/components/providers/AppProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Deliver — Order from the best restaurants near you",
  description:
    "Browse local restaurants, explore menus and get your favorite meals delivered fast. Restaurant owner? Create your online restaurant and start receiving orders today.",
};

const themeInitScript = `(function () {
  try {
    var theme = window.localStorage.getItem("theme");
    if (
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {}
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans">
        <LanguageProvider>
          <AppProvider>
            <Navbar />
            {children}
            <Footer />
          </AppProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
