
import type { TypeProductCard } from "../types/product";
import cabezaSonic01 from "../assets/sonic/cabeza-sonic-01.jpeg";
import cabezaTails01 from "../assets/sonic/cabeza-tails-01.jpeg";
import cabezaKnuckles01 from "../assets/sonic/cabeza-knuckles-01.jpeg";
import cabezaAmy01 from "../assets/sonic/cabeza-amy-01.jpeg";
import cabezaEggman01 from "../assets/sonic/cabeza-eggman-01.jpeg";
import cabezaShadow01 from "../assets/sonic/cabeza-shadow-01.jpeg";

export const productsSonic: TypeProductCard[] = [
  {
    id: "cabeza-sonic-01",
    name: "Cabeza Sonic",
    price: 2000,
    image: [
      cabezaSonic01
    ],
    stock: true
  },
  {
    id: "cabeza-tails-01",
    name: "Cabeza Tails",
    price: 2000,
    image: [
      cabezaTails01
    ],
    stock: true
  },
  {
    id: "cabeza-knuckles-01",
    name: "Cabeza knuckles",
    price: 2000,
    image: [
      cabezaKnuckles01
    ],
    stock: true
  },
  {
    id: "cabeza-amy-01",
    name: "Cabeza Amy",
    price: 2000,
    image: [
      cabezaAmy01
    ],
    stock: true
  },
  {
    id: "cabeza-eggman-01",
    name: "Cabeza Eggman",
    price: 2000,
    image: [
      cabezaEggman01
    ],
    stock: true
  },
  {
    id: "cabeza-shadow-01",
    name: "Cabeza Shadow",
    price: 2000,
    image: [
      cabezaShadow01
    ],
    stock: false
  },
];
