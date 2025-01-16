import React, { useRef } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import arrow from "/assets/images/Faetures/arrow.svg";

import { motion, useInView } from "motion/react";

export default function CardFaetures({ img, title, decs, x, delay }) {
  const ref = useRef();
  const isInView = useInView(ref, {
    once: true,
  });
  return (
    <motion.div
      ref={ref}
      className="w-full min-w-fit flex-1"
      initial={{
        x,
        opacity: 0,
      }}
      animate={{
        x: isInView ? 0 : x,
        opacity: isInView ? 1 : 0,
      }}
      transition={{
        duration: 1,
        delay,
      }}
    >
      <Card className="space-y-10">
        <CardHeader>
          <img src={img} alt="svg" />
        </CardHeader>
        <CardContent className="space-y-2">
          <CardTitle className="font-SemiBold text-2xl">{title}</CardTitle>
          <CardDescription className="font-RegularRoboto sm:max-w-60">
            {decs}
          </CardDescription>
        </CardContent>
        <CardFooter className="pt-9">
          <button className="group flex items-center gap-2 font-Medium text-[#0FAE96]">
            See Explained{" "}
            <img
              src={arrow}
              alt="arrow svg"
              className="transition-all duration-300 group-hover:translate-x-2"
            />
          </button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
