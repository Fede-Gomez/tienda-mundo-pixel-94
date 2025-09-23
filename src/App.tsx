import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import "./App.css";
import FloatingCart from "./components/floating-cart/FloatingCart";

function App() {
  return (
    <BrowserRouter basename={"/"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<CategoryPage />} />
        </Routes>
       <FloatingCart />
    </BrowserRouter>
  );
}

export default App;
