import React, { useState } from "react";
import { stagePokemon, typePoke, type typePokemon } from "../types/product";
import "./Filter.css";

interface Props {
  products: typePokemon[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<typePokemon[]>>; // Add setFilteredProducts to props
}

export default function FilterDigimon ({ products, setFilteredProducts }: Props) {
  const [type, setType] = useState<string>("");
  const [stage, setStage] = useState<string>("");

  const handleFilter = () => {
    const filtered = products.filter((product) => {
      const digimonProduct = product as typePokemon; // Cast to typeDigimon
      const matchesAttribute = type ? digimonProduct.type === type : true;
      const matchesLevel = stage ? digimonProduct.stage === stage : true;
      return matchesAttribute && matchesLevel; // Ensure both conditions are respected
    });
    setFilteredProducts(filtered); // Update the parent state
  };

  const handleClear = () => {
    setType("");
    setStage("");
  };

  return (
    <div className="filter-section">
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="filter-select"
      >
        <option value="">Atributo</option>
        {Object.values(typePoke).map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
      <select
        value={stage}
        onChange={(e) => setStage(e.target.value)}
        className="filter-select"
      >
        <option value="">Nivel</option>
        {Object.values(stagePokemon).map((stage) => (
          <option key={stage} value={stage}>{stage}</option>
        ))}
      </select>
      <button onClick={handleFilter} className="filter-button">Filtrar</button>
      <button onClick={handleClear} className="filter-button">Limpiar</button>
    </div>
  );
};