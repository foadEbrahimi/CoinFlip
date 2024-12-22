import React, { useEffect, useState } from "react";

export default function LoaderFullScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div
      className={`absolute inset-0 ${isLoading ? "z-50 opacity-100" : "opacity-0"} flex flex-col items-center justify-center gap-2 bg-black backdrop-blur-sm transition-all`}
    >
      <div className="loader"></div>
      <span className="font-Bold">
        Please hold on, we’re updating our magic codes! 😊
      </span>
    </div>
  );
}
