import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Header from '../components/common/Header';
import './PolicyPages.css';

const Contact: React.FC = () => {
    return (
        <section className="policy-page">
            <Header />
            <Navbar />
            <header className="policy-header">
                <h1>Contacto</h1>
            </header>
            <main className="policy-content">
                <article className="retro-manual-small">
                    <section>
                        <h2>¿Necesitas ayuda?</h2>
                        <p>¿Tienes dudas sobre un producto o quieres un pedido totalmente personalizado? ¡Escríbenos!</p>
                    </section>

                    <section>
                        <h3>WhatsApp</h3>
                        <p>Atención directa por nuestro canal principal.</p>
                        <a 
                            href="https://wa.me/+5491132341004" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="contact-button-retro"
                        >
                            ENVIAR WHATSAPP
                        </a>
                    </section>

                    <section>
                        <h3>Canales Sociales</h3>
                        <p>Síguenos en Instagram para ver los últimos trabajos y novedades.</p>
                        <a 
                            href="https://www.instagram.com/mundo.pixel.94/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="contact-button-retro"
                        >
                            VER INSTAGRAM
                        </a>
                    </section>

                    <section>
                        <h3>Ubicación</h3>
                        <p>CABA, Liniers (Punto de retiro a coordinar).</p>
                    </section>
                </article>
            </main>
            <Footer />
        </section>
    );
};

export default Contact;
