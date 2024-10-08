import "./globals.css";
import NoSSR from "./NoSSR";
import localFont from "next/font/local";
import CookieBanner from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Script from "next/script";
import Noise from "@/components/Noise";

const Gilroy = localFont({
  src: [
    {
      path: "../fonts/GilroyMedium/font.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/GilroySemiBold/font.woff2",
      weight: "600",
      style: "semibold",
    },
  ],
});

export const metadata = {
  title: "Supreme DAO",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Gilroy.className}>
        <main className="container mx-auto max-w-screen-xl px-3">
          {children}
          <NoSSR>
            <CookieBanner />
          </NoSSR>
          <Footer />
        </main>
      </body>
    </html>
  );
}
