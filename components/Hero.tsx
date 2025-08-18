import React from 'react';
import { motion, Variants } from 'framer-motion';

const HeroIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="phone-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B2F3C" />
                <stop offset="100%" stopColor="#E9C46A" />
            </linearGradient>
             <linearGradient id="list-item-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#A3B18A" />
                <stop offset="100%" stopColor="#707C4F" />
            </linearGradient>
            <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>

        {/* Background shapes */}
        <circle cx="100" cy="100" r="150" fill="url(#list-item-grad)" opacity="0.1" />
        <path d="M 300 50 C 500 150, 450 400, 250 350 S 50 250, 300 50 Z" fill="#E9C46A" opacity="0.1" />

        {/* Floating receipt element */}
        <g transform="translate(20, 250) rotate(-15)">
            <rect x="0" y="0" width="120" height="180" rx="10" fill="white" filter="url(#soft-glow)" opacity="0.9" />
            <rect x="10" y="15" width="80" height="5" rx="2" fill="#E2E2E2" />
            <rect x="10" y="30" width="60" height="5" rx="2" fill="#E2E2E2" />
            <rect x="10" y="45" width="90" height="5" rx="2" fill="#E2E2E2" />
             <path d="M 10 60 L 110 60" stroke="#E2E2E2" strokeWidth="2" strokeDasharray="4 4" />
             <rect x="10" y="75" width="70" height="5" rx="2" fill="#E2E2E2" />
        </g>
        
        {/* Phone Mockup */}
        <g transform="translate(150, 40)">
            {/* Phone case */}
            <rect x="-5" y="-5" width="210" height="330" rx="35" fill="#1A1A1A" />
            
            {/* Screen */}
            <rect x="0" y="0" width="200" height="320" rx="30" fill="#F6F4EB" />
            
            {/* UI Header */}
            <rect x="15" y="15" width="170" height="30" rx="15" fill="#FFFFFF" />
            <circle cx="40" cy="30" r="8" fill="#707C4F" />
            <rect x="55" y="25" width="50" height="10" rx="5" fill="#A3B18A" />

            {/* List Item 1 */}
            <rect x="15" y="60" width="170" height="50" rx="15" fill="#FFFFFF" />
            <rect x="25" y="70" width="30" height="30" rx="8" fill="#E2E2E2" />
            <rect x="65" y="75" width="80" height="8" rx="4" fill="#A3B18A" />
            <rect x="65" y="90" width="50" height="6" rx="3" fill="#E2E2E2" />

            {/* List Item 2 (Checked) */}
            <rect x="15" y="120" width="170" height="50" rx="15" fill="#FFFFFF" />
            <rect x="25" y="130" width="30" height="30" rx="8" fill="url(#list-item-grad)" />
            <path d="M30 145 L 35 150 L 45 140" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
            <rect x="65" y="135" width="80" height="8" rx="4" fill="#A3B18A" />
            <rect x="65" y="150" width="50" height="6" rx="3" fill="#E2E2E2" />
            <path d="M 65 147 L 145 147" stroke="#707C4F" strokeWidth="2" />


            {/* Price comparison widget */}
            <rect x="15" y="185" width="170" height="70" rx="15" fill="#FFFFFF" />
            <rect x="25" y="195" width="150" height="8" rx="4" fill="#A3B18A" />
            <rect x="35" y="215" width="100" height="10" rx="5" fill="#E9C46A" />
            <rect x="35" y="230" width="130" height="10" rx="5" fill="#8B2F3C" />

            {/* CTA Button */}
            <rect x="15" y="265" width="170" height="40" rx="20" fill="url(#phone-bg)" />
            <text x="100" y="290" fill="white" textAnchor="middle" fontSize="14" fontWeight="bold">Comparar</text>
        </g>
    </svg>
);


const Hero: React.FC = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-cream to-[#F7F5EC] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        className="text-center md:text-left md:pl-24"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h2 
                            variants={itemVariants}
                            className="text-4xl md:text-6xl font-bold text-soft-black leading-tight mb-6 font-heading max-w-xl mx-auto md:mx-0"
                        >
                            Ahorra tiempo y dinero en <span className="text-olive-green">cada compra</span>.
                        </motion.h2>
                        <motion.p 
                            variants={itemVariants}
                            className="text-lg md:text-xl text-soft-black/80 mb-10 max-w-xl mx-auto md:mx-0"
                        >
                            FitFatList es tu asistente personal. Escanea tickets con IA, compara el coste total entre tus tiendas y genera listas organizadas para comprar de forma más inteligente.
                        </motion.p>
                        <motion.div variants={itemVariants}>
                            <a href="https://fitfatlist---lista-de-co-a8a1e.web.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gradient-to-br from-bordeaux-red to-warm-ochre text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-lg">
                                Crea tu primera lista gratis
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </a>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        className="hidden md:block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        <HeroIllustration />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;