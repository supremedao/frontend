"use client";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import Button from "@/components/Button";
import { useConnect } from "wagmi";
import Typography from "@/components/Typography";
import Link from "@/components/Link";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useApp } from "@/Context/AppProvider";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function getIcon(id) {
  switch (id) {
    case "metaMaskSDK":
      return "/icons/wallets/metamask.svg";
    case "walletConnect":
      return "/icons/wallets/wallet-connect.svg";
    case "coinbaseWalletSDK":
      return "/icons/wallets/coinbase.svg";
    default:
      return "";
  }
}

export default function ConnectWalletDropdown() {
  const { connectors, connect, status, error } = useConnect();
  const [checked, setChecked] = useState(false);
  const { isAuthDialogOpen, closeAuthModal, openAuthModal } = useApp();

  function handleAgreeTerms(event) {
    setChecked(event.currentTarget.checked);
    if (window.localStorage) {
      window.localStorage.setItem(
        "agreed-to-terms",
        event.currentTarget.checked,
      );
    }
  }

  console.log("connectors", connectors);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Button
          size={"small"}
          onClick={openAuthModal}
          color={"blue"}
          className=""
        >
          Connect wallet
        </Button>
      </div>
      <Transition appear show={isAuthDialogOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeAuthModal}>
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
                <Dialog.Panel className="relative w-full max-w-4xl rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <div className="absolute right-0 z-10 ">
                    {/*-mr-4 -mt-4*/}
                    <button
                      type="button"
                      className="inline-flex w-full justify-center px-3 py-2 text-gray-900"
                      onClick={closeAuthModal}
                      data-autofocus
                    >
                      <XMarkIcon className={"size-6"} />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div
                      className={
                        "flex min-h-60 flex-col justify-between bg-[rgba(37,76,247,.1)] px-4 py-8 sm:min-h-80 sm:p-10"
                      }
                    >
                      <Typography variant="h3" className="text-primary">
                        Connect your wallet
                      </Typography>
                      <Typography className={"mb-5"}>
                        Connecting your wallet is like “logging in” to Web3.
                        Select your wallet from the options to get started. If
                        you don’t have a wallet jet, you can find an overview{" "}
                        <Link
                          className={"text-primary"}
                          href={
                            "https://ethereum.org/en/wallets/find-wallet/#main-content"
                          }
                          target={"_blank"}
                        >
                          here
                        </Link>
                        .
                      </Typography>
                      <div>
                        <Typography className={"mb-1 font-bold text-primary"}>
                          Important Notice: Risks of Using SupremeDAO Finance
                        </Typography>
                        <Typography className={"text-xs"}>
                          SupremeDAO finance is a new suite of experimental
                          blockchain-oriented functionalities. Please read
                          carefully our terms & conditions. You understand and
                          agree to assume full responsibility for all of the
                          risks of accessing and using the Interface to interact
                          with the Protocol.
                        </Typography>
                      </div>
                      <div className={"mt-7"}>
                        <label className={"flex"}>
                          <input
                            type={"checkbox"}
                            className={"mr-2 w-4"}
                            onChange={handleAgreeTerms}
                          />
                          <Typography className={"text-xs md:text-sm"}>
                            I agree to the{" "}
                            <Link
                              target={"_blank"}
                              className={"text-xs text-primary md:text-sm"}
                              href={"/content/terms-of-use"}
                            >
                              Terms &amp; Conditions
                            </Link>{" "}
                            and{" "}
                            <Link
                              href={"/content/privacy"}
                              target={"_blank"}
                              className={"text-xs text-primary md:text-sm"}
                            >
                              Privacy policy
                            </Link>
                            .
                          </Typography>
                        </label>
                      </div>
                    </div>
                    <div className=" flex flex-col justify-center p-4 sm:p-10">
                      <div>
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
                                    console.log(
                                      "error connecting wallet",
                                      error,
                                    );
                                  }
                                }}
                                className={classNames(
                                  active && checked
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  `flex px-4 py-5  rounded-xl border-dashed border border-black my-3 ${checked ? "" : "opacity-25"}`,
                                )}
                              >
                                <img
                                  src={getIcon(connector.id)}
                                  className={"mr-2 w-6"}
                                />
                                {connector.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </div>
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
