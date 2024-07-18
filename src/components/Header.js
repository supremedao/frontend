"use client";

import { useState } from "react";
import Button from "@/components/Button";
import Link from "next/link";
import { Dialog, Disclosure, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="">
      <nav
        className="mx-auto flex items-center justify-between px-2 py-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Supreme DAO</span>
            <img
              className={"w-44 sm:w-64"}
              // width={258}
              height={49}
              src="/logotype.png"
              alt="Supreme DAO"
            />
          </a>
        </div>

        <Popover.Group className="-ml-10 hidden lg:flex lg:gap-x-12">
          <a
            href="https://t.me/supremedaochat"
            target={"_blank"}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Community
          </a>

          <a
            href="https://supremedao.gitbook.io/supremedao"
            target={"_blank"}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Docs
          </a>
          <a
            href="https://mirror.xyz/supremexyz.eth"
            target={"_blank"}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About SupremeDAO
          </a>
        </Popover.Group>

        {children}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="size-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href={"#"}
              onClick={() => setMobileMenuOpen(false)}
              className="-m-1.5 p-1.5"
            >
              <span className="sr-only">Supreme DAO</span>
              <img
                width={129}
                height={24}
                className=""
                src="/logotype.png"
                alt="Supreme DAO"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="size-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="https://t.me/supremedaochat"
                  target={"_blank"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Community
                </Link>
                <Link
                  href="https://supremedao.gitbook.io/supremedao"
                  target={"_blank"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Docs
                </Link>
                <Link
                  href="https://mirror.xyz/supremexyz.eth"
                  target={"_blank"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About SupremeDAO
                </Link>
              </div>
              <div className="py-6">
                <Link href="/genesis">
                  <Button size={"small"} className="">
                    Open dApp
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
