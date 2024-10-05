import { Ingredient, ProductItem } from "@prisma/client";
import { PizzaType, PizzaSize } from "../constants/pizza";

/**
 *
 * @param type - dough type of chozen pizza
 * @param size - size of chozen pizza
 * @param items - list of variants
 * @param ingredients list of ingredients
 * @param selectedIngredients chosen ingredients
 * @returns number total cost
 */

export const calcTotalPizzaPrice = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice =
    items.find((item) => item.pizzaType === type && item.size === size)
      ?.price || 0;
  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  return pizzaPrice + totalIngredientsPrice;
};
