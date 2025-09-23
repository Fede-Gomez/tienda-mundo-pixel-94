// Tipo base para un producto
export interface TypeProductCard {
  id: string;
  name: string;
  price: number;
  image: string[]; // Cambiamos a un arreglo de imágenes
  stock: boolean;
}

// Tipo extendido para los productos en el carrito
export interface CartItem extends TypeProductCard {
  quantity: number;
  option: string; // Opción seleccionada (Llavero, Imán, Figura)
}