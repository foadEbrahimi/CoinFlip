import CardFaetures from "@/components/myComponents/Faetures/Card";
import { FaeturesInfo } from "@/constants";
import React from "react";

export default function Faetures() {
  return (
    <div className="mt-28 ~px-5/24">
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="font-Bold text-4xl">CryptoCap Amazing Faetures</span>
        <p className="text-center font-RegularRoboto text-lg text-[#B6B6B6]">
          Explore sensational features to prepare your best investment in
          cryptocurrency
        </p>
      </div>
      <div className="mt-16 flex flex-wrap gap-5">
        {FaeturesInfo.map((item) => (
          <CardFaetures key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
