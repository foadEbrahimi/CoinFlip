import { Input } from "@/components/ui/input";
import React from "react";

import { Button } from "@/components/ui/button";
import search from "/assets/images/MarketUpdate/search.png";
import { TableDemo } from "@/components/myComponents/MarketUpdate/Table";

export default function MarketUpdate() {
  return (
    <div id="scroll" className="mb-10 mt-16 ~px-5/24">
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
          <Button variant="filledWhite">Popular</Button>
          <Button variant="border">Metaverse</Button>
          <Button variant="border">Entertainment</Button>
          <Button variant="border">Energy</Button>
          <Button variant="border">Gaming</Button>
          <Button variant="border">Music</Button>
          <Button variant="border">See All 12+</Button>
        </div>
        <Input
          placeholder="Search Coin"
          type="search"
          className="placeholder:font-RegularRoboto"
        >
          <img src={search} className="h-5 w-5" alt="search png" />
        </Input>
      </div>

      <TableDemo />
    </div>
  );
}
