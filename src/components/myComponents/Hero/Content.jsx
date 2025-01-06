import React, { useState } from "react";

import { Button } from "@/components/ui/button";

import glass from "/assets/images/hero/glass.svg";

import { motion } from "motion/react";

export default function Content() {
  const [animateFirst, setAnimateFirst] = useState(true);

  return (
    <div className="row-span-10 -row-start-9">
      <motion.h1
        initial={
          animateFirst
            ? {
                opacity: 0,
                scale: 0,
              }
            : {
                opacity: 1,
                scale: 1,
                x: 20,
              }
        }
        animate={
          animateFirst
            ? {
                opacity: 1,
                scale: [0, 2, 1],
              }
            : {
                x: [0, 20, -20],
              }
        }
        transition={
          animateFirst
            ? {
                scale: { times: [0, 0.9, 1], duration: 1.5 },
                duration: 1.5,
              }
            : {
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
              }
        }
        onAnimationComplete={() => {
          setTimeout(() => {
            setAnimateFirst(false);
          }, 1000);
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
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
          duration: 2,
        }}
        className="mx-auto mt-3 max-w-xl text-center font-Regular text-[#898CA9] md:text-lg"
      >
        Buy, sell, and grow your crypto with CoinFlip, the platform dedicated
        to every trader at every level.
      </motion.p>
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
          rotate: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          rotate: "360deg",
        }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: "easeOut",
        }}
        className="mt-5 flex items-center justify-center"
      >
        <Button
          size="lg"
          className="bg-gradient-to-l from-[#18C8FF] to-[#933FFE] text-foreground dark:from-[#933FFE] dark:to-[#18C8FF]"
        >
          Get Started
        </Button>
      </motion.div>
    </div>
  );
}
