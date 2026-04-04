import { useState } from "react";
import "./DeliveryModal.css";

interface DeliveryModalProps {
  onConfirm: (deliveryData: { type: "envio" | "retiro"; location?: "liniers" | "coordinar" }) => void;
  onCancel: () => void;
}

export default function DeliveryModal({ onConfirm, onCancel }: DeliveryModalProps) {
  const [step, setStep] = useState<"type" | "location">("type");
  const [deliveryType, setDeliveryType] = useState<"envio" | "retiro" | null>(null);

  const handleTypeSelect = (type: "envio" | "retiro") => {
    setDeliveryType(type);
    if (type === "envio") {
      onConfirm({ type });
    } else {
      setStep("location");
    }
  };

  const handleLocationSelect = (loc: "liniers" | "coordinar") => {
    onConfirm({ type: deliveryType as "retiro", location: loc });
  };

  const handleBack = () => {
    setStep("type");
    setDeliveryType(null);
  };

  return (
    <div className="delivery-overlay">
      <div className="delivery-modal">
        <div className="delivery-header">
          <h2>Tipo de Entrega</h2>
        </div>

        {step === "type" && (
          <div className="delivery-content">
            <p className="delivery-label">¿Cómo deseas recibir tu pedido?</p>
            <div className="delivery-options">
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
            </div>
          </div>
        )}

        {step === "location" && (
          <div className="delivery-content">
            <p className="delivery-label">¿Dónde deseas retirar?</p>
            <div className="delivery-options">
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
            </div>
            <button className="delivery-back-btn" onClick={handleBack}>
              ← Volver
            </button>
          </div>
        )}

        <button className="delivery-close-btn" onClick={onCancel}>
          ✖
        </button>
      </div>
    </div>
  );
}
