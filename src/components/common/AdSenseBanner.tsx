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
const SLOT = import.meta.env.VITE_ADSENSE_SLOT;

export default function AdSenseBanner({
  slot = SLOT,
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

  // Lógica de estilos dinámica basada en el formato y el tamaño de pantalla
  const isVertical = format === 'vertical';

  return (
    <div 
      className={`adsense-container ${isVertical ? 'adsense-sidebar' : 'adsense-horizontal'}`} 
      style={{
        margin: isVertical ? '0' : '10px 0',
        overflow: 'hidden',
        textAlign: 'center',
        // Si es vertical ocultamos si no hay espacio (esto se reforzará en CSS)
        width: isVertical ? '160px' : '100%',
        minHeight: isVertical ? '600px' : '90px',
        maxHeight: !isVertical ? '200px' : 'none', // Limitamos altura en horizontal para no molestar
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
