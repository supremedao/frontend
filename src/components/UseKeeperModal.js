"use client";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Typography from "@/components/Typography";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function UseKeeperModal({
  isKeeperModalOpen,
  closeKeeperModal,
}) {
  return (
    <Transition appear show={isKeeperModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeKeeperModal}>
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
              <Dialog.Panel className="relative w-full max-w-lg rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                <div className="absolute right-0 z-10 ">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center px-3 py-2 text-gray-900"
                    onClick={closeKeeperModal}
                    data-autofocus
                  >
                    <XMarkIcon className={"size-6"} />
                  </button>
                </div>
                <div
                  className={
                    "flex min-h-60 flex-col justify-between bg-[rgba(37,76,247,.1)] px-4 py-8 sm:min-h-80 sm:p-10 text-center"
                  }
                >
                  <Typography variant="h3" className="text-primary mb-6">
                    Thank you for choosing to stake with the Keeper!
                  </Typography>
                  <Typography className={"mb-3 text-xl"}>
                    Your staking transaction will be executed by the Keeper at{" "}
                    <Typography
                      as={"span"}
                      className={"text-primary text-xl font-semibold"}
                    >
                      10 PM UTC
                    </Typography>
                    .
                  </Typography>
                  <Typography className={"mb-5 text-xl"}>
                    Until this time, your stake is pending execution.
                  </Typography>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
