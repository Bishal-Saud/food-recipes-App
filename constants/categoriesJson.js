import { images, foods } from "@/constants";
export const categoriesJson = [
  {
    id: 1,
    title: "Breakfast Delights",
    image: images.breakfastDelights,
    description:
      "Start your day with a variety of delicious and energizing breakfast recipes.",
    items: [
      {
        name: "Classic Pancakes",
        description:
          "Fluffy pancakes served with a drizzle of maple syrup and a dollop of butter, perfect for a cozy morning start.",
        image: foods.classicPenCakes,
      },
      {
        name: "Avocado Toast",
        description:
          "Crispy whole-grain toast topped with creamy avocado, a sprinkle of chili flakes, and a dash of lime juice.",
        image: foods.avocadoToast,
      },
      {
        name: "Berry Smoothie Bowl",
        description:
          "A refreshing blend of berries, banana, and yogurt, topped with granola, chia seeds, and fresh fruit slices.",
        image: foods.berrySmoothieBowl,
      },
      {
        name: "Egg and Veggie Wrap",
        description:
          "A wholesome wrap filled with scrambled eggs, sautéed veggies, and a touch of melted cheese.",
        image: foods.eggandVeggieWrap,
      },
      {
        name: "Overnight Oats",
        description:
          "A creamy mix of oats, almond milk, and honey soaked overnight, topped with fresh fruits and nuts.",
        image: foods.overnigntOats,
      },
      {
        name: "Banana Nut Muffins",
        description:
          "Soft and moist muffins packed with banana flavor and crunchy walnuts, perfect for an on-the-go breakfast.",
        image: foods.bananaNutMuffins,
      },
      {
        name: "Greek Yogurt Parfait",
        description:
          "Layers of creamy Greek yogurt, granola, and honey, finished with a medley of seasonal fruits.",
        image: foods.greekYougurtParfait,
      },
    ],
  },
  {
    id: 2,
    title: "Lunch Favorites",
    image: images.lunchFavorites,
    description: "Enjoy hearty and flavorful meals perfect for midday dining.",
    items: [
      {
        name: "Grilled Chicken Salad",
        description:
          "A light and healthy salad with tender grilled chicken, crisp veggies, and a tangy vinaigrette.",
        image: foods.grilledChickenSalad,
      },
      {
        name: "Vegetarian Buddha Bowl",
        description:
          "A colorful bowl of quinoa, roasted vegetables, and a creamy tahini dressing.",
        image: foods.vegetarianBuddhaBowl,
      },
      {
        name: "Spaghetti Bolognese",
        description:
          "Classic spaghetti with a rich and savory meat sauce, topped with parmesan cheese.",
        image: foods.spaghettiBolognese,
      },
      {
        name: "Turkey Club Sandwich",
        description:
          "A hearty sandwich stacked with turkey, crispy bacon, lettuce, and tomato.",
        image: foods.turkeyClubSandwich,
      },
      {
        name: "Soup and Breadsticks",
        description:
          "Warm and comforting soup paired with soft and buttery breadsticks.",
        image: foods.soupandBreadSticks,
      },
      {
        name: "Chicken Stir-Fry",
        description:
          "Tender chicken and fresh vegetables stir-fried in a flavorful soy sauce glaze.",
        image: foods.chickenStirFry,
      },
      {
        name: "Margarita Flatbread",
        description:
          "A thin crust flatbread topped with fresh tomatoes, mozzarella, and basil.",
        image: foods.margaritaFlatbread,
      },
    ],
  },
  {
    id: 3,
    title: "Dinner Specials",
    image: images.dinnerSpecial,
    description:
      "Savor these carefully curated dinner recipes for a satisfying evening meal.",
    items: [
      {
        name: "Herb-Crusted Salmon",
        description:
          "A succulent salmon fillet with a crispy herb crust, served with steamed asparagus.",
        image: foods.herbCrustedSalmon,
      },
      {
        name: "Beef Stroganoff",
        description:
          "Tender beef strips in a creamy mushroom sauce, served over egg noodles.",
        image: foods.beefStroganoff,
      },
      {
        name: "Vegetarian Lasagna",
        description:
          "Layered lasagna with fresh vegetables, ricotta cheese, and a zesty marinara sauce.",
        image: foods.vegetarianLasagna,
      },
      {
        name: "Chicken Parmesan",
        description:
          "Crispy breaded chicken topped with marinara and melted mozzarella, served over pasta.",
        image: foods.chickenParmesan,
      },
      {
        name: "Grilled Ribeye Steak",
        description:
          "A perfectly grilled ribeye steak served with garlic mashed potatoes.",
        image: foods.grilledRibeyeSteak,
      },
      {
        name: "Shrimp Scampi",
        description:
          "Juicy shrimp sautéed in garlic butter sauce, served over linguine.",
        image: foods.shrimpScampi,
      },
      {
        name: "Stuffed Bell Peppers",
        description:
          "Bell peppers stuffed with seasoned rice, ground beef, and cheese, baked to perfection.",
        image: foods.stuffedBellPeppers,
      },
    ],
  },
  {
    id: 4,
    title: "Fast Food & Snacks",
    image: images.fastFood,
    description:
      "Quick, tasty, and fun options for snacks and fast food cravings.",
    items: [
      {
        name: "Classic Cheeseburger",
        description:
          "Juicy beef patty topped with melted cheese, lettuce, tomato, and pickles.",
        image: foods.classicCheeseburger,
      },
      {
        name: "Loaded Nachos",
        description:
          "Crispy tortilla chips topped with melted cheese, jalapeños, and a dollop of sour cream.",
        image: foods.loadedNachos,
      },
      {
        name: "Chicken Tenders",
        description:
          "Crispy, golden-brown chicken tenders served with a tangy dipping sauce.",
        image: foods.chickenTenders,
      },
      {
        name: "Veggie Spring Rolls",
        description:
          "Crispy spring rolls filled with a savory mix of fresh vegetables.",
        image: foods.veggieSpringRolls,
      },
      {
        name: "Mozzarella Sticks",
        description:
          "Golden-fried mozzarella sticks served with marinara sauce for dipping.",
        image: foods.mozzarellaSticks,
      },
      {
        name: "French Fries",
        description: "Classic crispy fries, golden and seasoned to perfection.",
        image: foods.frenchFries,
      },
      {
        name: "Mini Sliders",
        description:
          "Small but flavorful sliders with juicy patties and all the fixings.",
        image: foods.miniSliders,
      },
    ],
  },
  {
    id: 5,
    title: "Healthy Recipes",
    image: images.healthyRecipe,
    description:
      "Nutritious and wholesome recipes to keep you fit and healthy.",
    items: [
      {
        name: "Quinoa Salad",
        description:
          "A protein-packed salad with quinoa, fresh vegetables, and a lemon dressing.",
        image: foods.quinoaSalad,
      },
      {
        name: "Grilled Veggie Wraps",
        description:
          "A whole-grain wrap filled with grilled vegetables and a light hummus spread.",
        image: foods.grilledVeggieWraps,
      },
      {
        name: "Green Smoothie",
        description:
          "A refreshing blend of spinach, kale, banana, and almond milk.",
        image: foods.greenSmoothie,
      },
      {
        name: "Baked Salmon",
        description:
          "A tender salmon fillet baked with herbs and a hint of lemon.",
        image: foods.bakedSalmon,
      },
      {
        name: "Sweet Potato Toast",
        description:
          "Roasted sweet potato slices topped with avocado and cherry tomatoes.",
        image: foods.sweetPotatoToast,
      },
      {
        name: "Kale and Chickpea Stew",
        description:
          "A hearty stew made with kale, chickpeas, and a flavorful tomato broth.",
        image: foods.kaleandChickpeaStew,
      },
      {
        name: "Zucchini Noodles",
        description:
          "Fresh zucchini spirals served with a light marinara sauce.",
        image: foods.zucchiniNoodles,
      },
    ],
  },
  {
    id: 6,
    title: "Desserts & Sweets",
    image: images.dessertsSweet,
    description: "Indulge in a variety of sweet treats and decadent desserts.",
    items: [
      {
        name: "Chocolate Lava Cake",
        description: "A rich and gooey chocolate cake with a molten center.",
        image: foods.chocolateLavaCake,
      },
      {
        name: "Vanilla Cheesecake",
        description: "Creamy cheesecake with a buttery graham cracker crust.",
        image: foods.vanillaCheesecake,
      },
      {
        name: "Berry Tart",
        description:
          "A flaky tart shell filled with custard and topped with fresh berries.",
        image: foods.berryTart,
      },
      {
        name: "Cinnamon Rolls",
        description:
          "Soft and fluffy rolls with a sweet cinnamon filling and creamy glaze.",
        image: foods.cinnamonRolls,
      },
      {
        name: "Ice Cream Sundae",
        description:
          "Scoops of ice cream topped with chocolate syrup, whipped cream, and a cherry.",
        image: foods.iceCreamSundae,
      },
      {
        name: "Macarons",
        description:
          "Delicate French cookies with a creamy filling in assorted flavors.",
        image: foods.macarons,
      },
      {
        name: "Carrot Cake",
        description: "Moist carrot cake with a rich cream cheese frosting.",
        image: foods.carrotCake,
      },
    ],
  },
  {
    id: 7,
    title: "Drinks & Beverages",
    image: images.drinks,
    description:
      "Refresh yourself with a range of drinks and beverage recipes.",
    items: [
      {
        name: "Iced Coffee",
        description: "Chilled coffee served over ice with a splash of milk.",
        image: foods.icedCoffee,
      },
      {
        name: "Lemonade",
        description: "Refreshing lemonade made with freshly squeezed lemons.",
        image: foods.lemonade,
      },
      {
        name: "Mango Smoothie",
        description:
          "A creamy and tropical smoothie with ripe mangoes and yogurt.",
        image: foods.mangoSmoothie,
      },
      {
        name: "Hot Chocolate",
        description: "Rich and creamy hot chocolate topped with marshmallows.",
        image: foods.hotChocolate,
      },
      {
        name: "Green Tea",
        description: "A soothing cup of antioxidant-rich green tea.",
        image: foods.greenTea,
      },
      {
        name: "Berry Iced Tea",
        description: "A fruity and refreshing iced tea with mixed berries.",
        image: foods.berryIcedTea,
      },
      {
        name: "Coconut Water",
        description: "Hydrating and naturally sweet coconut water.",
        image: foods.coconutWater,
      },
    ],
  },
];
