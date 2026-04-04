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
      <div className="main-layout-container" style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh', background: '#121212' }}>
        
        {/* Sidebar Izquierdo */}
        <aside className="sidebar-ad left" style={{ padding: '20px', display: 'flex', alignItems: 'flex-start' }}>
          <AdSenseBanner format="vertical" />
        </aside>

        {/* Contenido Principal de la Tienda */}
        <main style={{ flex: '1', maxWidth: '1200px', width: '100%', position: 'relative' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>

        {/* Sidebar Derecho */}
        <aside className="sidebar-ad right" style={{ padding: '20px', display: 'flex', alignItems: 'flex-start' }}>
          <AdSenseBanner format="vertical" />
        </aside>

      </div>
      <FloatingCart />
    </BrowserRouter>
  );
}

export default App;
