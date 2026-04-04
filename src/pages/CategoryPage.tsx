import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { categories } from "../data/categories";
import "./CategoryPage.css";
import type { TypeProductCard } from "../types/product";
import ProductCard from "../components/product/ProductCard";
import Navbar from "../components/navbar/Navbar";
import FilterDigimon from "../helper/FilterDigimon";
import FilterPokemon from "../helper/FilterPokemon";

import { getProductsByCategory } from "../services/productService";

export default function CategoryPage() {
  const { id } = useParams();
  const category = categories.find((c: any) => c.id === id);

  const [filteredProducts, setFilteredProducts] = useState<TypeProductCard[]>([]);

  // SWR para manejar el fetch, caché y revalidación automáticamente
  const { data: products, error, isValidating } = useSWR(
    id ? `products/${id}` : null,
    () => getProductsByCategory(id!)
  );

  // Resetear filtros cuando cambia la data de productos
  useEffect(() => {
    setFilteredProducts([]);
  }, [products]);

  if (!category) return <p className="category-not-found">Categoría no encontrada</p>;

  const isLoading = isValidating && !products;

  if (!category) return <p className="category-not-found">Categoría no encontrada</p>;

  if (isLoading) {
    return (
      <div className="category-page">
        <Navbar />
        <h1 className="category-title">{category.name}</h1>
        <p style={{ textAlign: "center", color: "#00ffcc" }}>Cargando productos...</p>
      </div>
    );
  }

  return (
    <div className="category-page">
      <Navbar />
      <h1 className="category-title">{category.name}</h1>
      {id === "digimon" && (
        <FilterDigimon products={products} setFilteredProducts={setFilteredProducts} />
      )}
      {id === "pokemon" && (
        <FilterPokemon products={products} setFilteredProducts={setFilteredProducts} />
      )}
      <div className="product-grid">
        {(filteredProducts.length > 0 ? filteredProducts : products).map((p: TypeProductCard) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
