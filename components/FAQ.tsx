import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface FAQItemProps {
    question: string;
    answer: string;
}

const faqs: FAQItemProps[] = [
    {
        question: "¿Cómo funciona el escáner de tickets con IA?",
        answer: "Simplemente toma una foto de tu ticket de compra. Nuestra IA analizará la imagen, extraerá cada producto con su precio y te sugerirá una categoría. Solo tienes que revisar y confirmar para que los precios se actualicen en tu catálogo personal. ¡Adiós a la entrada manual de datos!"
    },
    {
        question: "¿Puedo compartir mi lista con otra persona?",
        answer: "¡Claro! Puedes generar un enlace único para tu lista de la compra y compartirlo con tu familia o amigos. Cualquier cambio que hagan se reflejará en tiempo real para todos. Es perfecto para coordinar las compras y evitar duplicados."
    },
    {
        question: "¿Cómo me ayuda la app a ahorrar dinero de verdad?",
        answer: "Cuando creas tu lista, FitFatList calcula el coste total en cada una de tus tiendas guardadas. Te muestra un desglose claro para que puedas decidir al instante qué supermercado te ofrece el mejor precio para esa compra específica, maximizando tu ahorro."
    },
    {
        question: "¿Necesito registrarme para usar la app?",
        answer: "No es estrictamente necesario. Puedes usar la aplicación en modo local sin una cuenta. Sin embargo, para sincronizar tus listas, catálogos y precios entre varios dispositivos y asegurar que no pierdes tus datos, te recomendamos crear una cuenta gratuita."
    }
];

const AccordionItem: React.FC<{ faq: FAQItemProps; isOpen: boolean; onClick: () => void }> = ({ faq, isOpen, onClick }) => {
    return (
        <div className="border-b border-stone-gray/20">
            <button
                onClick={onClick}
                className="flex justify-between items-center w-full py-6 text-left"
                aria-expanded={isOpen}
            >
                <h3 className="text-lg font-semibold text-soft-black font-heading">{faq.question}</h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-olive-green">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: 'auto', y: 0 },
                            collapsed: { opacity: 0, height: 0, y: -10 }
                        }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-soft-black/80">{faq.answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const backdropVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const modalVariants: Variants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
        exit: { opacity: 0, y: 50, scale: 0.95, transition: { duration: 0.3, ease: 'easeIn' } },
    };

    return (
        <motion.div
            className="fixed inset-0 bg-soft-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <motion.div
                className="relative bg-[#F9F9F7] rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="sticky top-0 bg-[#F9F9F7]/80 backdrop-blur-md p-8 md:p-12 pb-8 z-10">
                    <button 
                        onClick={onClose} 
                        className="absolute top-4 right-4 text-soft-black/50 hover:text-bordeaux-red transition-colors"
                        aria-label="Cerrar preguntas frecuentes"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="text-center">
                        <span className="font-bold text-bordeaux-red uppercase tracking-widest text-sm">Dudas resueltas</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-soft-black font-heading mt-3">Preguntas Frecuentes</h2>
                        <p className="text-lg text-soft-black/80 mt-4 max-w-3xl mx-auto">Aquí tienes las respuestas a las dudas más comunes. Si no encuentras lo que buscas, no dudes en contactarnos.</p>
                    </div>
                </div>

                <div className="px-8 md:px-12 pb-8 md:pb-12">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default FAQ;