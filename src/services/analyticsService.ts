import { logEvent } from "firebase/analytics";
import { analytics } from "../config/firebase";

/**
 * 📊 SERVICIO DE ANALYTICS - MUNDO PIXEL 94
 * Wrapper para rastrear el comportamiento del usuario
 */

export const analyticsService = {
  // 📁 CATEGORÍAS
  trackViewCategory: (categoryId: string, categoryName: string) => {
    logEvent(analytics, 'view_category', {
      category_id: categoryId,
      category_name: categoryName
    });
  },

  // 👤 PERSONAJES / PRODUCTOS
  trackViewProduct: (productId: string, productName: string, categoryId: string) => {
    logEvent(analytics, 'view_item', {
      item_id: productId,
      item_name: productName,
      item_category: categoryId
    });
  },

  // 🖼️ PREVIEW DE IMAGEN
  trackImagePreview: (productName: string) => {
    logEvent(analytics, 'image_preview_open', {
      product_name: productName
    });
  },

  // 🛒 CARRITO
  trackAddToCart: (productName: string, option: string, price: number) => {
    logEvent(analytics, 'add_to_cart', {
      item_name: productName,
      item_variant: option,
      value: price,
      currency: 'ARS'
    });
  },

  trackRemoveFromCart: (productName: string) => {
    logEvent(analytics, 'remove_from_cart', {
      item_name: productName
    });
  },

  // 🛠️ OPCIONES DE PRODUCTO
  trackSelectOption: (productName: string, option: string) => {
    logEvent(analytics, 'select_product_option', {
      product_name: productName,
      option_selected: option
    });
  },

  // 📦 ENVÍO / ENTREGA
  trackShippingSelection: (type: string) => {
    logEvent(analytics, 'select_shipping', {
      shipping_type: type
    });
  },

  trackDeliverySelection: (type: string) => {
    logEvent(analytics, 'select_delivery', {
      delivery_type: type
    });
  },

  // 📝 PEDIDO
  trackEncargarClick: (total: number, itemCount: number) => {
    logEvent(analytics, 'begin_checkout', {
      value: total,
      item_count: itemCount,
      currency: 'ARS'
    });
  },

  // ❓ PREGUNTAS Y SOCIAL
  trackViewQuestions: () => {
    logEvent(analytics, 'view_questions');
  },

  trackExpandQuestion: (questionTitle: string) => {
    logEvent(analytics, 'expand_question', {
      question: questionTitle
    });
  },

  trackInstagramClick: () => {
    logEvent(analytics, 'click_instagram');
  }
};
