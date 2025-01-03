import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import arrow from "/assets/images/Faetures/arrow.svg";

export default function CardFaetures({ img, title, decs }) {
  return (
    <Card className="w-full min-w-fit flex-1 space-y-10">
      <CardHeader>
        <img src={img} alt="svg" />
      </CardHeader>
      <CardContent className="space-y-2">
        <CardTitle className="font-SemiBold text-2xl">{title}</CardTitle>
        <CardDescription className="font-RegularRoboto sm:max-w-60">
          {decs}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-9">
        <button className="group flex items-center gap-2 font-Medium text-[#0FAE96]">
          See Explained{" "}
          <img
            src={arrow}
            alt="arrow svg"
            className="transition-all duration-300 group-hover:translate-x-2"
          />
        </button>
      </CardFooter>
    </Card>
  );
}
