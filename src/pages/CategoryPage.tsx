import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import useSWR from "swr";
import { categories } from "../data/categories";
import "./CategoryPage.css";
import type { TypeProductCard } from "../types/product";
import ProductCard from "../components/product/ProductCard";
import Navbar from "../components/navbar/Navbar";
import FilterDigimon from "../helper/FilterDigimon";
import FilterPokemon from "../helper/FilterPokemon";
import Footer from "../components/footer/Footer";

import { getProductsByCategory } from "../services/productService";
import { analyticsService } from "../services/analyticsService";
import AdSenseBanner from "../components/common/AdSenseBanner";
import LoadingScreen from "../components/common/LoadingScreen";
import Header from "../components/common/Header";

export default function CategoryPage() {
  const { id } = useParams();
  const category = categories.find((c: any) => c.id === id);
  const gridRef = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState(1);

  // Detectar número de columnas en tiempo real para inyectar publicidad cada 2 filas exactas
  useEffect(() => {
    if (!gridRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        // Basado en CSS: minmax(280px, 1fr) y gap: 20px
        const minWidthWithGap = 280 + 20;
        const currentCols = Math.floor((width + 20) / minWidthWithGap) || 1;
        setColumns(currentCols);
      }
    });

    observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  // Actualizar Meta Tags, Título y Analytics dinámicamente
  useEffect(() => {
    if (category && id) {
      document.title = `Llaveros e Imanes de ${category.name} en Pixel Art | Mundo Pixel 94`;
      const metaDescription = document.querySelector('meta[name="description"]');
      const content = `Explora nuestra colección de ${category.name} en Pixel Art. Llaveros, imanes y figuras coleccionables de alta calidad, hechas a mano por Mundo Pixel 94.`;

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
  // Calculamos la frecuencia: 2 filas completas
  // EXCEPCIÓN: Si hay 1 sola columna (mobile), cada 4 productos (pedido del usuario)
  const currentAdFrequency = columns === 1 ? 4 : columns * 2;

  return (
    <section className="category-page">
      <Header />
      <Navbar />
      <h1 className="category-title">{category.name} en Pixel Art</h1>

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

          <div className="product-grid" ref={gridRef}>
            {(filteredProducts.length > 0 ? filteredProducts : (products || [])).map((p: TypeProductCard, index: number) => (
              <div key={p.id} style={{ display: 'contents' }}>
                <ProductCard {...p} />
                {/* Inyectamos anuncio dinámico cada 2 filas exactas */}
                {(index + 1) % currentAdFrequency === 0 && (
                  <aside className="ad-container grid-ad" style={{ gridColumn: '1 / -1' }}>
                    <AdSenseBanner format="fluid" />
                  </aside>
                )}
              </div>
            ))}
          </div>

          <footer className="category-info-footer">
            <p className="category-description-box">
              Estás en la sección de <strong>{category.name}</strong>. Aquí encontrarás todos nuestros productos
              disponibles en pixel art: llaveros, imanes y figuras decorativas inspiradas en este universo.
              Cada pieza está hecha 100% a mano con dedicación para capturar la esencia retro y la magia de los videojuegos clásicos.
              Realizamos envíos a todo el país desde Argentina.
            </p>

            {/* Google AdSense - Banner Inferior para no molestar arriba */}
            <aside className="ad-container bottom-ad" style={{ marginTop: '30px' }}>
              <AdSenseBanner />
            </aside>
          </footer>
        </main>
      )}
      <Footer />
    </section>
  );
}
