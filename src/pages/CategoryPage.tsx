import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { categories } from "../data/categories";
import "./CategoryPage.css";
import type { TypeProductCard } from "../types/product";
import ProductCard from "../components/product/ProductCard";
import Navbar from "../components/navbar/Navbar";
import FilterDigimon from "../helper/FilterDigimon";
import FilterPokemon from "../helper/FilterPokemon";

// Importar todos los productos locales
import { productsHarryPotter } from "../data/products-harry-potter";
import { productsCuphead } from "../data/products-cuphead";
import { productsDigimon } from "../data/products-digimon";
import { productsDragonBall } from "../data/products-dragon-ball";
import { productsGodOfWar } from "../data/products-god-of-war";
import { productsHollowKnight } from "../data/products-hollow-knight";
import { productsMario } from "../data/products-mario";
import { productsMetalSlug } from "../data/products-metal-slug";
import { productsMortalKombat } from "../data/products-mortal-kombat";
import { productsOriAndTheBlindForest } from "../data/products-ori-and-the-blind-forest";
import { productsPokemon } from "../data/products-pokemon";
import { productsResidentEvil } from "../data/products-resident-evil";
import { productsSonic } from "../data/products-sonic";
import { productsComoEntrenarATuDragon } from "../data/products-como-entrenar-a-tu-dragon";

// Mapeo de categorías a productos locales
const localProductsMap: Record<string, TypeProductCard[]> = {
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

export default function CategoryPage() {
  const { id } = useParams();
  const category = categories.find((c) => c.id === id);

  const [products, setProducts] = useState<TypeProductCard[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<TypeProductCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Cargar productos locales cuando el componente monta o cambia la categoría
  useEffect(() => {
    const loadProducts = () => {
      if (!id) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const localProducts = localProductsMap[id] || [];
        console.log(`[CategoryPage] Productos de ${id}: ${localProducts.length}`);
        setProducts(localProducts);
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
