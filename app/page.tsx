"use client";

import Footer from "./components/footer";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

// Modern color palette for a fresh look
const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-slate-950 via-teal-950 to-cyan-900 min-h-screen flex flex-col">
      <header className="flex-1">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-cyan-200 hover:bg-cyan-900/20 transition"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-base font-semibold text-cyan-100 hover:text-cyan-300 transition">
                Owynn
                <ChevronDownIcon
                  aria-hidden="true"
                  className="size-5 flex-none text-cyan-400"
                />
              </PopoverButton>
              <PopoverPanel
                transition
                className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-slate-900 shadow-lg ring-1 ring-cyan-900/30 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
              >
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-cyan-950/40 transition"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-cyan-900/30 group-hover:bg-cyan-900/60 transition">
                        <item.icon
                          aria-hidden="true"
                          className="size-6 text-cyan-300 group-hover:text-cyan-400 transition"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-cyan-100 group-hover:text-cyan-300 transition"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-cyan-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            <a
              href="#"
              className="text-base font-semibold text-cyan-100 hover:text-cyan-300 transition"
            >
              About me
            </a>
            <a
              href="#"
              className="text-base font-semibold text-cyan-100 hover:text-cyan-300 transition"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-base font-semibold text-cyan-100 hover:text-cyan-300 transition"
            >
              Skills
            </a>
          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-cyan-900/30">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-cyan-200 hover:bg-cyan-900/20 transition"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-cyan-900/30">
                <div className="space-y-2 py-">
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base font-semibold text-cyan-100 hover:bg-cyan-900/20 hover:text-cyan-300 transition">
                      Product
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="size-5 flex-none group-data-open:rotate-180 text-cyan-400"
                      />
                    </DisclosureButton>
                  </Disclosure>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-cyan-100 hover:bg-cyan-900/20 hover:text-cyan-300 transition"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-cyan-100 hover:bg-cyan-900/20 hover:text-cyan-300 transition"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-cyan-100 hover:bg-cyan-900/20 hover:text-cyan-300 transition"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6"></div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <Footer />
    </div>
  );
}
