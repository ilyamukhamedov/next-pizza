import React from "react";
import { PizzaImage } from "./pizza-image";
import { cn } from "@/shared/lib/utils";
import { Title } from "./title";
import { Button } from "../ui";
import { GroupVariants } from "./group-variants";
import {
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from "@/shared/constants/pizza";
import { IngredientItem } from "./ingredient-item";
import { Ingredient } from "@prisma/client";
import { useSet } from "react-use";

interface Props {
  imageUrl: string;
  name: string;
  className?: string;
  ingredients: Ingredient[];
  items?: any[];
  onClickAdd?: VoidFunction;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  ingredients,
  onClickAdd,
  className,
}) => {
  const [size, setSize] = React.useState<PizzaSize>(25);
  const [type, setType] = React.useState<PizzaType>(1);

  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );
  const textDetails = "30 cm, fluffy dough 30";
  const totalPrice = 5.5;
  return (
    <div className={cn("flex flex-1", className)}>
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetails}</p>

        <div className="flex flex-col gap-4 mt-5">
          <GroupVariants
            items={pizzaSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className="p-2 rounded-md h-[340px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button className="h-[52px] px-10 text-base rounded-[18px] w-full mt-5">
          Add to Cart {totalPrice} $
        </Button>
      </div>
    </div>
  );
};
