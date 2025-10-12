// src/data/products.ts
import type { TypeProductCard } from "../types/product";
import imgFuriaNocturnaNegra from "../assets/como-entrenar-a-tu-dragon/furia-nocturna-negra-01.jpg";
import imgFuriaNocturnaBlanca from "../assets/como-entrenar-a-tu-dragon/furia-nocturna-blanca-01.jpg";

export const productsComoEntrenarATuDragon: TypeProductCard[] = [
  {
    id: "furia-nocturna-negra-01",
    name: "Chimuelo",
    price: 5000,
    image: [
      imgFuriaNocturnaNegra
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
      imgFuriaNocturnaBlanca
    ],
    size:{
      ancho:7.8,
      alto:8.32,
    },

  },
];
