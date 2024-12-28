import React from "react";
import CardFaetures from "@/components/myComponents/Faetures/Card";
import { FaeturesInfo } from "@/constants";
import { Button } from "@/components/ui/button";

export default function Faetures() {
  return (
    <div className="mt-28 ~px-5/24">
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="font-Bold text-4xl">CryptoCap Amazing Faetures</span>
        <p className="text-center font-RegularRoboto text-lg text-[#B6B6B6]">
          Explore sensational features to prepare your best investment in
          cryptocurrency
        </p>
      </div>
      <div className="mt-16 flex flex-wrap gap-5">
        {FaeturesInfo.map((item) => (
          <CardFaetures key={item.id} {...item} />
        ))}
      </div>

      <div className="mb-10 mt-24 items-center justify-between space-y-5 rounded-xl border border-[rgba(255,255,255,0.08)] p-6 ~px-5/14 sm:flex">
        <div className="space-y-3">
          <span className="font-SemiBold text-2xl">New In Cryptocurrency?</span>
          <p className="max-w-[29rem] font-RegularRoboto text-[#B6B6B6]">
            We'll tell you what cryptocurrencies are, how they work and why you
            should own one right now. So let's do it.
          </p>
        </div>
        <Button className="rounded-lg p-6 text-[15px] bg-[#0FAE96] font-SemiBold">
          Learn & Explore Now
        </Button>
      </div>
    </div>
  );
}
