import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/tienda-mundo-pixel-94/" : "/", // Ruta base condicional
  plugins: [react()],
}));
