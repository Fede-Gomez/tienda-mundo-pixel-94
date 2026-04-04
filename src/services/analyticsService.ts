import { logEvent } from "firebase/analytics";
import { analytics } from "../config/firebase";

/**
 * 📊 SERVICIO DE ANALYTICS - MUNDO PIXEL 94
 * Wrapper para rastrear el comportamiento del usuario
 */

// Función auxiliar para forzar Modo Debug y que aparezca en el DebugView
const logEventWithDebug = (eventName: string, eventParams: any = {}) => {
  const isLocal = window.location.hostname === "localhost";
  const urlParams = new URLSearchParams(window.location.search);
  
  // Guardar en sessionStorage para que persista durante la navegación
  if (urlParams.has("debug")) {
    sessionStorage.setItem("ga_debug_mode", "true");
  }

  const isDebugActive = isLocal || sessionStorage.getItem("ga_debug_mode") === "true";

  const params = {
    ...eventParams,
    ...(isDebugActive ? { debug_mode: true } : {})
  };
  
  logEvent(analytics, eventName, params);
};

export const analyticsService = {
  // 📁 CATEGORÍAS
  trackViewCategory: (categoryId: string, categoryName: string) => {
    logEventWithDebug('view_category', {
      category_id: categoryId,
      category_name: categoryName
    });
  },

  // 👤 PERSONAJES / PRODUCTOS
  trackViewProduct: (productId: string, productName: string, categoryId: string) => {
    logEventWithDebug('view_item', {
      item_id: productId,
      item_name: productName,
      item_category: categoryId
    });
  },

  // 🖼️ PREVIEW DE IMAGEN
  trackImagePreview: (productName: string) => {
    logEventWithDebug('image_preview_open', {
      product_name: productName
    });
  },

  // 🛒 CARRITO
  trackAddToCart: (productName: string, option: string, price: number) => {
    logEventWithDebug('add_to_cart', {
      item_name: productName,
      item_variant: option,
      value: price,
      currency: 'ARS'
    });
  },

  trackRemoveFromCart: (productName: string) => {
    logEventWithDebug('remove_from_cart', {
      item_name: productName
    });
  },

  // 🛠️ OPCIONES DE PRODUCTO
  trackSelectOption: (productName: string, option: string) => {
    logEventWithDebug('select_product_option', {
      product_name: productName,
      option_selected: option
    });
  },

  // 📦 ENVÍO / ENTREGA
  trackShippingSelection: (type: string) => {
    logEventWithDebug('select_shipping', {
      shipping_type: type
    });
  },

  trackDeliverySelection: (type: string) => {
    logEventWithDebug('select_delivery', {
      delivery_type: type
    });
  },

  // 📝 PEDIDO
  trackEncargarClick: (total: number, itemCount: number) => {
    logEventWithDebug('begin_checkout', {
      value: total,
      item_count: itemCount,
      currency: 'ARS'
    });
  },

  // ❓ PREGUNTAS Y SOCIAL
  trackViewQuestions: () => {
    logEventWithDebug('view_questions');
  },

  trackExpandQuestion: (questionTitle: string) => {
    logEventWithDebug('expand_question', {
      question: questionTitle
    });
  },

  trackInstagramClick: () => {
    logEventWithDebug('click_instagram');
  }
};
