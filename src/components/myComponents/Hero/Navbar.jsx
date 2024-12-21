import React from "react";

import { Button } from "../../ui/button";
import { ModeToggle } from "../../ui/mode-toggle";

import { Navlist } from "../../../constants/index";
import { useTheme } from "../../ui/theme-provider";

export default function Navbar() {
  const { theme } = useTheme();
  const logoSrc =
    theme === "light"
      ? "./assets/images/logo/Logo-dark.svg"
      : "./assets/images/logo/Logo.svg";

  return (
    <div className="row-span-1">
      <div className="flex items-center justify-between py-5">
        <div>
          <img src={logoSrc} alt="Logo CoinFlip" />
        </div>
        <div className="hidden md:flex">
          <ul className="flex items-center gap-3">
            {Navlist.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer rounded-md p-1 px-3 transition-all duration-300 hover:bg-navItemHover"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <ModeToggle />
          <Button className="bg-gradient-to-l from-[#18C8FF] to-[#933FFE] text-foreground dark:from-[#933FFE] dark:to-[#18C8FF]">
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}
