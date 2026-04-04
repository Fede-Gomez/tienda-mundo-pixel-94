import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const category = categories.find((c) => c.id === id);

  const [products, setProducts] = useState<TypeProductCard[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<TypeProductCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Cargar productos locales cuando el componente monta o cambia la categoría
  useEffect(() => {
    const loadProducts = async () => {
      if (!id) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const products = await getProductsByCategory(id) || [];
        console.log(`[CategoryPage] Productos de ${id}: ${products.length}`);
        setProducts(products);
        setFilteredProducts([]); // Reset filtros
      } catch (error) {
        console.error("Error loading products:", error);
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [id]);

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
