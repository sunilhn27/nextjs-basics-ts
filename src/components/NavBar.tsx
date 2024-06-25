import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ui/mode-toggle";

function NavBar() {
  return (
    <div className="flex  items-center justify-evenly">
      <nav className="space-x-3 w-full p-6">
        <Link href={"/dashboard"}>DashBoard</Link>

        <Link href={"/form"}>Form</Link>

        <Link href={"/userprofile"}>UserProfile</Link>
        <Link href={"/getusers"}>ListUsers</Link>

        <Link href={"/about"}>About</Link>
        <div className="flex  justify-end mx-6">
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
