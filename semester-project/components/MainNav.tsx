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
            <Link href={href} passHref legacyBehavior>
              <a
                className={cn(
                  "uppercase whitespace-nowrap font-roboto-condensed font-bold text-base px-5 py-3 rounded-xl text-brand-purple-900 bg-brand-blue-300 hover:bg-brand-grey-300 border-2 border-brand-purple-900",
                  {
                    "bg-brand-special-300 text-brand-special-200 pointer-events-none border-brand-special-200":
                      pathname === href,
                  }
                )}
              >
                {title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;