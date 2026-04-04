import type { TypeProductCard } from "../types/product";

/**
 * Servicio para cargar productos locales dinámicamente.
 * Esto evita errores de "módulo no encontrado" en entornos de producción (como Vercel)
 * donde los archivos de datos locales están en .gitignore.
 */
export const getLocalProductsByCategory = async (category: string): Promise<TypeProductCard[]> => {
  try {
    // Usamos import.meta.glob para buscar archivos dinámicamente en tiempo de compilación/ejecución
    // Si los archivos no existen (como en producción), esto simplemente devolverá un objeto vacío
    const modules: Record<string, any> = import.meta.glob("../data/products-*.ts", { eager: true });
    
    // El nombre del archivo esperado es: ../data/products-[category].ts
    const fileName = `../data/products-${category}.ts`;
    
    if (modules[fileName]) {
      // Buscamos la exportación (normalmente se llama products[NombreCategoria])
      // O simplemente tomamos el primer export que sea un array
      const module = modules[fileName];
      const exportName = Object.keys(module).find(key => Array.isArray(module[key]));
      
      if (exportName) {
        return module[exportName] as TypeProductCard[];
      }
    }
    
    console.warn(`[localProductService] No se encontraron datos locales para: ${category}`);
    return [];
  } catch (error) {
    console.error("[localProductService] Error cargando productos locales:", error);
    return [];
  }
};
