import type { TypeProductCard } from "../types/product";
import { scorpion01 } from "../assets/mortal-kombat";



export const productsMortalKombat: TypeProductCard[] = [
  {
    id: "subzero-01",
    name: "Subzero",
    price: 3500,
    image: [
      scorpion01
    ],
    size:{
      ancho: 5.4,
      alto: 6.2
    },
  },
    {
    id: "scorpion-01",
    name: "Scorpion",
    price: 3500,
    image: [
      scorpion01
    ],
    size:{
      ancho: 5.4,
      alto: 6
    },
  },
];
