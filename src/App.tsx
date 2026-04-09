import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import "./App.css";
import FloatingCart from "./components/floating-cart/FloatingCart";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";


function App() {
  return (
    <BrowserRouter basename={"/"}>
      {/* Usamos el fragmento de React para no añadir nodos innecesarios al DOM si no es necesario, 
          pero mantenemos el main para el contenido principal */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <FloatingCart />
    </BrowserRouter>
  );
}

export default App;
