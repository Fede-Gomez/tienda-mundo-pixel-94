
interface LoadingScreenProps {
  text?: string;
  minHeight?: string;
  padding?: string;
}

export default function LoadingScreen({
  text = "Cargando...",
  minHeight = "100vh",
  padding,
}: LoadingScreenProps) {
  return (
    <div className="loading-screen" style={{ minHeight, padding }}>
      <div className="retro-spinner"></div>
      <span className="loading-text">{text}</span>
    </div>
  );
}
