import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";

import bitcoin from "/assets/images/logo/coin-icon.png";
import arrow from "/assets/images/MarketTrend/arrow.svg";
import chart1 from "/assets/images/MarketTrend/chart1.svg";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function CardMarket({ img, label, badge, price, percentage }) {
  return (
    <div className="grid grid-cols-4">
      <Card className="w-[297px] border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] p-5">
        <CardHeader className="items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={img} alt={`${label} image`} />
            <span className="font-SemiBold">{label}</span>
            <Badge className="font-SemiBold bg-[#C6C6C6] px-1 uppercase tracking-widest">
              {badge}
            </Badge>
          </div>
          <div className="cursor-pointer rounded-full bg-white/5 p-3">
            <img src={arrow} alt="bitcoin png" />
          </div>
        </CardHeader>
        <Separator className="my-4 bg-[#ECF1F0] opacity-5" />
        <CardFooter className="justify-between">
          <div className="space-y-2">
            <CardTitle className="font-RegularRoboto text-2xl tracking-wider">
              ${price}
            </CardTitle>
            <CardDescription className="font-RegularRoboto text-xl">
              {percentage}%
            </CardDescription>
          </div>
          <img src={chart1} alt="chart svg" className="h-full" />
        </CardFooter>
      </Card>
    </div>
  );
}
