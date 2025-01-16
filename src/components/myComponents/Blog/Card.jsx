import React, { useRef } from "react";

import { Badge } from "@/components/ui/badge";
import { CardTitle } from "@/components/ui/card";

import { motion, useInView } from "motion/react";

export default function CardBlog({ label, className, desc, img, tag, index }) {
  const ref = useRef();
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      whileHover={{
        scale: 1.05,
      }}
      initial={{
        y: 100,
        opacity: 0,
      }}
      animate={{
        y: isInView ? 0 : 100,
        opacity: isInView ? 1 : 0,
      }}
      transition={{
        duration: 1.5,
        delay: 0.5 * index,
        scale: {
          duration: 0.2,
        },
      }}
      className={`${className} flex min-h-[391px] w-full flex-col p-0`}
    >
      <img
        src={img}
        alt="img"
        className="flex w-full flex-1 rounded-t-lg object-cover"
      />
      <div className="flex flex-1 flex-col gap-4 rounded-b-xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] p-4 pb-9">
        <Badge className="w-fit bg-[rgba(255,255,255,0.07)] px-2 text-[#B6B6B6]">
          {tag}
        </Badge>
        <CardTitle className="font-SemiBold text-[17px]">{label}</CardTitle>
        <p className="line-clamp-2 text-sm text-[#B6B6B6]">{desc}</p>
      </div>
    </motion.div>
  );
}
