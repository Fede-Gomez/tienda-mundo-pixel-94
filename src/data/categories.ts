import type { TypeCategory } from "../types/category";
import { productsComoEntrenarATuDragon } from "./products-como-entrenar-a-tu-dragon";
import { productsCuphead } from "./products-cuphead";
import { productsDigimon } from "./products-digimon";
import { productsDragonBall } from "./products-dragon-ball";
import { productsGodOfWar } from "./products-god-of-war";
import { productsHarryPotter } from "./products-harry-potter";
import { productsHollowKnight } from "./products-hollow-knight";
import { productsMario } from "./products-mario";
import { productsMetalSlug } from "./products-metal-slug";
import { productsMortalKombat } from "./products-mortal-kombat";
import { productsOriAndTheBlindForest } from "./products-ori-and-the-blind-forest";
import { productsPokemon } from "./products-pokemon";
import { productsResidentEvil } from "./products-resident-evil";
import { productsSonic } from "./products-sonic";

// Función para obtener una imagen aleatoria de los productos
const getRandomImage = (products: { image: string[] }[]) => {
  const allImages = products.flatMap((product) => product.image); // Combina todas las imágenes
  if (allImages.length === 0) {
    console.error("No hay imágenes disponibles para los productos:", products);
    return ""; // Devuelve una cadena vacía si no hay imágenes
  }
  return allImages[Math.floor(Math.random() * allImages.length)]; // Selecciona una imagen aleatoria
};

export const categories: TypeCategory[] = [
  {
    id: "como-entrenar-a-tu-dragon",
    name: "Como entrenar a tu dragón",
    image: getRandomImage(productsComoEntrenarATuDragon), // Imagen aleatoria
    products: productsComoEntrenarATuDragon,
  },
  {
    id: "cuphead",
    name: "Cuphead",
    image: getRandomImage(productsCuphead), // Imagen aleatoria
    products: productsCuphead,
  },
  {
    id: "digimon",
    name: "Digimon",
    image: getRandomImage(productsDigimon), // Imagen aleatoria
    products: productsDigimon,
  },
  {
    id: "dragon-ball",
    name: "Dragon Ball",
    image: getRandomImage(productsDragonBall), // Imagen aleatoria
    products: productsDragonBall,
  },
  {
    id: "god-of-war",
    name: "God of War",
    image: getRandomImage(productsGodOfWar), // Imagen aleatoria
    products: productsGodOfWar,
  },
  {
    id: "harry-potter",
    name: "Harry Potter",
    image: getRandomImage(productsHarryPotter), // Imagen aleatoria
    products: productsHarryPotter,
  },
  {
    id: "hollow-knight",
    name: "Hollow Knight",
    image: getRandomImage(productsHollowKnight), // Imagen aleatoria
    products: productsHollowKnight,
  },
  {
    id: "ori-and-the-blind-forest",
    name: "Ori and the Blind Forest",
    image: getRandomImage(productsOriAndTheBlindForest), // Imagen aleatoria
    products: productsOriAndTheBlindForest,
  },
  {
    id: "pokemon",
    name: "Pokemon",
    image: getRandomImage(productsPokemon), // Imagen aleatoria
    products: productsPokemon,
  },
  {
    id: "resident-evil",
    name: "Resident Evil",
    image: getRandomImage(productsResidentEvil), // Imagen aleatoria
    products: productsResidentEvil,
  },
  {
    id: "sonic",
    name: "Sonic",
    image: getRandomImage(productsSonic), // Imagen aleatoria
    products: productsSonic,
  },
  {
    id: "mario",
    name: "Mario",
    image: getRandomImage(productsMario), // Imagen aleatoria
    products: productsMario,
  },
  {
    id: "metal-slug",
    name: "Metal Slug",
    image: getRandomImage(productsMetalSlug), // Imagen aleatoria
    products: productsMetalSlug,
  },
  {
    id: "mortal-kombat",
    name: "Mortal Kombat",
    image: getRandomImage(productsMortalKombat), // Imagen aleatoria
    products: productsMortalKombat,
  },
  
];
