import React from "react";

import { Button } from "@/components/ui/button";

import glass from "/assets/images/hero/glass.svg";

import { motion } from "motion/react";

export default function Content() {
  return (
    <div className="row-span-10 -row-start-9">
      <motion.h1
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: [0, 2, 1],
        }}
        transition={{
          scale: { times: [0, 0.9, 1], duration: 1.5 },
          duration: 1.5,
        }}
        className="relative mx-auto text-center font-Bold !leading-[130%] ~text-5xl/7xl lg:~max-w-2xl/xl"
      >
        We make crypto clear and simple
        <img
          src={glass}
          alt="glass svg"
          className="absolute -bottom-7 left-0 -z-10 ~w-28/32"
        />
      </motion.h1>
      <motion.p className="mx-auto mt-3 max-w-xl text-center font-Regular text-[#898CA9] md:text-lg">
        Buy, sell, and grow your crypto with CoinFlip, the platform dedicated
        to every trader at every level.
      </motion.p>
      <div className="mt-5 flex items-center justify-center">
        <Button
          size="lg"
          className="bg-gradient-to-l from-[#18C8FF] to-[#933FFE] text-foreground dark:from-[#933FFE] dark:to-[#18C8FF]"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
