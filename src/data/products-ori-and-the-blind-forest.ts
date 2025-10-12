import type { TypeProductCard } from "../types/product";
import imgOri01 from "../assets/ori-and-the-blind-forest/ori-01.jpg";



export const productsOriAndTheBlindForest: TypeProductCard[] = [
  {
    id: "ori-01",
    name: "Ori",
    price: 5000,
    image: [
      imgOri01
    ],
    size:{
      ancho: 7.5,
      alto: 7.8
    },
    stock: true
  },
];
