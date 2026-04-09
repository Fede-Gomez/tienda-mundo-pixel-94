// ... imports
import { useEffect } from 'react';

interface AdSenseBannerProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'vertical';
  responsive?: string;
  style?: React.CSSProperties;
}

const CLIENT_ID = import.meta.env.VITE_ADSENSE_CLIENT;
const SLOT = import.meta.env.VITE_ADSENSE_SLOT;

export default function AdSenseBanner({
  slot = SLOT,
  format = 'auto',
  responsive = 'true',
  style = { display: 'block' }
}: AdSenseBannerProps) {

  // Efecto para inicializar el anuncio de AdSense
  useEffect(() => {
    // Solo cargamos si estamos en producción y tenemos window.adsbygoogle
    const pushAd = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.warn("AdSense error:", err);
      }
    };

    // Pequeño delay para asegurar que el DOM esté listo y evitar "Inventory: No Content"
    const timer = setTimeout(pushAd, 500);
    return () => clearTimeout(timer);
  }, [slot]);

  const isVertical = format === 'vertical';

  return (
    <div 
      className={`adsense-wrapper ${isVertical ? 'adsense-sidebar' : 'adsense-horizontal'}`} 
      style={{
        margin: '20px auto',
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.03)', // Placeholder sutil
        overflow: 'hidden',
        // PREVENCIÓN DE CLS: Reservamos espacio mínimo según el formato
        minHeight: isVertical ? '600px' : (format === 'fluid' ? '250px' : '90px'),
        width: isVertical ? '160px' : '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ ...style, width: '100%', height: '100%' }}
        data-ad-client={CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format={isVertical ? '' : format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
}
