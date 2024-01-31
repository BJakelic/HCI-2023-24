import { TypeCategory } from "../../types/TypeCategory";
import { TypeProductDetailItem, TypeProductListItem } from "../../types/TypeProduct";

export const categories: TypeCategory[] = [
  {
    label: "laptop",
  },
  {
    label: "equipment",
  },
  {
    label: "devices",
  },
];

export const products: TypeProductDetailItem[] = [
  {
    name: "HP Laptop",
    id: "11",
    listed: true,
    description: "Ideal for students",
    price: 500,
    currencyCode: "EUR",
    categories: [
      {
        label: "laptop",
      },
    ],
    heroImage:
      "https://images.ctfassets.net/9ukmjns0f30z/7drvMkzIXeWeuzmHCGZbdj/e7478b9b0e408954b7ca3d48ebe3ea7c/hp_laptop.webp",
    images: [],
  },
];