import { useState, useEffect } from "react";
import CategoryGrid from "../components/category/CategoryGrid";
import LoadingScreen from "../components/common/LoadingScreen";
import { categories } from "../data/categories";
import "./Home.css";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/common/Header";
import Footer from "../components/footer/Footer";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Simular carga para mostrar el spinner retro (sin banner de AdSense para cumplir políticas de Google)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="home">
      <Header />
      <Navbar />

      {/* Marquesina Infinita - HTML Semántico <aside> para contenido tangencial */}
      <aside className="arcade-marquee" aria-label="Anuncios y Promociones">
        <div className="marquee-content">
          <span>+++ REGALOS GAMER +++ LLAVEROS, IMANES Y FIGURAS EN PIXEL ART +++ PERSONAJES DE ANIME Y COLECCIONABLES +++ PEDIDOS PERSONALIZADOS +++ ENVÍOS A TODO EL PAÍS +++ MUNDO PIXEL 94 +++ ARTE RETRO 8-BIT +++ </span>
          {/* Duplicamos el contenido para el efecto de loop infinito */}
          <span aria-hidden="true">+++ REGALOS GAMER +++ LLAVEROS, IMANES Y FIGURAS EN PIXEL ART +++ PERSONAJES DE ANIME Y COLECCIONABLES +++ PEDIDOS PERSONALIZADOS +++ ENVÍOS A TODO EL PAÍS +++ MUNDO PIXEL 94 +++ ARTE RETRO 8-BIT +++ </span>
        </div>
      </aside>

      {isLoading ? (
        <LoadingScreen text="Cargando Mundos..." />
      ) : (
        <main className="home-main-content">
          <section className="category-section">
            <CategoryGrid categories={categories} />
          </section>
          
          {/* SECCIÓN SEO POTENCIADA: Usamos <article> para contenido independiente */}
          <footer className="home-info-footer">
            <article className="retro-manual-box">
              <header>
                <h2>GUÍA DEL JUGADOR: MUNDO PIXEL 94 - ARTE Y COLECCIONABLES</h2>
              </header>
              <section className="manual-content">
                <h3>¿Qué es el Pixel Art en Mundo Pixel 94?</h3>
                <p>
                  En <strong>Mundo Pixel 94</strong> somos especialistas en <strong>Pixel Art hecho a mano</strong>. 
                  Nuestra misión es rescatar la nostalgia de las consolas clásicas para crear <strong>accesorios gamer</strong> 
                  únicos. Desde <strong>llaveros de Pokemon</strong> hasta <strong>figuras coleccionables de Dragon Ball</strong>, 
                  cada pieza es un tributo a la era de los 8 y 16 bits.
                </p>
                <h3>Regalos Geek y Decoración para tu Setup</h3>
                <p>
                  ¿Buscas el <strong>regalo perfecto para un gamer</strong>? Nuestros <strong>imanes de heladera</strong> de 
                  personajes como <strong>Mario Bros</strong>, <strong>Hollow Knight</strong> o <strong>Zelda</strong> 
                  son ideales para decorar cualquier espacio. Además, nuestra técnica de ensamblado premium garantiza 
                  colores vibrantes y gran durabilidad.
                </p>
                <h3>Pedidos Personalizados y Envíos</h3>
                <p>
                  Si tienes una imagen pixelada que amas, nosotros la convertimos en realidad. Somos referentes en 
                  <strong>Pixel Art personalizado en Argentina</strong>. Realizamos envíos rápidos para que tus 
                  <strong>ítems de colección</strong> lleguen directo a tu inventario personal.
                </p>
              </section>
            </article>
          </footer>
        </main>
      )}
      <Footer />
    </section>
  );
}
