export * from "./icon/Arrow";

export const optionsCarrousel = [
  {
    ancla: "preferences",
    title: "How do you drink your coffee?",
    options: [
      {
        sub: "Capsule",
        summary: "Compatible with Nespresso systems and similar brewers",
      },
      {
        sub: "Filter",
        summary:
          "Four pour over or drip methods like Aeropress. Chemex, and V60",
      },
      {
        sub: "Espresso",
        summary:
          "Dense and Finely ground beans for an intense, flavorful experience",
      },
    ],
  },
  {
    ancla: "beanType",
    title: "What type of coffe?",
    options: [
      {
        sub: "Single origin",
        summary:
          "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        sub: "Decaf",
        summary:
          "Just like regular coffee, except the caffeine has been removed",
      },
      {
        sub: "Blended",
        summary:
          "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  },
  {
    ancla: "quantity",
    title: "How much would you like?",
    options: [
      {
        sub: "250g",
        summary:
          "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        sub: "500g",
        summary:
          "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        sub: "1000g",
        summary:
          "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
  },
  {
    ancla: "grindOption",
    title: "Hant us to grind them?",
    options: [
      {
        sub: "Wholebean",
        summary: "Best choice if you cherish the full sensory experience",
      },
      {
        sub: "Filter",
        summary:
          "For drip or pour-over coffee methods such as V60 or Aeropress",
      },
      {
        sub: "Cafetiére",
        summary: "Coarse ground beans specially suited for french press coffee",
      },
    ],
  },
  {
    ancla: "deliverie",
    title: "How often should we deliver?",
    options: [
      {
        sub: "Every week",
        summary:
          "Select quantity to view price. Includes free first-class shipping.",
      },
      {
        sub: "Every 2 weeks",
        summary:
          "Select quantity to view price. Includes free priority shipping.",
      },
      {
        sub: "Every month",
        summary:
          "Select quantity to view price. Includes free priority shipping.",
      },
    ],
  },
];

export const optionsNavigation = [
  {
    number: "01",
    title: "Preferences",
    href: "preferences",
  },
  {
    number: "02",
    title: "BeanType",
    href: "beanType",
  },
  {
    number: "03",
    title: "Quantity",
    href: "quantity",
  },
  {
    number: "04",
    title: "Grind Option",
    href: "grindOption",
  },
  {
    number: "05",
    title: "Deliveries",
    href: "deliverie",
  },
];
