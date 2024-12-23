import React from "react";

import Hero from "./landing/Hero";
import CardMarket from "@/components/myComponents/MarketTrend/Card";
import { MarketTrending } from "@/constants";

export default function Landing() {
  return (
    <div className="">
      <Hero />
      <div className="grid -mt-20 grid-cols-4 py-10 ~px-5/24">
        {MarketTrending.map((item) => (
          <CardMarket {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
