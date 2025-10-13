// src/data/products.ts
import type { TypeProductCard } from "../types/product";
import imgCuphead01 from "../assets/cuphead/cuphead-01.jpeg";
import imgCabezaCuphead01 from "../assets/cuphead/cabeza-cuphead-01.jpeg";
import imgCabezaMugman01 from "../assets/cuphead/cabeza-mugman-01.jpeg";


export const productsCuphead: TypeProductCard[] = [
  {
    id: "cuphead-01",
    name: "Cuphead",
    price: 6500,
    image: [
      imgCuphead01
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
      imgCabezaCuphead01
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
      imgCabezaMugman01
    ],
    size:{
      ancho: 8.5,
      alto: 8.6
    },

  },
];
