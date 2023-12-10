"use client";

import { Fragment } from 'react'
import { Menu } from '@headlessui/react'
import { Page } from "@/components/Navbar";

function MyMenu({ pages }: { pages: Page[] }) {
    return (
      <Menu>
        <Menu.Button>Options</Menu.Button>
        <Menu.Items className="grid grid-cols-1">
          {pages.map((page) => (
            /* Use the `active` state to conditionally style the active item. */
            <Menu.Item key={page.href} as={Fragment}>
              {({ active }) => (
                <div className="uppercase whitespace-nowrap font-roboto-condensed text-base px-5 py-3 rounded-sm text-brand-purple-900 hover:bg-brand-grey-300">
                    <a
                    href={page.href}
                    className={`${
                     active ? 'bg-brand-special-300 text-white' : 'bg-brand-blue-300 text-black'
                    }`}
                    >
                    {page.title}
                    </a>
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    )
};

export default MyMenu;