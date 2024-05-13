import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Button from "@/components/Button";
import { useAccount, useConnect } from "wagmi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ConnectWalletDropdown() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-full border bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-100 focus:ring-opacity-75">
          Connect wallet
          <ChevronDownIcon
            className="-mr-1 size-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {connectors.map((connector) => (
              <Menu.Item key={connector.uid}>
                {({ active }) => (
                  <a
                    href={"#"}
                    onClick={(event) => {
                      event.preventDefault();
                      connect({ connector });
                    }}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm",
                    )}
                  >
                    {connector.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
