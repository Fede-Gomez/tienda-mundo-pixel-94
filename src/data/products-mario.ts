import type { TypeProductCard } from "../types/product";
import { boo, hongo01, hongo02, mario3 } from "../assets/mario-bross";



export const productsMario: TypeProductCard[] = [
  {
    id: "mario-3-01",
    name: "Mario 3",
    price: 3500,
    image: [
      mario3
    ],
    size:{
      ancho: 5.4,
      alto: 6.2
    },
  },
    {
    id: "boo-01",
    name: "Boo",
    price: 3500,
    image: [
      boo
    ],
    size:{
      ancho: 5.4,
      alto: 6
    },
  },
  {
    id: "hongo-01",
    name: "Hongo rojo",
    price: 1500,
    image: [
      hongo01
    ],
    size:{
      ancho: 2.8,
      alto: 2.8
    },
  },
  {
    id: "hongo-02",
    name: "Hongo verde",
    price: 1500,
    image: [
      hongo02
    ],
    size:{
      ancho: 2.8,
      alto: 2.8
    },
  },
];
