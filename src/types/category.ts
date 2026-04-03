import type { TypeProductCard } from "./product";


export interface TypeCategory {
  id: string;
  name: string;
  image: string;
  products?: TypeProductCard[]; // Opcional: los productos se cargan desde Firebase en CategoryPage
}

export interface TypeCategoryGrid {
  categories: TypeCategory[]; // Lista de categorías
}