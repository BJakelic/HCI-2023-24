"use client";
import { useState } from "react";

import MainNav from "@/components/MainNav";
import MyMenu from "./DropdownMenu";

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



const NavBar = () => {
  const [open, setOpen] = useState(false);
    
  return (
    <div className="grid grid-rows-[max-content_1fr] justify-evenly bg-brand-blue-100 p-6">
      <div className=" mb-2">
        <MyMenu pages={pages} />
      </div>
      <MainNav pages={pages} />
    </div>
  );
};
    
export default NavBar;