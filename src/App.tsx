import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import "./App.css";
import FloatingCart from "./components/floating-cart/FloatingCart";

function App() {
  const path = import.meta.env.MODE === "production" 
        ? "/tienda-mundo-pixel-94/" 
        : "/"
  return (
    <BrowserRouter basename={path}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<CategoryPage />} />
        </Routes>
       <FloatingCart />
    </BrowserRouter>
  );
}

export default App;
