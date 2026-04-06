import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import "./App.css";
import FloatingCart from "./components/floating-cart/FloatingCart";
import FAQ from "./pages/FAQ";


function App() {
  return (
    <BrowserRouter basename={"/"}>
      <div className="main-layout-container">
        {/* Contenido Principal */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>

      </div>
      <FloatingCart />
    </BrowserRouter>
  );
}

export default App;
