import React from "react";

import { Card, CardContent } from "@/components/ui/card";

export default function CardGetStarted({ label, desc, img }) {
  return (
    <Card className="rounded-lg border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)]">
      <CardContent className="flex items-center gap-5">
        <img src={img} alt="svg" />
        <div className="flex flex-col gap-2">
          <span className="font-SemiBold text-lg">{label}</span>
          <p className="font-RegularRoboto text-[#B6B6B6]">{desc}</p>
        </div>
      </CardContent>
    </Card>
  );
}
