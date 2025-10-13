import type { TypeProductCard } from "../types/product";
import imgGoku01 from "../assets/dragon-ball/goku-ultra-instinct-01.jpg";
import imgGohan01 from "../assets/dragon-ball/gohan-ssj2-01.jpg";
import imgRadarDelDragon01 from "../assets/dragon-ball/radar-del-dragon-01.jpg";



export const productsDragonBall: TypeProductCard[] = [
  {
    id: "goku-ultra-instinct-01",
    name: "Goku Ultrainstinct",
    price: 7500,
    image: [
      imgGoku01
    ],
            size:{
      ancho: 6.7,
      alto: 9.1
    },

  },
  {
    id: "gohan-ssj2-01",
    name: "Gohan SSJ2",
    price: 4500,
    image: [
      imgGohan01
    ],
            size:{
      ancho: 5.4,
      alto: 8.6
    },

  },
  {
    id: "radar-del-dragon-01",
    name: "Radar del dragon",
    price: 3000,
    image: [
      imgRadarDelDragon01
    ],
            size:{
      ancho: 4.6,
      alto: 5.7
    },

  },
];
