import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import "./CategoryGrid.css";
import type { TypeCategoryGrid } from "../../types/category";
import AdSenseBanner from "../common/AdSenseBanner";
import LoadingScreen from "../common/LoadingScreen";

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
    return <LoadingScreen text="Cargando categorías..." minHeight="auto" padding="40px 0" />;
  }

  const AD_FREQUENCY = Number(import.meta.env.VITE_ADS_FREQUENCY) || 4;

  return (
    <>
      <AdSenseBanner />
      <div className="category-grid">
        {categoriesWithProducts.map((category, index) => (
          <div key={category.id} style={{ display: 'contents' }}>
            <CategoryCard
              name={category.name}
              slug={category.id}
              images={category.categoryImages || []}
            />
            {(index + 1) % AD_FREQUENCY === 0 && (
              <div className="grid-ad-break" style={{ gridColumn: '1 / -1' }}>
                <AdSenseBanner format="fluid" />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
