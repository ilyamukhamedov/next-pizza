import React from "react";
import { ProductImage } from "./product-image";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { Button } from "../ui";

interface Props {
  imageUrl: string;
  name: string;
  className?: string;
  ingredients: any[];
  items?: any[];
  onClickAdd?: VoidFunction;
}

export const ChooseProductForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  ingredients,
  onClickAdd,
  className,
}) => {
  const textDetails = "30 cm, fluffy dough 30";
  const totalPrice = 5.5;
  return (
    <div className={cn("flex flex-1", className)}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
        />
      </div>

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>

        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Add to Cart {totalPrice} $
        </Button>
      </div>
    </div>
  );
};