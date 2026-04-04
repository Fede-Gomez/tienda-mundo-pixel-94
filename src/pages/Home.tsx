import { useState, useEffect } from "react";
import CategoryGrid from "../components/category/CategoryGrid";
import { categories } from "../data/categories";
import "./Home.css";
import Navbar from "../components/navbar/Navbar";
import AdSenseBanner from "../components/common/AdSenseBanner";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Simular carga para mostrar el spinner retro y un anuncio
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); 
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="home">
        <Navbar />
        <div className="loading-screen">
          <div className="retro-spinner"></div>
          <span className="loading-text">Cargando Mundos...</span>
          <div className="loading-ad-wrapper">
             <AdSenseBanner format="rectangle" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="home">
      <header className="home-header">
        <img
          src={`./logo.jpg`}
          alt="Mundo Pixel Logo"
          className="home-logo"
        />
        <h1 className="home-title">¡Bienvenido a Mundo Pixel!</h1>
        <p className="home-subtitle">
          Descubre nuestras categorías y encuentra el pixel perfecto para tu inventario.
        </p>
      </header>
      <Navbar />

      {/* Google AdSense - Banner Principal */}
      <AdSenseBanner />

      <CategoryGrid categories={categories} />
    </div>
  );
}
