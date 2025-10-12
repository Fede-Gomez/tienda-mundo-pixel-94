import { useState } from "react";
import "./ProductCard.css";
import { useCart } from "../../context/CartContext";
import type { TypeProductCard } from "../../types/product";

export default function ProductCard(product: TypeProductCard) {
  const { addToCart } = useCart();
  const [selectedOption, setSelectedOption] = useState<string>("Llavero");
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false); // Estado para controlar el fade

  const handleAddToCart = () => {
    addToCart(product, selectedOption);
  };

  const handleNextImage = () => {
    setIsFading(true); // Activar el fade-out
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === product.image.length - 1 ? 0 : prevIndex + 1
      );
      setIsFading(false); // Activar el fade-in
    }, 500); // Duración del fade-out
  };

  const handlePrevImage = () => {
    setIsFading(true); // Activar el fade-out
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? product.image.length - 1 : prevIndex - 1
      );
      setIsFading(false); // Activar el fade-in
    }, 500); // Duración del fade-out
  };

  return (
    <div className="product-card">
      <div className="image-carousel">
        {product.image.length > 1 && (
          <>
            <button className="carousel-button left" onClick={handlePrevImage}>
              ◀
            </button>
            <button className="carousel-button right" onClick={handleNextImage}>
              ▶
            </button>
          </>
        )}
        <img
          src={product.image[currentImageIndex]}
          alt={product.name}
          className={`product-image ${isFading ? "fade-out" : "fade-in"}`}
        />
      </div>
      <div className="product-info">
        <div className="product-row">
          <p className="product-name">{product.name}</p>
          <p className="product-price">${product.price}</p>
          <ul className="product-sizes">
            <li>Alto: {product.size.alto}</li>
            <li>Ancho: {product.size.ancho}</li>
          </ul>
        </div>
        <div className="product-actions">
          <select
            className="product-options"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="Llavero">Llavero</option>
            <option value="Imán">Imán</option>
            <option value="Figura">Figura</option>
          </select>
          <button
            className="product-button"
            onClick={handleAddToCart}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
