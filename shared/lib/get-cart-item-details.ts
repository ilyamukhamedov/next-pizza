import {
  mapPizzaType,
  PizzaSize,
  PizzaType,
  pizzaTypes,
} from "../constants/pizza";
import { Ingredient } from "@prisma/client";
import { CartStateItem } from "./get-cart-details";

export const getCartItemDetails = (
  pizzaType: PizzaType,
  pizzaSize: PizzaSize,
  ingredients: CartStateItem["ingredients"]
): string => {
  const details = [];

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    details.push(`${typeName} ${pizzaSize} cm`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return details.join(", ");
};
