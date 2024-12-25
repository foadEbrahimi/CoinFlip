import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  ({ className, children, type, ...props }, ref) => {
    return (
      <div className="flex h-10 w-full sm:max-w-[17.5rem] items-center rounded-md border border-[rgba(255,255,255,0.1)] bg-[#160C24] px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[rgba(255,255,255,0.2)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
        {children}
        <input
          type={type}
          className={cn(
            "flex h-full w-full rounded-md bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
