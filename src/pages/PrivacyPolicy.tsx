import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Header from '../components/common/Header';
import './PolicyPages.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="policy-page">
      <Header />
      <Navbar />
      <header className="policy-header">
        <h1>Política de Privacidad</h1>
      </header>
      <main className="policy-content">
        <article className="retro-manual-small">
          <p>Última actualización: 9 de abril de 2026</p>
          
          <section>
            <h2>1. Información que recopilamos</h2>
            <p>
              En Mundo Pixel 94, recopilamos información de contacto cuando realizas un pedido a través 
              de WhatsApp o utilizas nuestro formulario de contacto. Esto incluye tu nombre y número 
              de teléfono necesarios para coordinar la entrega.
            </p>
          </section>

          <section>
            <h2>2. Uso de cookies y tecnologías similares</h2>
            <p>
              Utilizamos herramientas como <strong>Google Analytics</strong> para entender cómo los 
              usuarios interactúan con nuestro sitio y mejorar la experiencia de navegación. 
              También utilizamos <strong>Google AdSense</strong> para mostrar anuncios personalizados. 
              Estas herramientas pueden utilizar cookies para recopilar datos sobre tu actividad 
              en este y otros sitios web.
            </p>
          </section>

          <section>
            <h2>3. Google AdSense y la Cookie de DoubleClick</h2>
            <p>
              Google, como proveedor asociado, utiliza cookies para publicar anuncios en nuestro sitio. 
              El uso de la cookie de DoubleClick permite a Google y a sus socios publicar anuncios 
              basados en las visitas de los usuarios a nuestro sitio o a otros sitios en Internet. 
              Puedes inhabilitar el uso de la cookie de DoubleClick para la publicidad basada en 
              intereses visitando Configuración de anuncios de Google.
            </p>
          </section>

          <section>
            <h2>4. Protección de datos</h2>
            <p>
              Nos comprometemos a no vender ni compartir tu información personal con terceros para 
              fines de marketing sin tu consentimiento explícito.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </section>
  );
};

export default PrivacyPolicy;
