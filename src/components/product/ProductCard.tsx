import { useState } from "react";
import "./ProductCard.css";
import { useCart } from "../../context/CartContext";
import type { TypeProductCard } from "../../types/product";
import ImagePreview from "./ImagePreview";
import FigureDisclaimer from "./FigureDisclaimer";

export default function ProductCard(product: TypeProductCard) {
  const { addToCart } = useCart();
  const [selectedOption, setSelectedOption] = useState<string>(
    product.optionsProduct[0] || "Llavero"
  );
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const [showFigureDisclaimer, setShowFigureDisclaimer] = useState<boolean>(false);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleAddToCart = () => {
    if (selectedOption === "Figura") {
      setShowFigureDisclaimer(true);
    } else {
      addToCart(product, selectedOption);
    }
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
      <div className="product-card">
        <div className="image-container">
          <img
            src={product.image[0]}
            alt={product.name}
            className="product-image"
            onClick={() => setIsPreviewOpen(true)}
            style={{ cursor: "pointer" }}
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
          </div>
        </div>
      </div>
      
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
