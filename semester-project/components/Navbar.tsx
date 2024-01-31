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
  { href: "/analysis", title: "Analysis" },
  { href: "/feedback", title: "Feedback" },
  { href: "/recommendations", title: "Recommendations" },
  { href: "/cms/products", title: "Products" },
  { href: "/login", title: "Login" },
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