import React from "react";

import CardGetStarted from "@/components/myComponents/GetStarted/Card";

import { Button } from "@/components/ui/button";

import { GetStartedInfo } from "@/constants";

import { motion } from "motion/react";
export default function GetStarted() {
  return (
    <div className="mt-44 flex h-[80dvh] w-full items-center ~px-5/24 overflow-hidden">
      <div className="flex w-full flex-col items-start justify-between gap-10 md:flex-row">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 1,
          }}
          className="space-y-6"
        >
          <span className="font-Bold ~text-2xl/4xl">How To Get Started</span>
          <p className="max-w-[23rem] font-RegularRoboto text-lg text-[#B6B6B6]">
            Simple and easy way to start your investment in cryptocurrency
          </p>
          <Button className="bg-[#0FAE96] px-10 font-SemiBold" size="lg">
            Get Started
          </Button>
        </motion.div>
        <div className="space-y-6">
          {GetStartedInfo.map((item, index) => (
            <CardGetStarted key={item.id} {...item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
