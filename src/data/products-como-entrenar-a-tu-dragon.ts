// src/data/products.ts
import { furiaNocturnaBlanca, furiaNocturnaNegra } from "../assets/como-entrenar-a-tu-dragon";
import type { TypeProductCard } from "../types/product";

export const productsComoEntrenarATuDragon: TypeProductCard[] = [
  {
    id: "furia-nocturna-negra-01",
    name: "Chimuelo",
    price: 5000,
    image: [
      furiaNocturnaNegra
    ],
    size:{
      ancho:7.8,
      alto:8.32,
    },

  },
  {
    id: "furia-nocturna-blanca-01",
    name: "Furia Nocturna Blanca",
    price: 5000,
    image: [
      furiaNocturnaBlanca
    ],
    size:{
      ancho:7.8,
      alto:8.32,
    },

  },
];
