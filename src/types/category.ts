import type { TypeProductCard } from "./product";


export interface TypeCategory {
  id: string;
  name: string;
  image: string;
  products: TypeProductCard[];
}

export interface TypeCategoryGrid {
  categories: TypeCategory[]; // Lista de categorías
}