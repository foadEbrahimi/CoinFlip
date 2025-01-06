import React from "react";

import bitcoin from "/assets/images/hero/Bitcoin.svg";
import Etherium from "/assets/images/hero/Etherium.svg";
import img from "/assets/images/hero/gradient1.svg";
import img2 from "/assets/images/hero/gradient2.svg";
import LiteCoin from "/assets/images/hero/LiteCoin.svg";
import Monero from "/assets/images/hero/Monero.svg";
import sphere from "/assets/images/hero/sphere.svg";
import sphere2 from "/assets/images/hero/sphere2.svg";
import starImg from "/assets/images/hero/star-img.svg";
import star1 from "/assets/images/hero/star.svg";
import star2 from "/assets/images/hero/star2.svg";

import Content from "@/components/myComponents/Hero/Content";
import Navbar from "@/components/myComponents/Hero/Navbar";

import { motion } from "motion/react";

export default function Hero() {
  const radiusX = 100; // شعاع بیضی افقی
  const radiusY = 50; // شعاع بیضی عمودی
  const duration = 4; // مدت زمان انیمیشن
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
          className="absolute -top-36 right-0 -z-10 translate-x-28"
        />
      </div>
      {/* end */}
      <Content />
      {/* hanging stars */}
      <div className="hidden md:block">
        {/* left side */}
        <div className="relative -z-20 lg:z-0">
          <motion.img
            src={bitcoin}
            draggable={false}
            className="absolute -top-10"
            alt="bitcoin svg"
            initial={{
              scale: 1,
            }}
            animate={{
              scale: 1.05,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.img
            src={star1}
            draggable={false}
            className="absolute left-36 top-32"
            alt="bitcoin svg"
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0.5,
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.img
            src={sphere2}
            draggable={false}
            className="absolute top-64"
            alt="bitcoin svg"
            animate={{
              x: [5, -5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          <motion.img
            src={LiteCoin}
            draggable={false}
            className="absolute left-36 top-[27rem]"
            alt="bitcoin svg"
            initial={{
              rotate: "0",
            }}
            animate={{
              rotate: "360deg",
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
        {/* right side */}
        <div className="relative -z-20 lg:z-0">
          <img
            src={starImg}
            draggable={false}
            className="absolute -top-5 right-48"
            alt="starImg svg"
          />
          <img
            src={star2}
            draggable={false}
            className="absolute right-0 top-5"
            alt="starImg svg"
          />
          <img
            src={Monero}
            draggable={false}
            className="absolute right-0 top-24"
            alt="starImg svg"
          />
          <img
            src={sphere}
            draggable={false}
            className="absolute -right-44 top-60"
            alt="starImg svg"
          />
          <img
            src={Etherium}
            draggable={false}
            className="absolute right-48 top-[27rem]"
            alt="starImg svg"
          />
          <img
            src={star1}
            draggable={false}
            className="absolute right-0 top-[33rem]"
            alt="starImg svg"
          />
        </div>
      </div>
      {/* end */}
    </div>
  );
}
