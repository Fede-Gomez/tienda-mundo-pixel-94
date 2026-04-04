import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import "./App.css";
import FloatingCart from "./components/floating-cart/FloatingCart";
import FAQ from "./pages/FAQ";
import AdSenseBanner from "./components/common/AdSenseBanner";

function App() {
  return (
    <BrowserRouter basename={"/"}>
      <div className="main-layout-container">
        
        {/* Sidebar Izquierdo */}
        <aside className="sidebar-ad left">
          <AdSenseBanner format="vertical" />
        </aside>

        {/* Contenido Principal */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>

        {/* Sidebar Derecho */}
        <aside className="sidebar-ad right">
          <AdSenseBanner format="vertical" />
        </aside>

      </div>
      <FloatingCart />
    </BrowserRouter>
  );
}

export default App;
