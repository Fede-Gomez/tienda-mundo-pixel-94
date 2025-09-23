import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import "./App.css";
import FloatingCart from "./components/floating-cart/FloatingCart";

function App() {
  return (
    <BrowserRouter basename="/tienda-mundo-pixel-94">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<CategoryPage />} />
        </Routes>
      </Router>
       <FloatingCart />
    </BrowserRouter>
  );
}

export default App;
