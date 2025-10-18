// src/data/products.ts
import type { TypeProductCard } from "../types/product";
import { grim01, grub01, hollowKnight01, hornet01 } from "../assets/hollow-knight";

export const productsHollowKnight: TypeProductCard[] = [
  {
    id: "grub-01",
    name: "Grub",
    price: 4000,
    image: [
      grub01
    ],
    size:{
      ancho: 5.4,
      alto: 7.5
    },

  },
  {
    id: "grim-01",
    name: "Grim",
    price: 5500,
    image: [
      grim01
    ],
    size:{
      ancho: 6,
      alto: 9.8
    },
  },
  {
    id: "hornet-01",
    name: "Hornet",
    price: 4500,
    image: [
      hornet01
    ],
    size:{
      ancho: 10.4,
      alto: 10.4
    },
  },
  {
    id: "hollow-knight-01",
    name: "Hollow Knight",
    price: 4500,
    image: [
      hollowKnight01
    ],
    size:{
      ancho: 5.5,
      alto: 9.6
    },
  },
];
