import CategoryGrid from "../components/category/CategoryGrid";
import { categories } from "../data/categories";
import "./Home.css";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
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
      <CategoryGrid categories={categories} />
    </div>
  );
}
