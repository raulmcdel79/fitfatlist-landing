import React from 'react';
import { motion } from 'framer-motion';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const Pricing: React.FC = () => {
    const features = [
        'Listas de la compra ilimitadas',
        'Catálogo de productos personal',
        'Comparador de precios entre tiendas',
        'Escaneo de tickets con IA',
        'Listas compartidas en tiempo real',
        'Sincronización en la nube (con cuenta)',
    ];

    return (
        <section id="pricing" className="py-20 bg-cream">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold text-soft-black font-heading">Un plan simple y transparente</h2>
                    <p className="text-lg text-soft-black/80 mt-4 max-w-2xl mx-auto">Todas las funciones, sin costes ocultos ni sorpresas. Empieza a optimizar tus compras hoy mismo.</p>
                </motion.div>

                <motion.div
                    className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-stone-gray/10"
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-olive-green font-heading">Gratis para siempre</h3>
                        <p className="mt-4">
                            <span className="text-6xl font-bold text-soft-black">0€</span>
                            <span className="text-xl text-soft-black/70">/para siempre</span>
                        </p>
                        <p className="text-soft-black/80 mt-4">Acceso completo a todas las herramientas que necesitas para comprar de forma más inteligente.</p>
                    </div>

                    <ul className="mt-8 space-y-4">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <CheckIcon className="w-6 h-6 text-sage-green mr-3 mt-0.5 shrink-0" />
                                <span className="text-soft-black/90">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10">
                        <a href="https://fitfatlist---lista-de-co-a8a1e.web.app/" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gradient-to-br from-olive-green to-sage-green text-white font-semibold py-4 px-5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-lg">
                            Empezar ahora
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;