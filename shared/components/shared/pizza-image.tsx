import React from "react";
import { cn } from "@/shared/lib/utils";

interface Props {
  className?: string;
  imageUrl: string;
  size: 25 | 30 | 35;
}

export const PizzaImage: React.FC<Props> = ({ imageUrl, size, className }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center flex-1 relative w-full",
        className
      )}
    >
      <img
        src={imageUrl}
        alt="Logo"
        className={cn(
          "relative left-2 top-3 transition-all z-10 duration-300",
          {
            "w-[310px] h-[310px]": size === 25,
            "w-[410px] h-[410px]": size === 30,
            "w-[500px] h-[500px]": size === 35,
          }
        )}
      />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px] " />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-100 w-[370px] h-[370px] " />
    </div>
  );
};