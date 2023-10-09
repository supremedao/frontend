import React, { CSSProperties } from "react";
import Head from "next/head";

import { Header } from "./Header";
import { usePathname } from "next/navigation";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const path = usePathname();
  const styleBg =
    path === "/"
      ? {
          backgroundImage: `url('/images/bg.svg')`,
          height: "full",
          backgroundPosition: "center",
        }
      : undefined;

  return (
    <div
      className="flex-col items-center m-8 p-1  border-[#252525]  border rounded-3xl overflow-hidden"
      style={styleBg}
    >
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      {/* {showFooter && <Footer />} */}
    </div>
  );
};

export default Layout;
