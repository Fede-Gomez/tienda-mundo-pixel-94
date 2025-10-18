// src/data/products.ts
import { cabezaCuphead, cabezaMugman, cuphead01 } from "../assets/cuphead";
import type { TypeProductCard } from "../types/product";


export const productsCuphead: TypeProductCard[] = [
  {
    id: "cuphead-01",
    name: "Cuphead",
    price: 6500,
    image: [
      cuphead01
    ],
    size:{
      ancho: 7.5,
      alto: 7.9
    },

  },
  {
    id: "cabeza-cuphead-01",
    name: "Cabeza Cuphead",
    price: 3500
,
    image: [
      cabezaCuphead
    ],
    size:{
      ancho: 9.6,
      alto: 7.54
    },

  },
  {
    id: "cabeza-mugman-01",
    name: "Cabeza Mugman",
    price: 3500,
    image: [
      cabezaMugman
    ],
    size:{
      ancho: 8.5,
      alto: 8.6
    },

  },
];
