import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import React, { useRef } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";

import arrow from "/assets/images/MarketTrend/arrow.svg";
import chart1 from "/assets/images/MarketTrend/chart1.svg";
import chart2 from "/assets/images/MarketTrend/chart2.svg";

import { motion, useInView } from "motion/react";

export default function CardMarket({
  img,
  label,
  badge,
  price,
  percentage,
  delay,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });
  return (
    <motion.div
      ref={ref}
      initial={{
        y: 100,
        opacity: 0,
      }}
      animate={{
        y: isInView ? 0 : 100,
        opacity: isInView ? 1 : 0,
      }}
      transition={{
        duration: 1.2,
        delay,
      }}
      className="w-full min-w-fit flex-1"
    >
      <Card className="p-3">
        <CardHeader className="items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={img} alt={`${label} image`} />
            <span className="font-SemiBold">{label}</span>
            <Badge className="bg-[#C6C6C6] px-1 font-SemiBold uppercase tracking-widest">
              {badge}
            </Badge>
          </div>
          <div className="cursor-pointer rounded-full bg-white/5 p-3">
            <img src={arrow} alt="bitcoin png" />
          </div>
        </CardHeader>
        <Separator className="my-4 bg-[#ECF1F0] opacity-5" />
        <CardFooter className="justify-between">
          <div className="space-y-2">
            <CardTitle className="font-RegularRoboto text-2xl tracking-wider">
              ${price}
            </CardTitle>
            <CardDescription className="font-RegularRoboto text-xl">
              {percentage}%
            </CardDescription>
          </div>
          <img
            src={Math.random() * 2 >= 1 ? chart1 : chart2}
            alt="chart svg"
            className="h-full"
          />
        </CardFooter>
      </Card>
    </motion.div>
  );
}
