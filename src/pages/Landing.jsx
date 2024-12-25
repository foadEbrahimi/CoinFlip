import React from "react";

import Hero from "./landing/Hero";
import MarketTrend from "./landing/MarketTrend";
import Faetures from "./landing/Faetures";
import MarketUpdate from "./landing/MarketUpdate";

export default function Landing() {
  return (
    <div className="">
      <Hero />
      <MarketTrend />
      <Faetures />
      <MarketUpdate />
    </div>
  );
}
