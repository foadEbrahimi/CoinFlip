import React from "react";

import CardGetStarted from "@/components/myComponents/GetStarted/Card";

import { Button } from "@/components/ui/button";

import { GetStartedInfo } from "@/constants";

export default function GetStarted() {
  return (
    <div className="mt-44 flex h-[80dvh] w-full items-center ~px-5/24">
      <div className="flex w-full flex-col items-start justify-between gap-10 md:flex-row">
        <div className="space-y-6">
          <span className="font-Bold ~text-2xl/4xl">How To Get Started</span>
          <p className="max-w-[23rem] font-RegularRoboto text-lg text-[#B6B6B6]">
            Simple and easy way to start your investment in cryptocurrency
          </p>
          <Button className="bg-[#0FAE96] px-10 font-SemiBold" size="lg">
            Get Started
          </Button>
        </div>
        <div className="space-y-6">
          {GetStartedInfo.map((item) => (
            <CardGetStarted key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
