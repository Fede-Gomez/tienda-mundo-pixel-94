import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Header from '../components/common/Header';
import './PolicyPages.css';

const Terms: React.FC = () => {
    return (
        <section className="policy-page">
            <Header />
            <Navbar />
            <header className="policy-header">
                <h1>Términos y Condiciones</h1>
            </header>
            <main className="policy-content">
                <article className="retro-manual-small">
                    <section>
                        <h2>1. Naturaleza del Servicio</h2>
                        <p>
                            Mundo Pixel 94 es una tienda de objetos decorativos y accesorios realizados con la 
                            técnica de Pixel Art (Hama Beads / Perler Beads). Todos los productos son realizados 
                            artesanalmente por orden de pedido.
                        </p>
                    </section>

                    <section>
                        <h2>2. Proceso de Venta y Pagos</h2>
                        <p>
                            Los pedidos se coordinan a través de WhatsApp. Solicitamos una seña del 50% para 
                            comenzar el trabajo. El saldo restante se abona al momento de la entrega o envío.
                        </p>
                    </section>

                    <section>
                        <h2>3. Envíos y Entregas</h2>
                        <p>
                            Realizamos envíos a todo el país. Los costos de envío corren por cuenta del comprador. 
                            También disponemos de puntos de retiro en Liniers o puntos intermedios a coordinar.
                        </p>
                    </section>

                    <section>
                        <h2>4. Propiedad Intelectual</h2>
                        <p>
                            Los diseños están inspirados en personajes de la cultura pop, videojuegos y anime. 
                            Mundo Pixel 94 no reclama la propiedad de los derechos de autor de los personajes 
                            originales, solo de la interpretación artística en formato pixel art realizada.
                        </p>
                    </section>
                </article>
            </main>
            <Footer />
        </section>
    );
};

export default Terms;
