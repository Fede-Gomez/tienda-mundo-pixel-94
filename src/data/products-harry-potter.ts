import type { TypeProductCard } from "../types/product";
import imgHarryPotter01 from "../assets/harry-potter/harry-potter-01.jpeg";
import imgRon01 from "../assets/harry-potter/ron-01.jpeg";
import imgHermione01 from "../assets/harry-potter/hermione-01.jpeg";
import imgLogoHarryPotter01 from "../assets/harry-potter/logo-harry-potter-01.jpeg";
import imgSnitchDorada01 from "../assets/harry-potter/snitch-dorada-01.jpeg";

export const productsHarryPotter: TypeProductCard[] = [
  {
    id: "harry-potter-01",
    name: "Harry Potter",
    price: 4000,
    image: [
      imgHarryPotter01
    ],
    stock: true
  },
  {
    id: "ron-01",
    name: "Ron",
    price: 4000,
    image: [
      imgRon01
    ],
    stock: true
  },
  {
    id: "hermione-01",
    name: "Hermione",
    price: 4000,
    image: [
      imgHermione01
    ],
    stock: true
  },
  {
    id: "logo-harry-potter-01",
    name: "Logo Harry Potter",
    price: 2500,
    image: [
      imgLogoHarryPotter01
    ],
    stock: true
  },
  {
    id: "snitch-dorada-01",
    name: "Snitch Dorada",
    price: 2000,
    image: [
      imgSnitchDorada01
    ],
    stock: true
  },
];
