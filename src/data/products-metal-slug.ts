import type { TypeProductCard } from "../types/product";
import { flameShot01, heavyMachine01, laserGun01 } from "../assets/metal-slug";



export const productsMetalSlug: TypeProductCard[] = [
  {
    id: "power-01",
    name: "Heavy Machine Gun",
    price: 4500,
    image: [
      heavyMachine01
    ],
    size:{
      ancho: 5.7,
      alto: 5.2
    },
  },

  {
    id: "power-03",
    name: "Laser Gun",
    price: 4500,
    image: [
      laserGun01
    ],
    size:{
      ancho: 5.7,
      alto: 5.2
    },
  },
  {
    id: "power-04",
    name: "Flame shot",
    price: 4500,
    image: [
      flameShot01
    ],
    size:{
      ancho: 5.7,
      alto: 5.2
    },
  },
/*
  {
    id: "power-02",
    name: "Shotgun",
    price: 4500,
    image: [
      imgKratos01
    ],
    size:{
      ancho: 5.7,
      alto: 5.2
    },
  },
{
  id: "power-05",
  name: "Rocket Launcher",
  price: 4500,
  image: [
    imgKratos01
  ],
  size:{
    ancho: 5.7,
    alto: 5.2
  },
},
*/  
];
