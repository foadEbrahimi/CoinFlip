import React from "react";

import { Badge } from "@/components/ui/badge";

export default function Card({ label, className, desc, img, tag }) {
  return (
    <div className={className}>
      <img src={img} alt="img" className="w-full object-cover" />
      <div className="flex flex-col gap-4 rounded-b-xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] p-4 pb-9">
        <Badge className="w-fit bg-[rgba(255,255,255,0.07)] px-2 text-[#B6B6B6]">
          {tag}
        </Badge>
        <span className="font-SemiBold">{label}</span>
        <p className="text-sm text-[#B6B6B6]">{desc}</p>
      </div>
    </div>
  );
}
