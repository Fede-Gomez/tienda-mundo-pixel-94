import { useState, useEffect } from "react";
import "./ProductCard.css";
import { useCart } from "../../context/CartContext";
import type { TypeProductCard } from "../../types/product";
import ImagePreview from "./ImagePreview";
import FigureDisclaimer from "./FigureDisclaimer";
import { analyticsService } from "../../services/analyticsService";

export default function ProductCard(product: TypeProductCard) {
  const { addToCart } = useCart();
  const [selectedOption, setSelectedOption] = useState<string>(
    product.optionsProduct[0] || "Llavero"
  );
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const [showFigureDisclaimer, setShowFigureDisclaimer] = useState<boolean>(false);

  // Rastreo de Analytics al cargar el personaje
  useEffect(() => {
    analyticsService.trackViewProduct(product.id, product.name, product.category || "unknown");
  }, [product.id, product.name, product.category]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    analyticsService.trackSelectOption(product.name, e.target.value);
  };

  const handleAddToCart = () => {
    analyticsService.trackAddToCart(product.name, selectedOption, product.price);
    if (selectedOption === "Figura") {
      setShowFigureDisclaimer(true);
    } else {
      addToCart(product, selectedOption);
    }
  };

  const handleOpenPreview = () => {
    setIsPreviewOpen(true);
    analyticsService.trackImagePreview(product.name);
  };

  const handleFigureAgree = () => {
    addToCart(product, selectedOption);
    setShowFigureDisclaimer(false);
  };

  const handleFigureDisagree = () => {
    setShowFigureDisclaimer(false);
  };

  return (
    <>
      <article className="product-card">
        <figure className="image-container">
          <img
            src={product.image[0]}
            alt={product.name}
            className="product-image"
            onClick={handleOpenPreview}
            style={{ cursor: "pointer" }}
          />
        </figure>
        <section className="product-info">
          <div className="product-row">
            <h3 className="product-name">{product.name}</h3>
            <span className="product-price">${product.price}</span>
            <ul className="product-sizes">
              <li>Alto: {product.size.alto}</li>
              <li>Ancho: {product.size.ancho}</li>
            </ul>
          </div>
          <footer className="product-actions">
            <select
              className="product-options"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              {product.optionsProduct.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button
              className="product-button"
              onClick={handleAddToCart}
            >
              Agregar
            </button>
          </footer>
        </section>
      </article>
      
      {isPreviewOpen && (
        <ImagePreview
          images={product.image}
          currentIndex={0}
          productName={product.name}
          onClose={() => setIsPreviewOpen(false)}
        />
      )}

      {showFigureDisclaimer && (
        <FigureDisclaimer
          onAgree={handleFigureAgree}
          onDisagree={handleFigureDisagree}
        />
      )}
    </>
  );
}
