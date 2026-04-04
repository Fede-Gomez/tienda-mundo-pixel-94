import { useEffect } from 'react';

/**
 * Componente Reutilizable para Google AdSense
 * @param slot El ID del bloque de anuncios (puedes pasar uno específico por prop o usar el de env)
 * @param format 'auto', 'fluid', 'rectangle', 'vertical'
 * @param responsive Si debe ser responsivo (true/false)
 */
interface AdSenseBannerProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'vertical';
  responsive?: string;
  style?: React.CSSProperties;
}

const CLIENT_ID = import.meta.env.VITE_ADSENSE_CLIENT;
const DEFAULT_SLOT = import.meta.env.VITE_ADSENSE_SLOT_HOME;

export default function AdSenseBanner({
  slot = DEFAULT_SLOT,
  format = 'auto',
  responsive = 'true',
  style = { display: 'block' }
}: AdSenseBannerProps) {

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.warn("AdSense error:", err);
    }
  }, [slot]);

  // Si el formato es vertical, ajustamos el contenedor
  const containerStyle: React.CSSProperties = {
    margin: format === 'vertical' ? '0' : '20px 0',
    overflow: 'hidden',
    textAlign: 'center',
    width: format === 'vertical' ? '160px' : '100%',
    height: format === 'vertical' ? '600px' : 'auto',
  };

  return (
    <div className="adsense-container" style={containerStyle}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format={format === 'vertical' ? '' : format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
}
