/**
 * Configuración de Entornos
 * Gestiona 4 diferentes ambientes:
 * 1. LOCAL - Datos locales, sin Firebase
 * 2. FIREBASE - Firebase config sin deployar
 * 3. PRODUCTION - Firebase deployado en Vercel
 * 4. DEBUG - Modo debug con logs adicionales
 */

export type Environment = "local" | "firebase" | "production" | "debug";

export interface EnvironmentConfig {
  mode: Environment;
  useFirebase: boolean;
  useLocalData: boolean;
  debug: boolean;
  deployedUrl?: string;
  firebaseConfig?: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
  };
}

function getEnvironment(): Environment {
  const env = import.meta.env.VITE_ENVIRONMENT || "local";
  return env as Environment;
}

function getConfig(): EnvironmentConfig {
  const environment = getEnvironment();

  const baseConfig = {
    firebaseConfig: {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "mundo-pixel-94",
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
      appId: import.meta.env.VITE_FIREBASE_APP_ID || "",
    },
  };

  switch (environment) {
    case "local":
      return {
        ...baseConfig,
        mode: "local",
        useFirebase: false,
        useLocalData: true,
        debug: false,
      };

    case "firebase":
      return {
        ...baseConfig,
        mode: "firebase",
        useFirebase: true,
        useLocalData: false,
        debug: false,
      };

    case "production":
      return {
        ...baseConfig,
        mode: "production",
        useFirebase: true,
        useLocalData: false,
        debug: false,
        deployedUrl: import.meta.env.VITE_DEPLOYED_URL || "https://tienda-mundo-pixel-94.vercel.app",
      };

    case "debug":
      return {
        ...baseConfig,
        mode: "debug",
        useFirebase: true,
        useLocalData: true, // En debug cargamos ambos para comparar
        debug: true,
        deployedUrl: import.meta.env.VITE_DEPLOYED_URL || "http://localhost:5173",
      };

    default:
      return {
        ...baseConfig,
        mode: "local",
        useFirebase: false,
        useLocalData: true,
        debug: false,
      };
  }
}

export const environmentConfig = getConfig();

// Logs iniciales
if (environmentConfig.debug) {
  console.log("🔧 Entorno configurado:", {
    environment: environmentConfig.mode,
    useFirebase: environmentConfig.useFirebase,
    useLocalData: environmentConfig.useLocalData,
    debug: environmentConfig.debug,
  });
}

// Helper functions
export function isLocal(): boolean {
  return environmentConfig.useLocalData && !environmentConfig.useFirebase;
}

export function isFirebase(): boolean {
  return environmentConfig.useFirebase;
}

export function isProduction(): boolean {
  return environmentConfig.mode === "production";
}

export function isDebug(): boolean {
  return environmentConfig.debug;
}

export function log(label: string, data: any): void {
  if (environmentConfig.debug) {
    console.log(`[${label}]`, data);
  }
}

export function logError(label: string, error: any): void {
  console.error(`[ERROR ${label}]`, error);
}
