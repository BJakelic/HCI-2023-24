"use client";

import { Fragment } from 'react'
import Link from "next/link";
import { Menu } from '@headlessui/react'
import { Page } from "@/components/Navbar";

export default function MyMenu({ pages }: { pages: Page[] }) {
  return (
    <Menu>
      <div className="flex items-center justify-center">
        <Link href="#" className="block md:hidden">
          <Menu.Button className="uppercase whitespace-nowrap font-roboto-condensed font-bold text-sm md:text-base px-5 py-3 rounded-xl text-brand-special-200 bg-brand-blue-100 hover:bg-brand-blue-300 border-2 border-brand-special-200">
            MENU
          </Menu.Button>
        </Link>
      </div>
      <Menu.Items className="grid grid-cols-1 gap-y-2 mt-2 items-center">
        {pages.map((page) => (
          <Menu.Item key={page.href} as={Fragment}>
            {({ active }) => (
              <Link
                href={page.href}
                className={`block uppercase whitespace-nowrap font-roboto-condensed font-bold text-base px-5 py-3 w-auto mr-12 ml-12 rounded-xl text-brand-purple-900 bg-brand-blue-200 hover:bg-brand-blue-300 border-2 border-brand-purple-900 ${
                  active ? 'text-white' : 'text-brand-purple-900'
                }`}
                style={{ textAlign: 'center' }}
              >
                {page.title}
              </Link>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};