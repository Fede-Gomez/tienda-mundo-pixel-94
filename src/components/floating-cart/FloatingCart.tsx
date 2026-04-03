import { useState } from "react";
import { useCart } from "../../context/CartContext";
import DeliveryModal from "./DeliveryModal";
import "./FloatingCart.css";

export default function FloatingCart() {
  const { cart, updateQuantity } = useCart();
  const [isVisible, setIsVisible] = useState(false);
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  const [deliveryData, setDeliveryData] = useState<{
    type: "envio" | "retiro";
    location?: "liniers" | "coordinar";
  } | null>(null);

  // Calcular el total de productos y el total del precio
  const totalProducts = cart.reduce((sum, item) => sum + item.quantity, 0); // Suma todas las cantidades
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0); // Suma el precio total

  // Calcular descuento según cantidad de artículos
  const getDiscountInfo = () => {
    if (totalProducts < 10) {
      return { discountPercent: 0, level: 0, discount: 0, finalPrice: totalPrice };
    }
    if (totalProducts < 25) {
      const discountAmount = totalPrice * 0.1;
      return { discountPercent: 10, level: 1, discount: discountAmount, finalPrice: totalPrice - discountAmount };
    }
    if (totalProducts < 50) {
      const discountAmount = totalPrice * 0.15;
      return { discountPercent: 15, level: 2, discount: discountAmount, finalPrice: totalPrice - discountAmount };
    }
    // 50 o más
    const discountAmount = totalPrice * 0.25;
    return { discountPercent: 25, level: 3, discount: discountAmount, finalPrice: totalPrice - discountAmount };
  };

  const discountInfo = getDiscountInfo();

  const generateWhatsAppMessage = (deliveryInfo?: {
    type: "envio" | "retiro";
    location?: "liniers" | "coordinar";
  }) => {
    if (cart.length === 0) return "";

    const productDetails = cart
      .map(
        (item) =>
          `- ${item.name} (${item.option}) x ${item.quantity}`
      )
      .join("\n");

    let message = `Hola, me interesan los siguientes artículos:\n\n${productDetails}`;

    const delivery = deliveryInfo || deliveryData;
    if (delivery) {
      const deliveryType = delivery.type === "envio" ? "Envío" : "Retiro";
      message += `\n\nTipo de entrega: ${deliveryType}`;

      if (delivery.type === "retiro" && delivery.location) {
        const location =
          delivery.location === "liniers" ? "Liniers" : "Punto a Coordinar";
        message += `\nLugar de retiro: ${location}`;
      }
    }

    return message;
  };

  const handleWhatsAppPurchase = () => {
    setShowDeliveryModal(true);
  };

  const handleDeliveryConfirm = (delivery: {
    type: "envio" | "retiro";
    location?: "liniers" | "coordinar";
  }) => {
    setDeliveryData(delivery);
    setShowDeliveryModal(false);

    // Generar mensaje actualizado con la data de entrega
    const message = generateWhatsAppMessage(delivery);
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/+5491132341004?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  const handleDeliveryCancel = () => {
    setShowDeliveryModal(false);
  };

  return (
    <>
      <div
        className={`floating-cart ${isVisible ? "active" : ""}`}
        onClick={() => setIsVisible((prev) => !prev)}
        onTouchEnd={(e) => {
          // En mobile, remover el focus después del tap
          e.currentTarget.blur();
        }}
      >
        {totalProducts !== 0 ? `$${discountInfo.finalPrice.toFixed(2)}` : "Vacío"} 🛒
        {totalProducts > 0 && <span className="cart-badge">{totalProducts}</span>} {/* Badge con la cantidad */}
      </div>
      <div className={`cart-list ${isVisible ? "fade-in" : "fade-out"}`}>
        <button
          className="cart-close-button"
          onClick={() => setIsVisible(false)}
        >
          ✖
        </button>
        <h2 className="floating-title">Carrito</h2>
        {cart.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={`${item.id}-${item.option}`} className="cart-item">
                <img src={item.image[0]} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name} ({item.option})</p>
                  <div className="cart-item-row">
                    <p className="cart-item-price">${(item.price * item.quantity)}</p>
                    <div className="cart-item-quantity">
                      <button
                        className="quantity-button"
                        onClick={() => updateQuantity(item.id, item.option, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="cart-item-quantity-text">{item.quantity}</span>
                      <button
                        className="quantity-button"
                        onClick={() => updateQuantity(item.id, item.option, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        {discountInfo.level > 0 && (
          <div className="cart-discount-note">
            <p className="discount-text">
              descuento nivel {discountInfo.level}: ${discountInfo.discount.toFixed(2)}
            </p>
          </div>
        )}
        <div className="cart-total">
          <p className="cart-total-text">Total: ${discountInfo.finalPrice.toFixed(2)}</p>
        </div>
        {cart.length > 0 && (
          <button
            className="cart-purchase-button"
            onClick={handleWhatsAppPurchase}
          >
            Encargar
          </button>
        )}
      </div>

      {showDeliveryModal && (
        <DeliveryModal
          onConfirm={handleDeliveryConfirm}
          onCancel={handleDeliveryCancel}
        />
      )}
    </>
  );
}