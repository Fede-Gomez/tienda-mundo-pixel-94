import { useState } from "react";
import { useCart } from "../../context/CartContext";
import DeliveryModal from "./DeliveryModal";
import "./FloatingCart.css";
import { analyticsService } from "../../services/analyticsService";

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

  const handleUpdateQuantity = (id: string, option: string, name: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      analyticsService.trackRemoveFromCart(name);
    }
    updateQuantity(id, option, newQuantity);
  };

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
    analyticsService.trackEncargarClick(discountInfo.finalPrice, totalProducts);
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
      <button
        className={`floating-cart ${isVisible ? "active" : ""}`}
        onClick={() => setIsVisible((prev) => !prev)}
        aria-label="Ver carrito"
        type="button"
      >
        {totalProducts !== 0 ? `$${discountInfo.finalPrice.toFixed(2)}` : "Vacío"} 🛒
        {totalProducts > 0 && <span className="cart-badge">{totalProducts}</span>} {/* Badge con la cantidad */}
      </button>
      <aside 
        className={`cart-list ${isVisible ? "fade-in" : "fade-out"}`}
        aria-labelledby="cart-title"
      >
        <button
          className="cart-close-button"
          onClick={() => setIsVisible(false)}
          aria-label="Cerrar carrito"
        >
          ✖
        </button>
        <h2 id="cart-title" className="floating-title">Carrito</h2>
        
        {cart.length === 0 ? (
          <p className="cart-empty-msg">No hay productos en el carrito.</p>
        ) : (
          <section className="cart-items-container">
            <ul>
              {cart.map((item) => (
                <li key={`${item.id}-${item.option}`} className="cart-item">
                  <img src={item.image[0]} alt={item.name} className="cart-item-image" />
                  <section className="cart-item-details">
                    <p className="cart-item-name">{item.name} ({item.option})</p>
                    <footer className="cart-item-row">
                      <span className="cart-item-price">${(item.price * item.quantity)}</span>
                      <div className="cart-item-quantity">
                        <button
                          className="quantity-button"
                          onClick={() => handleUpdateQuantity(item.id, item.option, item.name, item.quantity - 1)}
                          aria-label="Disminuir cantidad"
                        >
                          -
                        </button>
                        <span className="cart-item-quantity-text">{item.quantity}</span>
                        <button
                          className="quantity-button"
                          onClick={() => handleUpdateQuantity(item.id, item.option, item.name, item.quantity + 1)}
                          aria-label="Aumentar cantidad"
                        >
                          +
                        </button>
                      </div>
                    </footer>
                  </section>
                </li>
              ))}
            </ul>
          </section>
        )}

        <footer className="cart-footer">
          {discountInfo.level > 0 && (
            <div className="cart-discount-note">
              <p className="discount-text">
                Descuento nivel {discountInfo.level}: <strong>-${discountInfo.discount.toFixed(2)}</strong>
              </p>
            </div>
          )}
          
          <p className="cart-total">Total: <strong>${discountInfo.finalPrice.toFixed(2)}</strong></p>

          {cart.length > 0 && (
            <button
              className="cart-purchase-button"
              onClick={handleWhatsAppPurchase}
            >
              Encargar
            </button>
          )}
        </footer>
      </aside>

      {showDeliveryModal && (
        <DeliveryModal
          onConfirm={handleDeliveryConfirm}
          onCancel={handleDeliveryCancel}
        />
      )}
    </>
  );
}