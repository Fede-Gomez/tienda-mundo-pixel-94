import CategoryCard from "./CategoryCard";
import "./CategoryGrid.css";
import type { TypeCategoryGrid } from "../../types/category";

export default function CategoryGrid({ categories }: TypeCategoryGrid) {
  return (
    <div className="category-grid">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          slug={category.id}
          images={category.products.flatMap((product) => product.image)} // Combina las imágenes de los productos
        />
      ))}
    </div>
  );
}
