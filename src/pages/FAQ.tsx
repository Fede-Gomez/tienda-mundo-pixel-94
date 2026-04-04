import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import './FAQ.css';
import { analyticsService } from '../services/analyticsService';

const FAQ: React.FC = () => {
  useEffect(() => {
    analyticsService.trackViewQuestions();
  }, []);

  const faqs = [
    { question: '¿Cómo funciona el sistema de pago?', answer: 'Para empezar el pedido, pido una seña del 50% enviando mi alias para la transferencia. Una vez recibido el pago, te confirmo el tiempo aproximado en que estará listo tu diseño' },
    { question: '¿Cómo puedo realizar un pedido?', answer: 'Agrega los productos que te gusten al carrito, dentro del carrito haz click en encargar para enviarnos un mensaje por whatsapp para continuar' },
    { question: '¿Hacen pedidos por unidad o por cantidad?', answer: 'Hacemos pedidos tanto por unidad como por cantidad, ¡no hay problema! Podes pedir en los formatos que quieras' },
    { question: '¿Cuáles son los métodos de pago aceptados?', answer: 'Para la seña transferencia. El resto en transferencia y efectivo' },
    { question: '¿Puedo retirarlo en persona?', answer: 'Se retira por Liniers o algún punto intermedio a coordinar' },
    { question: '¿Cuánto tiempo tarda si quiero un envío?', answer: 'El tiempo de envío depende de tu ubicación, pero generalmente toma entre 3 y 7 días hábiles' },
    { question: '¿Si quiero que me lo envíen, como pago el envío?', answer: 'Los envíos corren a cargo del comprador. Se coordina todo por WhatsApp para resolver los detalles' },
    { question: '¿Cuánto tiempo tarda en preparse mi pedido?', answer: 'Una vez recibido la seña de 1 a 3 días habiles según la cantidad del pedido. Para pedidos mayoristas, el tiempo es de 7 a 10 días hábiles' },
    { 
      question: '¿Qué personajes puedo pedir?', 
      answer: (
        <span>
          Hacemos de todo: Mario, Zelda, Dragon Ball, Hollow Knight... ¡el que quieras! Si tenés una imagen pixelada que te guste,{' '}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              const message = encodeURIComponent('hola queria consultarte por el personaje: ');
              window.open(`https://wa.me/+5491132341004?text=${message}`, '_blank');
            }}
            className="faq-whatsapp-link"
          >
            envianos
          </a>
          {' '}tu diseño por WhatsApp y te diremos tamaño y precio aproximado
        </span>
      )
    },
    { question: '¿Qué productos puedo encargar?', answer: 'Hacemos llaveros, imanes, pins o figuras por encargo' },
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
    { 
      question: '¿Dónde puedo ver más de tus trabajos?', 
      answer: (
        <span>
          Si querés ver fotos de nuestros trabajos, buscanos en Instagram como {' '}
          <a 
            href="https://www.instagram.com/mundo.pixel.94/" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={analyticsService.trackInstagramClick}
            style={{ color: '#00ffcc', fontWeight: 'bold' }}
          >
            @mundo.pixel.94
          </a>
        </span>
      )
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    
    if (isOpening) {
      analyticsService.trackExpandQuestion(faqs[index].question);
    }
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