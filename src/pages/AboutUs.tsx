import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Header from '../components/common/Header';
import './PolicyPages.css';

const AboutUs: React.FC = () => {
    return (
        <section className="policy-page">
            <Header />
            <Navbar />
            <header className="policy-header">
                <h1>Sobre Nosotros</h1>
            </header>
            <main className="policy-content">
                <article className="retro-manual-small">
                    <section>
                        <h2>Nuestra Historia</h2>
                        <p>
                            <strong>Mundo Pixel 94</strong> nació de un profundo cariño por el arte pixelado y la nostalgia 
                            de los videojuegos clásicos. Mi objetivo es capturar la esencia de las eras de oro de los 
                            <strong>años 80, 90 y 2000</strong>, transformando esos recuerdos digitales en decoraciones 
                            únicas para el mundo real.
                        </p>
                        <p>
                            Nos especializamos en recrear personajes y estética retro de consolas legendarias, 
                            buscando que cada fan de los videojuegos pueda tener un pedazo de historia pixelada 
                            en sus manos, con la calidad y el detalle que esos clásicos merecen.
                        </p>
                    </section>

                    <section>
                        <h2>Nuestro Proceso</h2>
                        <p>
                            Cada pieza es armada a mano con dedicación. Utilizamos materiales de alta calidad para asegurar 
                            que los colores sean vibrantes y las figuras resistentes. El proceso artesanal garantiza que 
                            cada llavero, imán o figura sea especial y único.
                        </p>
                    </section>
                </article>
            </main>
            <Footer />
        </section>
    );
};

export default AboutUs;
