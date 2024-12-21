import { Button } from "@/components/ui/button";
import React from "react";

export default function Content() {
  return (
    <div className="row-span-10 -row-start-9">
      <h1 className="mx-auto text-center font-Bold !leading-[120%] ~text-5xl/7xl lg:~max-w-2xl/xl">
        We make crypto clear and simple
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-center font-Regular md:text-lg text-[#898CA9]">
        Buy, sell, and grow your crypto with CoinFlip, the platform dedicated
        to every trader at every level.
      </p>
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
