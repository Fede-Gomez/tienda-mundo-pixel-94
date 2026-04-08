import "./FigureDisclaimer.css";

interface FigureDisclaimerProps {
  onAgree: () => void;
  onDisagree: () => void;
}

export default function FigureDisclaimer({ onAgree, onDisagree }: FigureDisclaimerProps) {
  return (
    <aside className="disclaimer-overlay" aria-modal="true" role="dialog">
      <article className="disclaimer-modal">
        <header className="disclaimer-header">
          <h2>Información sobre Figuras</h2>
        </header>
        <main className="disclaimer-content">
          <p>
            La figura ya viene con un soporte genérico para mantenerlo parado.
          </p>
          <p>
            Si se deseaba una base personalizada se lo tomará como un artículo extra combinado a figura, precio a determinar y advirtiéndose que la figura al ser frágil al encastre está la posibilidad de que la figura se partiese.
          </p>
          <p className="disclaimer-warning">
            La tienda no se hace cargo ante tales eventuales roturas por mal encastre.
          </p>
        </main>
        <footer className="disclaimer-actions">
          <button className="btn-agree" onClick={onAgree}>
            Entendido
          </button>
          <button className="btn-disagree" onClick={onDisagree}>
            Mejor no
          </button>
        </footer>
      </article>
    </aside>
  );
}
