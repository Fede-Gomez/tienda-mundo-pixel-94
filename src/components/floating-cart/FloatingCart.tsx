import { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./FloatingCart.css";

export default function FloatingCart() {
  const { cart, updateQuantity } = useCart();
  const [isVisible, setIsVisible] = useState(false);

  // Calcular el total de productos y el total del precio
  const totalProducts = cart.reduce((sum, item) => sum + item.quantity, 0); // Suma todas las cantidades
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0); // Suma el precio total

  const generateWhatsAppMessage = () => {
    if (cart.length === 0) return "";

    const productDetails = cart
      .map(
        (item) =>
          `- ${item.name} (${item.option}) x ${item.quantity}`
      )
      .join("\n");

    return `Hola, quiero comprar los siguientes productos:\n\n${productDetails}`;
  };

  const handleWhatsAppPurchase = () => {
    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/+5491132341004?text=${encodedMessage}`; // Incluye tu número de teléfono
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <div
        className="floating-cart"
        onClick={() => setIsVisible((prev) => !prev)}
      >
        {totalProducts !== 0 ? `$${totalPrice}` : "Vacío"} 🛒
        {totalProducts > 0 && <span className="cart-badge">{totalProducts}</span>} {/* Badge con la cantidad */}
      </div>
      <div className={`cart-list ${isVisible ? "fade-in" : "fade-out"}`}>
        <button
          className="cart-close-button"
          onClick={() => setIsVisible(false)}
        >
          ✖
        </button>
        <h2>Carrito</h2>
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
                      <span>{item.quantity}</span>
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
        <div className="cart-total">
          <p>Total: ${totalPrice}</p>
        </div>
        {cart.length > 0 && (
          <button
            className="cart-purchase-button"
            onClick={handleWhatsAppPurchase}
          >
            Comprar
          </button>
        )}
      </div>
    </>
  );
}