import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.css";

interface Props {
  name: string;
  slug: string;
  images: string[]; // Lista de imágenes de la categoría
}

export default function CategoryCard({ name, slug, images }: Props) {
  const [currentImage, setCurrentImage] = useState<string>(
    images && images.length > 0 ? images[0] : "/assets/placeholder.jpg" // Usa una imagen de placeholder si no hay imágenes
  );

  useEffect(() => {
    if (images && images.length > 0) {
      const interval = setInterval(() => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        setCurrentImage(randomImage); // Cambia la imagen de manera aleatoria
      }, 3000); // Cambia cada 3 segundos

      return () => clearInterval(interval); // Limpia el intervalo al desmontar
    }
  }, [images]);

  return (
    <Link to={`/category/${slug}`} className="category-card">
      <div className="card-content">
        <img
          src={currentImage}
          alt={slug}
          className="card-image"
        />
        <h2 className="card-title">{name}</h2>
      </div>
    </Link>
  );
}
