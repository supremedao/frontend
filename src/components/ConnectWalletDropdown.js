import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Button from "@/components/Button";
import { useAccount, useConnect } from "wagmi";
import Typography from "@/components/Typography";
import Link from "@/components/Link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ConnectWalletDropdown() {
  const { connectors, connect, status, error } = useConnect();
  const [isOpen, setIsOpen] = useState(true);
  const [checked, setChecked] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleAgreeTerms(event) {
    setChecked(event.currentTarget.checked);
    if (localStorage) {
      localStorage.setItem("agreed-to-terms", event.currentTarget.checked);
    }
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Button size={"small"} onClick={openModal} color={"blue"} className="">
          Connect wallet
        </Button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 grid grid-cols-1 lg:grid-cols-2">
                    <div className={"flex flex-col justify-between"}>
                      <Typography variant="h3" className="text-primary">
                        Connect your wallet
                      </Typography>
                      <Typography className={"mb-4"}>
                        Connecting your wallet is like “logging in” to Web3.
                        Select your wallet from the options to get started. If
                        you don’t have a wallet jet, you can find an overview
                        here.
                      </Typography>
                      <div>
                        <label className={"flex"}>
                          <input
                            type={"checkbox"}
                            className={"mr-2"}
                            onChange={handleAgreeTerms}
                          />
                          <Typography>
                            I agree to the{" "}
                            <Link
                              target={"_blank"}
                              className={"text-primary"}
                              href={"/content/terms-of-use"}
                            >
                              Terms &amp; Conditions
                            </Link>{" "}
                            and{" "}
                            <Link
                              href={"/content/privacy"}
                              target={"_blank"}
                              className={"text-primary"}
                            >
                              Privacy policy
                            </Link>
                            .
                          </Typography>
                        </label>
                      </div>
                    </div>
                    <div className="px-6 py-4">
                      {connectors.map((connector) => (
                        <Menu.Item key={connector.uid}>
                          {({ active }) => (
                            <a
                              href={"#"}
                              onClick={(event) => {
                                event.preventDefault();

                                try {
                                  if (!checked) return;
                                  connect({ connector });
                                } catch (error) {
                                  console.log("error connecting wallet", error);
                                }
                              }}
                              className={classNames(
                                active && checked
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                `block px-4 py-5 text-sm rounded border my-3 ${checked ? "" : "opacity-30"}`,
                              )}
                            >
                              {connector.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </div>
                  <div className="px-4 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={closeModal}
                      data-autofocus
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Menu>
  );
}
