export const categories = [
  {
    name: "Pizza",
    id: 1,
  },
  {
    name: "Breakfast",
    id: 2,
  },
  {
    name: "Starters",
    id: 3,
  },
  {
    name: "Drinks",
    id: 4,
  },
  {
    name: "Deserts",
    id: 5,
  },
];

export const ingredients = [
  {
    name: "Cheese side",
    price: 1.6,
    imageUrl: "/ingredients/cheeseSide.png",
  },
  {
    name: "Spicy beef",
    price: 1.5,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png",
  },
  {
    name: "Mozzarella",
    price: 1,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png",
  },
  {
    name: "Cheddar and Parmesan",
    price: 1,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796",
  },
  {
    name: "Jalapeno",
    price: 0.7,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png",
  },
  {
    name: "Chicken",
    price: 1,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A",
  },
  {
    name: "Champignons",
    price: 0.7,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324",
  },
  {
    name: "Bacon",
    price: 1,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61",
  },
  {
    name: "Ham",
    price: 1,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61",
  },
  {
    name: "Spicy Pepperoni",
    price: 1,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3",
  },
  {
    name: "Spicy chorizo",
    price: 1,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027",
  },
  {
    name: "Pickles",
    price: 0.7,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B",
  },
  {
    name: "Tomatoes",
    price: 0.7,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67",
  },
  {
    name: "Red onion",
    price: 0.7,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C",
  },
  {
    name: "Pineapple",
    price: 0.7,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0",
  },
  {
    name: "Italian Herbs",
    price: 0.5,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png",
  },
  {
    name: "Sweet Pepper",
    price: 0.7,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B",
  },
  {
    name: "Feta cheese",
    price: 1,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349",
  },
  {
    name: "Meatballs",
    price: 1.5,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png",
  },
  {
    name: "Bavarian sausages",
    price: 1.5,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png",
  },
  {
    name: "Shrimps",
    price: 2,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "Omelette with ham and mushrooms",
    imageUrl: "/breakfast/omelette-ham-mushrooms.png",
    categoryId: 2,
  },
  {
    name: "Omelette with pepperoni",
    imageUrl: "/breakfast/omelette-pepperoni.png",
    categoryId: 2,
  },
  {
    name: "Omelette with cheese",
    imageUrl: "/breakfast/omelette-cheese.png",
    categoryId: 2,
  },
  {
    name: "Omelette with bacon",
    imageUrl: "/breakfast/omelette-bacon.png",
    categoryId: 2,
  },
  {
    name: "Dodster with ham",
    imageUrl: "/starters/dodster-ham.avif",
    categoryId: 2,
  },
  {
    name: "Coffee Latte",
    imageUrl: "/coffee/latte.avif",
    categoryId: 2,
  },
  {
    name: "Cappuccino",
    imageUrl: "/coffee/cappuccino.avif",
    categoryId: 2,
  },
  {
    name: "Coffee Americano",
    imageUrl: "/coffee/americano.avif",
    categoryId: 2,
  },
  {
    name: "Pasta with shrimps",
    imageUrl: "/starters/pasta-shrimps.png",
    categoryId: 3,
  },
  {
    name: "Danwich with ham and cheese",
    imageUrl: "/starters/danwich-ham-cheese.avif",
    categoryId: 3,
  },
  {
    name: "Danwich chorizo barbecue",
    imageUrl: "/starters/danwich-chorizo-barbecue.avif",
    categoryId: 3,
  },
  {
    name: "Pasta Carbonara",
    imageUrl: "/starters/pasta-carbonara.avif",
    categoryId: 3,
  },
  {
    name: "Pasta with meat",
    imageUrl: "/starters/pasta-meat.avif",
    categoryId: 3,
  },
  {
    name: "Pasta Pesto",
    imageUrl: "/starters/pasta-pesto.avif",
    categoryId: 3,
  },
  {
    name: "Dodster extra meat",
    imageUrl: "/starters/dodster-extra-meat.avif",
    categoryId: 3,
  },
  {
    name: "Dodster with ham",
    imageUrl: "/starters/dodster-ham.avif",
    categoryId: 3,
  },
  {
    name: "Dodster",
    imageUrl: "/starters/dodster.avif",
    categoryId: 3,
  },
  {
    name: "Hot Dodster 🌶️🌶️",
    imageUrl: "/starters/dodster-hot.avif",
    categoryId: 3,
  },
  {
    name: "Starter with mushrooms 🌱",
    imageUrl: "/starters/starter-mushroom.png",
    categoryId: 3,
  },
  {
    name: "Starter with cheese 🌱",
    imageUrl: "/starters/starter-cheese.png",
    categoryId: 3,
  },
  {
    name: "Fries with sauce 🌱",
    imageUrl: "/starters/small/fries-sauce.avif",
    categoryId: 3,
  },
  {
    name: "Fries 🌱",
    imageUrl: "/starters/small/fries.avif",
    categoryId: 3,
  },
  {
    name: "Chicken nuggets",
    imageUrl: "/starters/small/chicken-nuggets.avif",
    categoryId: 3,
  },
  {
    name: "Chicken bites",
    imageUrl: "/starters/small/chicken-bites.avif",
    categoryId: 3,
  },
  {
    name: "Chicken wings",
    imageUrl: "/starters/small/chicken-wings.avif",
    categoryId: 3,
  },
  {
    name: "Chicken wings lunchbox",
    imageUrl: "/starters/chicken-wings-lunchbox.avif",
    categoryId: 3,
  },
  {
    name: "Chicken bites lunchbox",
    imageUrl: "/starters/chicken-bites-lunchbox.avif",
    categoryId: 3,
  },
  {
    name: "Bavarian lunchbox",
    imageUrl: "/starters/bavarian-lunchbox.avif",
    categoryId: 3,
  },
  {
    name: "Caesar salad",
    imageUrl: "/starters/caesar-salad.avif",
    categoryId: 3,
  },
  {
    name: "Caramel Cappuccino",
    imageUrl: "/coffee/caramel-cappuccino.avif",
    categoryId: 4,
  },
  {
    name: "Coconut Latte",
    imageUrl: "/coffee/coconut-latte.avif",
    categoryId: 4,
  },
  {
    name: "Coffee Americano",
    imageUrl: "/coffee/americano.avif",
    categoryId: 4,
  },
  {
    name: "Cappuccino",
    imageUrl: "/coffee/cappuccino.avif",
    categoryId: 4,
  },
  {
    name: "Coffee Latte",
    imageUrl: "/coffee/latte.avif",
    categoryId: 4,
  },
  {
    name: "Coffee Latte",
    imageUrl: "/coffee/latte.avif",
    categoryId: 4,
  },
  {
    name: "Sticks with pineapple and lingonberry",
    imageUrl: "/deserts/sticks-pineapple-lingonberry.avif",
    categoryId: 5,
  },
  {
    name: "Cheesecake New York",
    imageUrl: "/deserts/cheesecake-new-york.avif",
    categoryId: 5,
  },
  {
    name: "Cheesecake with banana and chocolate",
    imageUrl: "/deserts/cheesecake-banana-chocolate.avif",
    categoryId: 5,
  },
  {
    name: "Chocolate cookie",
    imageUrl: "/deserts/chocolate-cookie.avif",
    categoryId: 5,
  },
  {
    name: "Brownie",
    imageUrl: "/deserts/brownie.avif",
    categoryId: 5,
  },
  {
    name: "Salted caramel muffin",
    imageUrl: "/deserts/muffin-salt-caramel.avif",
    categoryId: 5,
  },
  {
    name: "Triple chocolate muffin",
    imageUrl: "/deserts/muffin-three-chocolate.avif",
    categoryId: 5,
  },
  {
    name: "Lingonberry rolls",
    imageUrl: "/deserts/lingonberry-rolls.avif",
    categoryId: 5,
  },
  {
    name: "Cinnamon rolls",
    imageUrl: "/deserts/cinnamon-rolls.avif",
    categoryId: 5,
  },
];
