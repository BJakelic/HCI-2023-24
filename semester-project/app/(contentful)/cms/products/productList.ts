import { TypeCategory } from "../../types/TypeCategory";
import { TypeProductDetailItem, TypeProductListItem } from "../../types/TypeProduct";

export const categories: TypeCategory[] = [
  {
    label: "laptop",
  },
  {
    label: "hardware",
  },
  {
    label: "device",
  },
  {
    label: "PC",
  },
];

export const products: TypeProductListItem[] = [
  {
    name: "HP Laptop",
    id: "4",
    description: "Ideal for students",
    category: [
      {
        label: "laptop",
      },
    ],
    image:
      "https://images.ctfassets.net/9ukmjns0f30z/7drvMkzIXeWeuzmHCGZbdj/e7478b9b0e408954b7ca3d48ebe3ea7c/hp_laptop.webp",
  },
];