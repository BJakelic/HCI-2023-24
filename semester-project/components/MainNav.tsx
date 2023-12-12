"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Page } from "@/components/Navbar";

const MainNav = ({ pages }: { pages: Page[] }) => {
  const pathname = usePathname();
  return (
    <nav className="hidden lg:flex items-center justify-center">
      <ul className="flex gap-2">
        {pages.map(({ href, title }) => (
          <li key={href}>
            <Link href={href}>
              <span
                className={cn(
                  "uppercase whitespace-nowrap font-roboto-condensed text-base px-5 py-3 rounded-sm text-brand-purple-900 bg-brand-blue-300 hover:bg-brand-grey-300 border-2 border-brand-grey-300",
                  {
                    "bg-brand-special-300 text-brand-purple-100 pointer-events-none":
                      pathname === href,
                  }
                )}
              >
                {title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;