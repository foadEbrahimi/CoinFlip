import React, { useRef } from "react";

import ContentBlog from "@/components/myComponents/Blog/ContentBlog";

import { Badge } from "@/components/ui/badge";
import Card from "@/components/myComponents/Blog/Card";

import img from "/assets/images/Blog/bigImg.png";

import { BlogInfo } from "@/constants";

import { motion, useInView } from "motion/react";

export default function Blog() {
  const ref = useRef();
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <div className="mt-20 ~px-5/24">
      <ContentBlog />
      <div className="mb-10 mt-10 flex flex-col gap-10 lg:grid lg:grid-cols-12">
        <motion.div
          ref={ref}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isInView ? 1 : 0,
            opacity: isInView ? 1 : 0,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="relative col-span-6 h-[391px]"
        >
          <div className="absolute h-full w-full rounded-2xl bg-gradient-to-b from-[rgba(38,1,68,0.75)] to-[rgba(38,1,68,0.75)]"></div>
          <img
            src={img}
            alt="big img"
            className="h-full w-full rounded-2xl object-cover"
          />
          <div className="absolute bottom-3 left-0 z-10 flex flex-col gap-2 p-3 px-5">
            <span className="font-Bold text-4xl leading-[2.5rem]">
              All about Investing in NFTs and related risks
            </span>
            <Badge className="w-fit bg-[rgba(255,255,255,0.07)] px-2 py-1 uppercase text-[#B6B6B6]">
              CRYPTO BASIC
            </Badge>
          </div>
        </motion.div>
        <div className="space-y-5 sm:col-span-6 sm:grid sm:grid-cols-12 sm:gap-10 sm:space-y-0">
          {BlogInfo.slice(0, 2).map((item, index) => (
            <Card
              key={item.id}
              index={index}
              {...item}
              className="col-span-6"
            />
          ))}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {BlogInfo.slice(2, 6).map((item, index) => (
          <Card index={index + 3} key={item.id} {...item} />
        ))}
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6, duration: 1 }}
        className="mt-10 flex font-SemiBold text-[16px] text-[#0FAE96] underline underline-offset-2"
      >
        See All Articles
      </motion.span>
    </div>
  );
}
