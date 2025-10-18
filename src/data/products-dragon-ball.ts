import type { TypeProductCard } from "../types/product";
import imgGohan01 from "../assets/dragon-ball/gohan-ssj2-01.jpg";
import imgRadarDelDragon01 from "../assets/dragon-ball/radar-del-dragon-01.jpg";
import { gogetaSsj101, gohanSsj201, gokuSsj01, gokuUltraInstinct01, radarDelDragon01, vegeta01 } from "../assets/dragon-ball";



export const productsDragonBall: TypeProductCard[] = [
  {
    id: "goku-ultra-instinct-01",
    name: "Goku Ultrainstinct",
    price: 7500,
    image: [
      gokuUltraInstinct01
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
      gohanSsj201
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
      radarDelDragon01
    ],
            size:{
      ancho: 4.6,
      alto: 5.7
    },
  },
  {
    id: "goku-ssj1-01",
    name: "Goku SSJ1",
    price: 8000,
    image: [
      gokuSsj01 
    ],
    size:{
      ancho: 6.5,
      alto: 13.7
    },
  },
  {
    id: "vegeta-ssj1-01",
    name: "Vegeta SSJ1",
    price: 6500,
    image: [
      vegeta01
    ],
    size:{
      ancho: 6.2,
      alto: 12.2
    },
  },
  {
    id: "gogeta-ssj1-01",
    name: "Gogeta SSJ1",
    price: 9000,
    image: [
      gogetaSsj101
    ],
    size:{
      ancho: 7,
      alto: 14.3
    },
  },
];
