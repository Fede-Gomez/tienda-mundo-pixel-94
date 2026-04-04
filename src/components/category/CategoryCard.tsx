import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.css";

interface Props {
  name: string;
  slug: string;
  images: string[]; // Lista de imágenes de la categoría
}

export default function CategoryCard({ name, slug, images }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (images && images.length > 1) {
      const interval = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Cambia cada 3 segundos

      return () => clearInterval(interval);
    }
  }, [images]);

  const currentImage = images && images.length > 0 
    ? images[imageIndex % images.length] 
    : "/assets/placeholder.jpg";

  return (
    <Link to={`/category/${slug}`} className="category-card">
      <div className="card-content">
        <img
          src={currentImage}
          alt={slug}
          className="card-image"
          onError={() => console.error(`Error loading image: ${currentImage}`)}
        />
        <h2 className="card-title">{name}</h2>
      </div>
    </Link>
  );
}
