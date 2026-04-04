import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import "./CategoryGrid.css";
import type { TypeCategoryGrid } from "../../types/category";

import { getProductsByCategory } from "../../services/productService";

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
    const loadCategoryImages = async () => {
      try {
        setIsLoading(true);
        const updatedCategories = await Promise.all(
          categories.map(async (category) => {
            const products = (await getProductsByCategory(category.id)) || [];
            console.log(`[${category.id}] Productos encontrados: ${products.length}`);

            const allImages = getAllProductImages(products);
            console.log(`[${category.id}] Total imágenes: ${allImages.length}`);

            return {
              ...category,
              categoryImages: allImages,
            };
          })
        );
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
