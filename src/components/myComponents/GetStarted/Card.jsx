import React, { useRef } from "react";

import { Card, CardContent } from "@/components/ui/card";

import { motion, useInView } from "motion/react";

export default function CardGetStarted({ label, desc, img, index }) {
  const ref = useRef();
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        x: 100,
        opacity: 0,
      }}
      animate={{
        x: isInView ? 0 : 100,
        opacity: isInView ? 1 : 0,
      }}
      transition={{
        duration: 1,
        delay: 0.5 * index,
      }}
    >
      <Card className="rounded-lg border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)]">
        <CardContent className="flex items-center gap-5">
          <img src={img} alt="svg" />
          <div className="flex flex-col gap-2">
            <span className="font-SemiBold text-lg">{label}</span>
            <p className="font-RegularRoboto text-[#B6B6B6]">{desc}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
