import React from 'react';
import Navbar from '../components/navbar/Navbar';
import './FAQ.css';

const FAQ: React.FC = () => {
  const faqs = [
    { question: '¿Cómo puedo realizar un pedido?', answer: 'Agrega los productos que quieras al carrito, dentro del carrito haz click en encargar para enviarnos un mensaje por whatsapp para continuar.' },
    { question: '¿Cuáles son los métodos de pago aceptados?', answer: 'Aceptamos transferencia y efectivo.' },
    { question: '¿Cuánto tiempo tarda en preparse mi pedido?', answer: 'De 1 a 3 días habiles según la cantidad del pedido. Para pedidos mayoristas, el tiempo es de 7 a 10 días hábiles.' },
    { question: '¿Puedo retirarlo en persona?', answer: 'Se retira por Liniers o algún punto intermedio a coordinar.' },
    { question: '¿Cuánto tiempo tarda el envío?', answer: 'El tiempo de envío depende de tu ubicación, pero generalmente toma entre 3 y 7 días hábiles.' },
    { question: '¿Hacen pedidos por unidad o por cantidad?', answer: 'Hacemos pedidos tanto por unidad como por cantidad, ¡no hay problema! Podes pedir en los formatos que quieras.' },
    { question: '¿Qué productos puedo encargar?', answer: 'Hacemos llaveros, imanes, pins o figuras por encargo. Si tenés una imagen pixelada que te guste, pasámela y vemos el tamaño con su precio.' },
    { question: '¿Cuál es el precio de los productos?', answer: 'El precio depende del tamaño del producto. Si nos decís qué personajes tenés en mente, te pasamos el presupuesto enseguida.' },
    { 
      question: '¿Hay descuentos por cantidad?', 
      answer: (
        <div className="faq-table-container">
          <p>¡Sí! Si llevas cantidad tenés descuento (pueden ser personajes variados):</p>
          <table className="faq-table">
            <tbody>
              <tr>
                <td>10 unidades</td>
                <td>10% de descuento</td>
              </tr>
              <tr>
                <td>25 unidades</td>
                <td>15% de descuento</td>
              </tr>
              <tr>
                <td>50 unidades</td>
                <td>25% de descuento</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    { question: '¿Cómo funciona el sistema de pago?', answer: 'Para empezar el pedido, pido una seña del 50%. Una vez recibido el pago, ya te confirmo el tiempo aproximado en que estará listo tu diseño. ✅' },
    { question: '¿Qué personajes puedo pedir?', answer: 'Hacemos de todo: Mario, Zelda, Dragon Ball, Hollow Knight... ¡el que quieras! Si tenés una imagen pixelada que te guste, pasámela y vemos el tamaño con su precio.' },
    { question: '¿Cómo pago el envío?', answer: 'Los envíos corren a cargo del comprador. Se coordina todo por WhatsApp para resolver los detalles.' },
    { question: '¿Dónde puedo ver tus trabajos anteriores?', answer: 'Si querés ver fotos de nuestros trabajos, buscanos en Instagram como @mundo.pixel.94' },
  ];

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
        <Navbar />
      <h1>Preguntas Frecuentes</h1>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li key={index} className="faq-item">
            <button onClick={() => toggleFAQ(index)} className="faq-question">
              {faq.question}
            </button>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;