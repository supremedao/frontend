"use client";
import Button from "@/components/Button";
import Link from "@/components/Link";
import Typography from "@/components/Typography";
import { useState } from "react";

function CookieBanner() {
  const [consent, setConsent] = useState(localStorage.getItem("consent"));

  function acceptSection() {
    localStorage.setItem("consent", "necessary");
    setConsent("necessary");
  }

  function acceptAll() {
    localStorage.setItem("consent", "all");
    setConsent("all");
  }

  return !consent ? (
    <figure className={"fixed inset-x-0 bottom-0 z-20 bg-black p-6 text-white"}>
      <div className={"mx-auto max-w-screen-lg text-center"}>
        <div className="mb-4">
          <Typography>
            We use cookies to provide the best experience and to help improve
            our website and application. Please read our{" "}
            <Link href={"/cookie-policy"}>Cookie Policy</Link> for more
            information. By clicking "Accept all", you agree to the storing of
            cookies on your device to enhance site navigation, analyze site
            usage and provide customer support
          </Typography>
        </div>
        <div className="flex items-center justify-center gap-4">
          <label>
            <input
              type="checkbox"
              name="necessary"
              id="necessary"
              checked
              disabled
              className={"mr-2"}
            />
            Necessary
          </label>
          <label>
            <input
              type="checkbox"
              name="analytics"
              id="analytics"
              defaultChecked={true}
              className={"mr-2"}
            />
            Analytics
          </label>
          <Button
            onClick={acceptSection}
            className={"rounded border-green-600 py-1 hover:border-green-400"}
          >
            Accept Section
          </Button>
          <Button
            onClick={acceptAll}
            className={"rounded bg-green-600 py-1 hover:bg-green-400"}
          >
            Accept all
          </Button>
        </div>
      </div>
    </figure>
  ) : null;
}

export default CookieBanner;
