import type { TypeCategory } from "../types/category";

/**
 * Categorías de la tienda
 * Nota: El campo 'image' no se inicializa aquí porque depende de los productos de Firebase
 * Las imágenes se generan dinámicamente en CategoryGrid cuando obtiene los productos de Firebase
 * 
 * La función getRandomImage se usa para calcular una imagen aleatoria a partir de un array de productos
 */
export const categories: TypeCategory[] = [
  {
    id: "como-entrenar-a-tu-dragon",
    name: "Como entrenar a tu dragón",
    image: "", // Se actualiza en CategoryGrid
  },
  {
    id: "cuphead",
    name: "Cuphead",
    image: "",
  },
  {
    id: "digimon",
    name: "Digimon",
    image: "",
  },
  {
    id: "dragon-ball",
    name: "Dragon Ball",
    image: "",
  },
  {
    id: "god-of-war",
    name: "God of War",
    image: "",
  },
  {
    id: "harry-potter",
    name: "Harry Potter",
    image: "",
  },
  {
    id: "hollow-knight",
    name: "Hollow Knight",
    image: "",
  },
  {
    id: "ori-and-the-blind-forest",
    name: "Ori and the Blind Forest",
    image: "",
  },
  {
    id: "pokemon",
    name: "Pokemon",
    image: "",
  },
  {
    id: "resident-evil",
    name: "Resident Evil",
    image: "",
  },
  {
    id: "sonic",
    name: "Sonic",
    image: "",
  },
  {
    id: "mario",
    name: "Mario",
    image: "",
  },
  {
    id: "metal-slug",
    name: "Metal Slug",
    image: "",
  },
  {
    id: "mortal-kombat",
    name: "Mortal Kombat",
    image: "",
  },
];

/**
 * Función para obtener una imagen aleatoria de un array de productos
 * Usada para generar portadas dinámicas de las categorías
 * 
 * @param products - Array de productos con campo image
 * @returns Una imagen aleatoria del array, o string vacío si no hay productos
 */
export const getRandomImage = (products: { image: string[] }[]): string => {
  if (!products || products.length === 0) {
    return "";
  }
  const allImages = products.flatMap((product) => product.image);
  if (allImages.length === 0) {
    return "";
  }
  return allImages[Math.floor(Math.random() * allImages.length)];
};
