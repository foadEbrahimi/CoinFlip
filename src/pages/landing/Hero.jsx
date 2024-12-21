import React from "react";

import img from "/assets/images/hero/gradient1.svg";
import img2 from "/assets/images/hero/gradient2.svg";
import bitcoin from "/assets/images/hero/Bitcoin.svg";
import LiteCoin from "/assets/images/hero/LiteCoin.svg";
import star1 from "/assets/images/hero/star.svg";
import sphere from "/assets/images/hero/sphere.svg";
import sphere2 from "/assets/images/hero/sphere2.svg";

import Navbar from "@/components/myComponents/Hero/Navbar";
import Content from "@/components/myComponents/Hero/Content";

export default function Hero() {
  return (
    <div
      id="heroBg"
      className="relative z-10 grid grid-rows-12 overflow-hidden ~px-5/24"
    >
      <Navbar />
      {/* gradient svgs */}
      <div>
        <img
          src={img}
          alt="gradient svg one"
          draggable={false}
          className="absolute left-0 top-0 -z-10"
        />
        <img
          src={img2}
          alt="gradient svg two"
          draggable={false}
          className="absolute bottom-0 right-0 -z-10 translate-x-28"
        />
      </div>
      {/* end */}
      <Content />
      {/* hanging stars */}
      <div>
        <div className="relative">
          <img
            draggable={false}
            className="absolute -top-10"
            src={bitcoin}
            alt="bitcoin svg"
          />
          <img
            draggable={false}
            className="absolute left-36 top-32"
            src={star1}
            alt="bitcoin svg"
          />
          <img
            draggable={false}
            className="absolute top-64"
            src={sphere2}
            alt="bitcoin svg"
          />
          <img
            draggable={false}
            className="absolute top-[29rem] left-36"
            src={LiteCoin}
            alt="bitcoin svg"
          />
        </div>
        <div></div>
      </div>
      {/* end */}
    </div>
  );
}
