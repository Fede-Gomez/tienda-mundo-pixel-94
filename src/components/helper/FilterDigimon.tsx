import React, { useState } from "react";
import { attribute as AttributeEnum, level as LevelEnum, type typeDigimon } from "../../types/product";

interface Props {
  products: typeDigimon[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<typeDigimon[]>>; // Add setFilteredProducts to props
}

export default function FilterDigimon ({ products, setFilteredProducts }: Props) {
  const [attribute, setAttribute] = useState<string>("");
  const [level, setLevel] = useState<string>("");

  const handleFilter = () => {
    const filtered = products.filter((product) => {
      const digimonProduct = product as typeDigimon; // Cast to typeDigimon
      const matchesAttribute = attribute ? digimonProduct.attribute === attribute : true;
      const matchesLevel = level ? digimonProduct.level === level : true;
      return matchesAttribute && matchesLevel; // Ensure both conditions are respected
    });
    setFilteredProducts(filtered); // Update the parent state
  };

  const handleClear = () => {
    setAttribute("");
    setLevel("");
  };

  return (
    <div className="filter-section">
      <select
        value={attribute}
        onChange={(e) => setAttribute(e.target.value)}
        className="filter-select"
      >
        <option value="">Atributo</option>
        {Object.values(AttributeEnum).map((attr) => (
          <option key={attr} value={attr}>{attr}</option>
        ))}
      </select>
      <select
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        className="filter-select"
      >
        <option value="">Nivel</option>
        {Object.values(LevelEnum).map((lvl) => (
          <option key={lvl} value={lvl}>{lvl}</option>
        ))}
      </select>
      <button onClick={handleFilter} className="filter-button">Filtrar</button>
      <button onClick={handleClear} className="filter-button">Limpiar</button>
    </div>
  );
};