import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import type { TypeProductCard } from "../types/product";

import { environmentConfig } from "../config/environment";
import { getLocalProductsByCategory } from "./localProductService";

// Obtener todos los productos de una categoría
export const getProductsByCategory = async (category: string): Promise<TypeProductCard[]> => {
  try {
    // 1️⃣ Si estamos en modo LOCAL (o LOCAL+FIREBASE en DEBUG), cargamos localmente
    if (environmentConfig.useLocalData) {
      console.log(`[productService] Usando DATOS LOCALES para la categoría: ${category}`);
      const localProducts = await getLocalProductsByCategory(category);
      
      // Si tenemos productos locales o no queremos usar Firebase como respaldo, retornamos
      if (localProducts.length > 0 || !environmentConfig.useFirebase) {
        return localProducts;
      }
      
      console.log(`[productService] No se encontraron productos locales para ${category}, intentando en Firebase...`);
    }

    // 2️⃣ Si no, o si falla lo anterior, cargamos en FIREBASE
    console.log(`[productService] Buscando productos en FIREBASE para categoría: ${category}`);
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("category", "==", category));
    const querySnapshot = await getDocs(q);
    
    console.log(`[productService] Firebase - Documentos encontrados: ${querySnapshot.size}`);
    
    const products: TypeProductCard[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      products.push({ id: doc.id, ...data } as TypeProductCard);
    });
    
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
