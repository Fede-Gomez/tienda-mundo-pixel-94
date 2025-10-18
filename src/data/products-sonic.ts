
import { cabezaAmy01, cabezaEggman01, cabezaKnuckles01, cabezaShadow01, cabezaSonic01, cabezaTails01, figuraShadow03, figuraSonic01 } from "../assets/sonic";
import type { TypeProductCard } from "../types/product";


export const productsSonic: TypeProductCard[] = [
  {
    id: "cabeza-sonic-01",
    name: "Cabeza Sonic",
    price: 2000,
    image: [
      cabezaSonic01
    ],
    size:{
      ancho: 4.4,
      alto: 3.9
    },

  },
  {
    id: "cabeza-tails-01",
    name: "Cabeza Tails",
    price: 2000,
    image: [
      cabezaTails01
    ],
    size:{
      ancho: 4.1,
      alto: 3.9
    },

  },
  {
    id: "cabeza-knuckles-01",
    name: "Cabeza knuckles",
    price: 2000,
    image: [
      cabezaKnuckles01
    ],
    size:{
      ancho: 4.4,
      alto: 4.1
    },

  },
  {
    id: "cabeza-amy-01",
    name: "Cabeza Amy",
    price: 2000,
    image: [
      cabezaAmy01
    ],
    size:{
      ancho: 4.4,
      alto: 4.1
    },

  },
  {
    id: "cabeza-eggman-01",
    name: "Cabeza Eggman",
    price: 2000,
    image: [
      cabezaEggman01
    ],
    size:{
      ancho: 6.5,
      alto: 3.1
    },

  },
  {
    id: "cabeza-shadow-01",
    name: "Cabeza Shadow",
    price: 2000,
    image: [
      cabezaShadow01
    ],
    size:{
      ancho: 4.6,
      alto: 4.1
    },
  },
  {
    id: "sonic-01",
    name: "Sonic",
    price: 5500,
    image: [
      figuraSonic01
    ],
    size:{
      ancho: 6.2,
      alto: 9.8
    },
  },
  {
    id: "shadow-03",
    name: "Shadow",
    price: 7000,
    image: [
      figuraShadow03
    ],
    size:{
      ancho: 12.2,
      alto: 8.6
    },
  },
];
