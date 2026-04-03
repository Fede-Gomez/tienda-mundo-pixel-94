import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import type { TypeProductCard } from "../types/product";

// Obtener todos los productos de una categoría
export const getProductsByCategory = async (category: string): Promise<TypeProductCard[]> => {
  try {
    console.log(`[productService] Buscando productos para categoría: ${category}`);
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("category", "==", category));
    const querySnapshot = await getDocs(q);
    
    console.log(`[productService] Documentos encontrados: ${querySnapshot.size}`);
    
    const products: TypeProductCard[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log(`[productService] Documento:`, doc.id, data);
      products.push({ id: doc.id, ...data } as TypeProductCard);
    });
    
    console.log(`[productService] Productos retornados:`, products);
    return products;
  } catch (error) {
    console.error(`[productService] Error fetching products for category ${category}:`, error);
    return [];
  }
};

// Obtener todos los productos
export const getAllProducts = async (): Promise<TypeProductCard[]> => {
  try {
    const productsRef = collection(db, "products");
    const querySnapshot = await getDocs(productsRef);
    
    const products: TypeProductCard[] = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() } as TypeProductCard);
    });
    
    return products;
  } catch (error) {
    console.error("Error fetching all products:", error);
    return [];
  }
};
