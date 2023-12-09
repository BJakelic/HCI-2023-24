"use client";
import { useState } from "react";

import { Logo } from "@/components/Logo";
import MainNav from "@/components/MainNav";
import MobileNav from "@/components/MobileNav";

export type Page = {
  href: string;
  title: string;
};

// Get this info from some external source (e.g. CMS)
const pages: Page[] = [
  { href: "/", title: "Home" },
  { href: "/computer_analysis", title: "Computer analysis" },
  { href: "/community_insights", title: "Community insights" },
  { href: "/game_assesment", title: "Game assesment" },
  { href: "/game_requirements", title: "Game requirements" },
  { href: "/optimization_and_recommendations", title: "Optimization & recommendations" },
  { href: "/state", title: "State" },
];

const baseClass =
    "uppercase whitespace-nowrap font-roboto-condensed text-base px-5 py-3 rounded-sm text-brand-purple-700 hover:bg-brand-purple-200";

const NavBar = () => {
  const [open, setOpen] = useState(false);
    
  return (
    <div className="grid grid-rows-2 flex justify-items-center justify-evenly bg-brand-blue-300">
      <Logo />
      <MainNav pages={pages} />
      <MobileNav open={open} clickHandler={setOpen} pages={pages} />
    </div>
  );
};
    
export default NavBar;