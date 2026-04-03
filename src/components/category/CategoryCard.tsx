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
    images && images.length > 0 ? images[0] : "/assets/placeholder.jpg"
  );
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (images && images.length > 1) {
      console.log(`[${slug}] Iniciando rotación de imágenes, total: ${images.length}`);
      
      const interval = setInterval(() => {
        setImageIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % images.length;
          setCurrentImage(images[nextIndex]);
          return nextIndex;
        });
      }, 3000); // Cambia cada 3 segundos

      return () => clearInterval(interval);
    } else if (images && images.length === 1) {
      setCurrentImage(images[0]);
    }
  }, [images, slug]);

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
