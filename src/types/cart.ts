import type { TypeProductCard } from "./product";

export interface CartItem extends TypeProductCard {
  quantity: number;
  option: string;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: TypeProductCard, option: string) => void;
  updateQuantity: (id: string, option: string, quantity: number) => void;
  removeFromCart: (id: string, option: string) => void;
}