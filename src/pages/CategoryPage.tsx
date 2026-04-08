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
import LoadingScreen from "../components/common/LoadingScreen";

export default function CategoryPage() {
  const { id } = useParams();
  const category = categories.find((c: any) => c.id === id);

  // Actualizar Meta Tags, Título y Analytics dinámicamente
  useEffect(() => {
    if (category && id) {
      document.title = `${category.name} | Mundo Pixel 94`;
      const metaDescription = document.querySelector('meta[name="description"]');
      const content = `Explora nuestra colección de ${category.name} en Pixel Art. Llaveros, imanes y figuras coleccionables de alta calidad en Mundo Pixel 94.`;
      
      if (metaDescription) {
        metaDescription.setAttribute("content", content);
      } else {
        const meta = document.createElement('meta');
        meta.name = "description";
        meta.content = content;
        document.head.appendChild(meta);
      }

      // Rastreo de Analytics
      analyticsService.trackViewCategory(id, category.name);
    }
  }, [category, id]);

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
  const AD_FREQUENCY = Number(import.meta.env.VITE_ADS_FREQUENCY) || 4;

  return (
    <section className="category-page">
      <Navbar />
      <h1 className="category-title">{category.name}</h1>
      
      {isLoading ? (
        <LoadingScreen text="Cargando inventario..." />
      ) : (
        <main className="category-main-content">
          {id === "digimon" && (
            <FilterDigimon products={products || []} setFilteredProducts={setFilteredProducts} />
          )}
          {id === "pokemon" && (
            <FilterPokemon products={products || []} setFilteredProducts={setFilteredProducts} />
          )}
          
          {/* Google AdSense - Banner Superior */}
          <aside className="ad-container top-ad">
            <AdSenseBanner />
          </aside>
          
          <div className="product-grid">
            {(filteredProducts.length > 0 ? filteredProducts : (products || [])).map((p: TypeProductCard, index: number) => (
              <div key={p.id} style={{ display: 'contents' }}>
                <ProductCard {...p} />
                {/* Inyectamos anuncio dinámico cada N productos */}
                {(index + 1) % AD_FREQUENCY === 0 && (
                  <aside className="ad-container grid-ad" style={{ gridColumn: '1 / -1' }}>
                    <AdSenseBanner format="fluid" />
                  </aside>
                )}
              </div>
            ))}
          </div>

          {/* Google AdSense - Banner Inferior */}
          <aside className="ad-container bottom-ad">
            <AdSenseBanner />
          </aside>

          <footer className="category-info-footer">
            <p className="category-description-box">
              Estás en la sección de <strong>{category.name}</strong>. Aquí encontrarás todos nuestros productos 
              disponibles en pixel art: llaveros, imanes y figuras decorativas inspiradas en este universo. 
              Cada pieza está hecha con dedicación para capturar la esencia retro y la magia de los videojuegos clásicos.
            </p>
          </footer>
        </main>
      )}
    </section>
  );
}
