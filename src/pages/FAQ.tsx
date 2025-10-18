import React from 'react';
import Navbar from '../components/navbar/Navbar';
import './FAQ.css';

const FAQ: React.FC = () => {
  const faqs = [
    { question: '¿Cómo puedo realizar un pedido?', answer: 'Agrega los productos que quieras al carrito, dentro del carrito haz click en encargar para enviarnos un mensaje por whatsapp para continar.' },
    { question: '¿Cuáles son los métodos de pago aceptados?', answer: 'Aceptamos transferencia y efectivo.' },
    { question: '¿Cuánto tiempo tarda en preparse mi pedido?', answer: 'De 1 a 3 días habiles segun la cantidad del pedido.' },
    { question: '¿Vas a ferias para llevar mi pedido?', answer: 'Si, realiza el pedido y aclarame que queres retirarlo por feria, tener en cuenta que se pedira el 50% de seña' },
    { question: '¿Puedo retirarlo en persona?', answer: 'Se retira por liniers o algun punto intermedio a coordinar.' },
    { question: '¿Cuánto tiempo tarda el envío?', answer: 'El tiempo de envío depende de tu ubicación, pero generalmente toma entre 3 y 7 días hábiles.' },
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
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;