import React from "react";

import { MarketTrending } from "@/constants";

import CardMarket from "@/components/myComponents/MarketTrend/Card";

export default function MarketTrend() {
  return (
    <div className="space-y-3 ~px-5/24">
      <span className="font-SemiBold text-3xl">Market Trend</span>
      <div className="flex flex-wrap gap-5">
        {MarketTrending.map((item) => (
          <CardMarket {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
