import "./globals.css";
import NoSSR from "./NoSSR";
import localFont from "next/font/local";
import Spline from "@/components/Spline";

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
        <NoSSR>
          <>
            {children}
            <div
              className={
                "absolute right-0 top-[70rem] -z-10 grid h-[1850px] w-[1100px]"
              }
            >
              <Spline
                scene={
                  "https://prod.spline.design/67GWXoedqMNytxny/scene.splinecode"
                }
              />
            </div>
          </>
        </NoSSR>
      </body>
    </html>
  );
}
