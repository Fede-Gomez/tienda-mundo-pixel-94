import { createContext, useContext, useState, useEffect } from "react";
import type { CartItem, TypeProductCard } from "../types/product";
import type { CartContextType } from "../types/cart";



const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Cargar el carrito desde localStorage al iniciar
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Guardar el carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: TypeProductCard, option: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.option === option
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.option === option
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1, option }];
    });
  };

  const updateQuantity = (id: string, option: string, quantity: number) => {
    setCart((prevCart) => {
      if (quantity <= 0) {
        return prevCart.filter((item) => !(item.id === id && item.option === option));
      }
      return prevCart.map((item) =>
        item.id === id && item.option === option ? { ...item, quantity } : item
      );
    });
  };

  const removeFromCart = (id: string, option: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === id && item.option === option))
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}