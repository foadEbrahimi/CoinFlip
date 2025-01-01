import React from "react";

import { Badge } from "@/components/ui/badge";
import { CardTitle } from "@/components/ui/card";

export default function CardBlog({ label, className, desc, img, tag }) {
  return (
    <div className={`${className} flex min-h-[391px] w-full flex-col p-0`}>
      <img src={img} alt="img" className="flex rounded-t-lg w-full flex-1 object-cover" />
      <div className="flex flex-1 flex-col gap-4 rounded-b-xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] p-4 pb-9">
        <Badge className="w-fit bg-[rgba(255,255,255,0.07)] px-2 text-[#B6B6B6]">
          {tag}
        </Badge>
        <CardTitle className="font-SemiBold text-[17px]">{label}</CardTitle>
        <p className="line-clamp-2 text-sm text-[#B6B6B6]">{desc}</p>
      </div>
    </div>
  );
}
