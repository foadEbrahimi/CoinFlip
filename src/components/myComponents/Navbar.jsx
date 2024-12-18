import React from 'react';

import logo from '../../assets/images/logo/Logo.svg';
import { ModeToggle } from '../ui/mode-toggle';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '../ui/navigation-menu';
import { Button } from '../ui/button';

export default function Navbar() {
  return (
    <div className="~px-5/24">
      <div className="flex items-center justify-between py-5">
        <div>
          <img src={logo} alt="Logo CoinFlip" />
        </div>
        <div>
          <ul className="flex items-center gap-5 text-lg">
            <li className="cursor-pointer">Buy/Sell</li>
            <li className="cursor-pointer">Grow</li>
            <li>Markets</li>
            <li>Business</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <ModeToggle />
          <Button variant="destructive">Sign up</Button>
        </div>
      </div>
    </div>
  );
}
