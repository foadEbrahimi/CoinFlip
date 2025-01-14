import React from "react";

import CardFaetures from "@/components/myComponents/Faetures/Card";

import { Button } from "@/components/ui/button";
import { FaeturesInfo } from "@/constants";

import { motion } from "motion/react";
export default function Faetures() {
  return (
    <div className="mt-28 ~px-5/24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col items-center justify-center gap-4"
      >
        <span className="font-Bold text-4xl">CryptoCap Amazing Faetures</span>
        <p className="text-center font-RegularRoboto text-lg text-[#B6B6B6]">
          Explore sensational features to prepare your best investment in
          cryptocurrency
        </p>
      </motion.div>
      <div className="mt-16 flex flex-wrap gap-5">
        {FaeturesInfo.map((item) => (
          <CardFaetures key={item.id} {...item} />
        ))}
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="mb-10 mt-24 items-center justify-between space-y-5 rounded-xl border border-[rgba(255,255,255,0.08)] p-6 ~px-5/14 sm:flex"
      >
        <div className="space-y-3">
          <span className="font-SemiBold text-2xl">New In Cryptocurrency?</span>
          <p className="max-w-[29rem] font-RegularRoboto text-[#B6B6B6]">
            We'll tell you what cryptocurrencies are, how they work and why you
            should own one right now. So let's do it.
          </p>
        </div>
        <Button className="rounded-lg bg-[#0FAE96] p-6 font-SemiBold text-[15px]">
          Learn & Explore Now
        </Button>
      </motion.div>
    </div>
  );
}
