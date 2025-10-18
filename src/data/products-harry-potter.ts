import { harryPotter01, hermione01, logoHarryPotter01, ron01, snitchDorada01 } from "../assets/harry-potter";
import type { TypeProductCard } from "../types/product";

export const productsHarryPotter: TypeProductCard[] = [
  {
    id: "harry-potter-01",
    name: "Harry Potter",
    price: 4000,
    image: [
      harryPotter01
    ],
            size:{
      ancho: 5.7,
      alto: 7.2
    },

  },
  {
    id: "ron-01",
    name: "Ron",
    price: 4000,
    image: [
      ron01
    ],
            size:{
      ancho: 5.7,
      alto: 7.2
    },

  },
  {
    id: "hermione-01",
    name: "Hermione",
    price: 4000,
    image: [
      hermione01
    ],
    size:{
      ancho: 5.7,
      alto: 7.2
    },

  },
  {
    id: "logo-harry-potter-01",
    name: "Logo Harry Potter",
    price: 2500,
    image: [
      logoHarryPotter01
    ],
    size:{
      ancho: 4.5,
      alto: 5.7
    },

  },
  {
    id: "snitch-dorada-01",
    name: "Snitch Dorada",
    price: 2000,
    image: [
      snitchDorada01
    ],
    size:{
      ancho: 8.6,
      alto: 3.1
    },

  },
];
