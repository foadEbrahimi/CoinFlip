import React from "react";

import Hero from "./landing/Hero";
import CardMarket from "@/components/myComponents/MarketTrend/Card";

export default function Landing() {
  return (
    <div className="">
      <Hero />
      <div className="~px-5/24 py-10">
        <CardMarket />
      </div>
    </div>
  );
}
