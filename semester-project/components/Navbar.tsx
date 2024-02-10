"use client";

import { useState, useEffect } from "react";
import MainNav from "@/components/MainNav";
import MyMenu from "./DropdownMenu";
import { Logo } from "@/components/Logo";

export type Page = {
  href: string;
  title: string;
};

const pages: Page[] = [
  { href: "/", title: "Home" },
  { href: "/analysis", title: "Analysis" },
  { href: "/feedback", title: "Feedback" },
  { href: "/recommendations", title: "Recommendations" },
  { href: "/cms/products", title: "Products" },
  { href: "/login", title: "Login" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (window.scrollY > 480) {
          navbar.classList.add("fixed", "top-0", "left-0", "right-0", "z-50");
        } else {
          navbar.classList.remove("fixed", "top-0", "left-0", "right-0", "z-50");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="navbar" className="bg-brand-blue-100 pb-6 border-b-2 border-white md:border-0">
      <div className="w-full">
        <Logo />
      </div>
      <div className="grid grid-rows-[max-content_1fr] pt-6 mb-2">
        <MyMenu pages={pages} />
      </div>
      <MainNav pages={pages} />
    </div>
  );
};

export default NavBar;
