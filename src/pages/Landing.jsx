import React from "react";

import Hero from "./landing/Hero";
import MarketTrend from "./landing/MarketTrend";
import Faetures from "./landing/Faetures";
import MarketUpdate from "./landing/MarketUpdate";
import GetStarted from "./landing/GetStarted";
import Blog from "./landing/Blog";
import Footer from "./landing/Footer";

export default function Landing() {
  return (
    <div>
      <Hero />
      <MarketTrend />
      <Faetures />
      <MarketUpdate />
      <GetStarted />
      <Blog />
      <Footer />
    </div>
  );
}
