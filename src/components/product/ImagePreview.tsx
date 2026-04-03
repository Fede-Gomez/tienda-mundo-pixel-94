import { useEffect } from "react";
import "./ImagePreview.css";

interface ImagePreviewProps {
  images: string[];
  currentIndex: number;
  productName: string;
  onClose: () => void;
}

export default function ImagePreview({
  images,
  currentIndex,
  productName,
  onClose,
}: ImagePreviewProps) {
  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    // Agregar clase al body para prevenir scroll
    document.body.classList.add("image-preview-open");

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("image-preview-open");
    };
  }, [onClose]);

  return (
    <div className="image-preview-overlay" onClick={onClose}>
      <div
        className="image-preview-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="image-preview-header">
          <h2 className="image-preview-title">{productName}</h2>
          <button className="image-preview-close" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Imagen principal */}
        <div className="image-preview-content">
          <img
            src={images[currentIndex]}
            alt={`${productName}`}
            className="image-preview-image"
          />
        </div>
      </div>
    </div>
  );
}
