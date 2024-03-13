import { Questrial } from "next/font/google";
import "./globals.css";
import NoSSR from "./NoSSR";
import Script from "next/script";

const questrial = Questrial({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Supreme DAO",
  description: "",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
    <body className={`${questrial.className} bg-[url('/bg.png')] bg-no-repeat bg-[right_top_70rem]`}><NoSSR>{children}</NoSSR>
    </body>
    </html>
  );
}
