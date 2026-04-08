import { useState } from "react";
import "./DeliveryModal.css";
import { analyticsService } from "../../services/analyticsService";

interface DeliveryModalProps {
  onConfirm: (deliveryData: { type: "envio" | "retiro"; location?: "liniers" | "coordinar" }) => void;
  onCancel: () => void;
}

export default function DeliveryModal({ onConfirm, onCancel }: DeliveryModalProps) {
  const [step, setStep] = useState<"type" | "location">("type");
  const [deliveryType, setDeliveryType] = useState<"envio" | "retiro" | null>(null);

  const handleTypeSelect = (type: "envio" | "retiro") => {
    analyticsService.trackShippingSelection(type);
    setDeliveryType(type);
    if (type === "envio") {
      onConfirm({ type });
    } else {
      setStep("location");
    }
  };

  const handleLocationSelect = (loc: "liniers" | "coordinar") => {
    analyticsService.trackDeliverySelection(loc);
    onConfirm({ type: deliveryType as "retiro", location: loc });
  };

  const handleBack = () => {
    setStep("type");
    setDeliveryType(null);
  };

  return (
    <aside className="delivery-overlay" aria-modal="true" role="dialog">
      <article className="delivery-modal">
        <header className="delivery-header">
          <h2>Tipo de Entrega</h2>
        </header>

        {step === "type" && (
          <main className="delivery-content">
            <p className="delivery-label">¿Cómo deseas recibir tu pedido?</p>
            <nav className="delivery-options">
              <button
                className="delivery-btn envio-btn"
                onClick={() => handleTypeSelect("envio")}
              >
                📦 Envío
              </button>
              <button
                className="delivery-btn retiro-btn"
                onClick={() => handleTypeSelect("retiro")}
              >
                🏪 Retiro
              </button>
            </nav>
          </main>
        )}

        {step === "location" && (
          <main className="delivery-content">
            <p className="delivery-label">¿Dónde deseas retirar?</p>
            <nav className="delivery-options">
              <button
                className="delivery-btn location-btn liniers-btn"
                onClick={() => handleLocationSelect("liniers")}
              >
                📍 Liniers
              </button>
              <button
                className="delivery-btn location-btn coordinar-btn"
                onClick={() => handleLocationSelect("coordinar")}
              >
                📞 Punto a Coordinar
              </button>
            </nav>
            <button className="delivery-back-btn" onClick={handleBack}>
              ← Volver
            </button>
          </main>
        )}

        <button className="delivery-close-btn" onClick={onCancel} aria-label="Cerrar modal">
          ✖
        </button>
      </article>
    </aside>
  );
}
