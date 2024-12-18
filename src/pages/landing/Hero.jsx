import React from 'react';

import img from '../../assets/images/hero/Group2.svg';
import img2 from '../../assets/images/hero/Group3.svg';
export default function Hero() {
  return (
    <div id="heroBg" className="relative overflow-hidden">
      <div>
        <img
          src={img}
          alt="gradient svg one"
          draggable={false}
          className="absolute top-0 left-0"
        />
        <img
          src={img2}
          alt="gradient svg two"
          draggable={false}
          className="absolute bottom-0 right-0 -z-10 translate-x-28"
        />
      </div>
    </div>
  );
}
