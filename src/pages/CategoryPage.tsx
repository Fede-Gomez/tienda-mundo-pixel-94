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
import { analyticsService } from "../services/analyticsService";
import AdSenseBanner from "../components/common/AdSenseBanner";

export default function CategoryPage() {
  const { id } = useParams();
  const category = categories.find((c: any) => c.id === id);

  // Rastreo de Analytics al entrar a la categoría
  useEffect(() => {
    if (category && id) {
      analyticsService.trackViewCategory(id, category.name);
    }
  }, [id, category]);

  const [filteredProducts, setFilteredProducts] = useState<TypeProductCard[]>([]);

  // SWR para manejar el fetch, caché y revalidación automáticamente
  const { data: products, isValidating } = useSWR(
    id ? `products/${id}` : null,
    () => getProductsByCategory(id!)
  );

  // Resetear filtros cuando cambia la data de productos
  useEffect(() => {
    setFilteredProducts([]);
  }, [products]);

  if (!category) return <p className="category-not-found">Categoría no encontrada</p>;

  const isLoading = isValidating && !products;

  if (isLoading) {
    return (
      <div className="category-page">
        <Navbar />
        <div className="loading-screen">
          <div className="retro-spinner"></div>
          <span className="loading-text">Cargando inventario...</span>
          
          <div className="loading-ad-wrapper">
             <AdSenseBanner format="rectangle" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="category-page">
      <Navbar />
      <h1 className="category-title">{category.name}</h1>
      {id === "digimon" && (
        <FilterDigimon products={products || []} setFilteredProducts={setFilteredProducts} />
      )}
      {id === "pokemon" && (
        <FilterPokemon products={products || []} setFilteredProducts={setFilteredProducts} />
      )}
      <div className="product-grid">
        {(filteredProducts.length > 0 ? filteredProducts : (products || [])).map((p: TypeProductCard) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>

      {/* Google AdSense - Banner Inferior */}
      <AdSenseBanner />
    </div>
  );
}
