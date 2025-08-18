import React from 'react';
import { motion } from 'framer-motion';

const CtaIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(50, 20)">
            <defs>
                <linearGradient id="cta-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F6F4EB" />
                    <stop offset="100%" stopColor="#E9C46A" />
                </linearGradient>
            </defs>
            {/* Person silhouette */}
            <circle cx="250" cy="150" r="40" fill="url(#cta-grad)"/>
            <path d="M220 190 C 220 250, 280 250, 280 190 Z" fill="url(#cta-grad)"/>
            
            {/* Abstract checkmark */}
            <path d="M180 150 L 220 200 L 300 120" stroke="#FFFFFF" strokeWidth="15" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
            
             {/* Floating elements */}
            <circle cx="100" cy="120" r="20" fill="#FFFFFF" opacity="0.5" />
            <rect x="350" y="250" width="50" height="50" rx="10" fill="#FFFFFF" opacity="0.3" transform="rotate(30 375 275)" />
        </g>
    </svg>
);


const CTA: React.FC = () => {
    return (
        <section className="bg-gradient-to-br from-olive-green to-sage-green text-white overflow-hidden">
            <div className="container mx-auto px-6 py-20">
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        className="text-center md:text-left md:pl-24"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <h2 className="text-4xl font-bold mb-4 font-heading max-w-xl mx-auto md:mx-0">¿Listo para comprar de forma más inteligente?</h2>
                        <p className="text-lg text-cream/80 mb-8 max-w-xl mx-auto md:mx-0">
                            Únete a miles de usuarios que ya ahorran tiempo y dinero en cada compra. Es gratis, rápido y transformará tu rutina.
                        </p>
                        <a 
                            href="https://fitfatlist---lista-de-co-a8a1e.web.app/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-block bg-warm-ochre hover:bg-opacity-90 text-soft-black font-bold py-4 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-lg"
                        >
                            Crea tu primera lista ahora
                        </a>
                    </motion.div>
                    <motion.div 
                        className="hidden md:block"
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <CtaIllustration />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA;