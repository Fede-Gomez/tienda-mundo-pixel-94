import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import "./CategoryGrid.css";
import type { TypeCategoryGrid } from "../../types/category";

// Importar todos los productos locales
import { productsHarryPotter } from "../../data/products-harry-potter";
import { productsCuphead } from "../../data/products-cuphead";
import { productsDigimon } from "../../data/products-digimon";
import { productsDragonBall } from "../../data/products-dragon-ball";
import { productsGodOfWar } from "../../data/products-god-of-war";
import { productsHollowKnight } from "../../data/products-hollow-knight";
import { productsMario } from "../../data/products-mario";
import { productsMetalSlug } from "../../data/products-metal-slug";
import { productsMortalKombat } from "../../data/products-mortal-kombat";
import { productsOriAndTheBlindForest } from "../../data/products-ori-and-the-blind-forest";
import { productsPokemon } from "../../data/products-pokemon";
import { productsResidentEvil } from "../../data/products-resident-evil";
import { productsSonic } from "../../data/products-sonic";
import { productsComoEntrenarATuDragon } from "../../data/products-como-entrenar-a-tu-dragon";
import { getProductsByCategory } from "../../services/productService";

// Mapeo de categorías a productos locales
const localProductsMap: Record<string, any[]> = {
  "harry-potter": productsHarryPotter,
  "cuphead": productsCuphead,
  "digimon": productsDigimon,
  "dragon-ball": productsDragonBall,    
  "god-of-war": productsGodOfWar,
  "hollow-knight": productsHollowKnight,
  "mario": productsMario,
  "metal-slug": productsMetalSlug,
  "mortal-kombat": productsMortalKombat,
  "ori-and-the-blind-forest": productsOriAndTheBlindForest,
  "pokemon": productsPokemon,
  "resident-evil": productsResidentEvil,
  "sonic": productsSonic,
  "como-entrenar-a-tu-dragon": productsComoEntrenarATuDragon,
};

type Category = TypeCategoryGrid["categories"][0];

interface CategoryWithProducts extends Category {
  categoryImages?: string[];
}

// Función para extraer todas las imágenes de los productos
function getAllProductImages(products: any[]): string[] {
  const allImages: string[] = [];
  products.forEach((product) => {
    if (product.image && Array.isArray(product.image)) {
      allImages.push(...product.image);
    }
  });
  return allImages;
}

export default function CategoryGrid({ categories }: TypeCategoryGrid) {
  const [categoriesWithProducts, setCategoriesWithProducts] = useState<CategoryWithProducts[]>(categories);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCategoryImages = () => {
      try {
        setIsLoading(true);
        const updatedCategories = categories.map(async (category) => {
          // Si estás dentro de una función async
        const products = await getProductsByCategory(category.id) || []; 
          console.log(`[${category.id}] Productos locales: ${products.length}`);
          
          if (products.length > 0) {
            console.log(`[${category.id}] Primer producto:`, products[0]);
          }
          
          const allImages = getAllProductImages(products);
          console.log(`[${category.id}] Total imágenes: ${allImages.length}`, allImages);
          
          return {
            ...category,
            categoryImages: allImages,
          };
        });
        setCategoriesWithProducts(updatedCategories);
      } catch (error) {
        console.error("Error loading category images:", error);
        setCategoriesWithProducts(categories);
      } finally {
        setIsLoading(false);
      }
    };

    loadCategoryImages();
  }, [categories]);

  if (isLoading) {
    return (
      <div className="category-grid">
        <p style={{ gridColumn: "1 / -1", textAlign: "center", color: "#00ffcc" }}>
          Cargando categorías...
        </p>
      </div>
    );
  }

  return (
    <div className="category-grid">
      {categoriesWithProducts.map((category) => (
        <CategoryCard
          key={category.id}
          name={category.name}
          slug={category.id}
          images={category.categoryImages || []}
        />
      ))}
    </div>
  );
}
