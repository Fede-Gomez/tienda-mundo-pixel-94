// src/data/products.ts
import type { TypeProductCard } from "../types/product";
import imgGrub from "../assets/hollow-knight/grub-01.jpg";
import imgGrim from "../assets/hollow-knight/grim-01.jpg";

export const productsHollowKnight: TypeProductCard[] = [
  {
    id: "grub-01",
    name: "Grub",
    price: 4000,
    image: [
      imgGrub
    ],
    size:{
      ancho: 5.4,
      alto: 7.5
    },
    stock: true
  },
  {
    id: "grim-01",
    name: "Grim",
    price: 5500,
    image: [
      imgGrim
    ],
    size:{
      ancho: 6,
      alto: 9.8
    },
    stock: true
  },
];
