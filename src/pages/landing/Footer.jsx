import React from "react";

import instagram from "/assets/images/Footer/instagram.svg";
import facebook from "/assets/images/Footer/facebook.svg";
import twitter from "/assets/images/Footer/twitter.svg";
import youtube from "/assets/images/Footer/youtube.svg";

export default function Footer() {
  return (
    <div className="footer mt-10 border-t border-[rgba(255,255,255,0.05)]">
      <div className="grid gap-8 py-14 ~px-5/24 sm:grid-cols-12">
        <div className="col-span-3 xl:col-span-5 2xl:col-span-6">
          <span className="font-Bold text-4xl">
            Coin<span className="font-Bold text-[#0FAE96]">Flip</span>
          </span>

          <div className="mt-20 flex items-center gap-4">
            <img src={instagram} alt="instagram svg" />
            <img src={facebook} alt="facebook svg" />
            <img src={twitter} alt="twitter svg" />
            <img src={youtube} alt="youtube svg" />
          </div>
          <p className="mt-5 font-RegularRoboto text-[#B6B6B6]">
            2025 CoinFlip. All rights reserved
          </p>
        </div>
        <div className="col-span-3 xl:col-span-2 2xl:col-span-2">
          <span className="font-SemiBold text-xl">About Us</span>
          <ul className="mt-3 space-y-4 [&>*]:cursor-pointer [&>*]:font-RegularRoboto [&>*]:text-[#b6b6b6]">
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Legal & privacy</li>
          </ul>
        </div>
        <div className="col-span-3 xl:col-span-2 2xl:col-span-2">
          <span className="font-SemiBold text-xl">Services</span>
          <ul className="mt-3 space-y-4 [&>*]:cursor-pointer [&>*]:font-RegularRoboto [&>*]:text-[#b6b6b6]">
            <li>Aplications</li>
            <li>Buy Crypto</li>
            <li>Affilliate</li>
            <li>Institutional Services</li>
          </ul>
        </div>
        <div className="col-span-3 xl:col-span-3 2xl:col-span-2">
          <span className="font-SemiBold text-xl">Learn</span>
          <ul className="mt-3 space-y-4 [&>*]:cursor-pointer [&>*]:font-RegularRoboto [&>*]:text-[#b6b6b6]">
            <li>What is Cryptocurency?</li>
            <li>Crypto Basic</li>
            <li>Tips and Tutorials</li>
            <li>Market Update</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
