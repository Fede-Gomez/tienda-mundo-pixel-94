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
    stock: true
  },
  {
    id: "gohan-ssj2-01",
    name: "Gohan SSJ2",
    price: 4500,
    image: [
      imgGohan01
    ],
    stock: true
  },
  {
    id: "radar-del-dragon-01",
    name: "Radar del dragon",
    price: 3000,
    image: [
      imgRadarDelDragon01
    ],
    stock: true
  },
];
