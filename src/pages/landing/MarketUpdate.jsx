import { Input } from "@/components/ui/input";
import React from "react";

import { Button } from "@/components/ui/button";
import search from "/assets/images/MarketUpdate/search.png";

export default function MarketUpdate() {
  return (
    <div className="mb-10 mt-16 ~px-5/24">
      <div className="space-y-4">
        <span className="font-Bold text-3xl">Market Update</span>
        <p p className="font-RegularRoboto text-[#B6B6B6]">
          Cryptocurrency Categories
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div
          id="scroll"
          className="flex items-center gap-3 overflow-scroll xl:overflow-hidden"
        >
          <Button variant="filled">Popular</Button>
          <Button>Metaverse</Button>
          <Button>Entertainment</Button>
          <Button>Energy</Button>
          <Button>Gaming</Button>
          <Button>Music</Button>
          <Button>See All 12+</Button>
        </div>
        <Input
          placeholder="Search Coin"
          type="search"
          className="placeholder:font-RegularRoboto"
        >
          <img src={search} className="h-5 w-5" alt="search png" />
        </Input>
      </div>
    </div>
  );
}
