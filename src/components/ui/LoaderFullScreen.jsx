import React from "react";

export default function LoaderFullScreen() {
  return (
    <div
      className={`absolute inset-0 z-50 flex flex-col items-center justify-center gap-2 bg-black backdrop-blur-sm transition-all`}
    >
      <div className="loader"></div>
      <span className="font-Bold">
        Please hold on, we’re updating our magic codes! 😊
      </span>
    </div>
  );
}
