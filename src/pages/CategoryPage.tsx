import { useParams, Link } from "react-router-dom";
import { categories } from "../data/categories";
import "./CategoryPage.css"; // Importa el archivo CSS
import type { TypeProductCard } from "../types/product";
import ProductCard from "../components/product/ProductCard";

export default function CategoryPage() {
  const { id } = useParams();
  const category = categories.find((c) => c.id === id);

  if (!category) return <p className="category-not-found">Categoría no encontrada</p>;

  return (
    <div className="category-page">
      <Link to="/" className="back-link">← Volver</Link>
      <h1 className="category-title">{category.name}</h1>
      <div className="product-grid">
        {category.products.map((p: TypeProductCard) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
