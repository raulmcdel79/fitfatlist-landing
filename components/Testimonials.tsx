
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Testimonial } from '../types';

const testimonialData: Testimonial[] = [
    {
        quote: "Desde que uso FitFatList, he reducido mi gasto mensual en el supermercado casi 50€. Ver los precios comparados antes de salir de casa lo cambia todo. Es una herramienta imprescindible para mi familia.",
        author: "Laura M.",
        role: "Madre de dos",
        avatarUrl: "https://picsum.photos/seed/person1/100/100"
    },
    {
        quote: "Lo que más me alucina es el escáner de tickets. Odio introducir datos manualmente y esto lo hace por mí. Me ahorra un tiempo increíble cada semana y mantiene mis precios siempre al día sin que yo haga casi nada.",
        author: "Carlos G.",
        role: "Desarrollador de software",
        avatarUrl: "https://picsum.photos/seed/person2/100/100"
    },
    {
        quote: "¡Se acabaron las compras duplicadas! Ahora compartimos la lista y si uno añade algo, el otro lo ve al instante. Ha hecho que hacer la compra juntos sea mucho más fácil y coordinado.",
        author: "Ana y David",
        role: "Pareja",
        avatarUrl: "https://picsum.photos/seed/person3/100/100"
    }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
    const cardVariants: Variants = {
        rest: { y: 0 },
        hover: { y: -8 }
    };

    const quoteVariants: Variants = {
        rest: { scale: 1, x: 32, y: -32, opacity: 0.2 },
        hover: { scale: 1.1, x: 20, y: -40, opacity: 0.25 }
    };

    return (
        <motion.div 
            className="bg-cream/50 p-8 rounded-2xl shadow-lg flex flex-col h-full relative overflow-hidden border border-stone-gray/10"
            variants={cardVariants}
            initial="rest"
            whileHover="hover"
            animate="rest"
            transition={{ duration: 0.3, ease: 'easeOut' }}
        >
            <motion.div 
                className="absolute top-0 right-0"
                variants={quoteVariants}
                transition={{ duration: 0.3, ease: 'easeOut' }}
            >
                <svg className="w-32 h-32 text-sage-green" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.333 4C4.186 4 0 8.186 0 13.333c0 5.147 4.186 9.333 9.333 9.333.36 0 .707-.027 1.053-.08a1.333 1.333 0 001.2-1.466c-.16-1.574-.68-2.987-1.52-4.147-1.027-.986-2.587-1.826-4.6-2.48l.24-1.12c2.8.586 4.907 1.88 6.2 3.826a1.333 1.333 0 002.2-.84c.613-2.2.933-4.52.933-6.946C15.066 6.84 12.52 4 9.333 4zm13.334 0c-5.147 0-9.333 4.186-9.333 9.333 0 5.147 4.186 9.333 9.333 9.333.36 0 .707-.027 1.053-.08a1.333 1.333 0 001.2-1.466c-.16-1.574-.68-2.987-1.52-4.147-1.027-.986-2.587-1.826-4.6-2.48l.24-1.12c2.8.586 4.907 1.88 6.2 3.826a1.333 1.333 0 002.2-.84c.613-2.2.933-4.52.933-6.946C28.4 6.84 25.853 4 22.667 4z" />
                </svg>
            </motion.div>

            <div className="flex flex-col h-full relative z-10">
                <p className="text-soft-black/80 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center mt-auto pt-6 border-t border-stone-gray/20">
                    <img src={testimonial.avatarUrl} alt={testimonial.author} className="w-14 h-14 rounded-full mr-4 border-2 border-olive-green p-1" />
                    <div>
                        <p className="font-semibold text-soft-black font-heading">{testimonial.author}</p>
                        <p className="text-sm text-soft-black/70">{testimonial.role}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Testimonials: React.FC = () => {
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section id="testimonials" className="py-20 bg-[#F9F9F7]">
            <div className="container mx-auto px-6">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold text-soft-black font-heading">Lo que dicen nuestros usuarios</h2>
                    <p className="text-lg text-soft-black/80 mt-4">Nos encanta saber que personas reales resuelven problemas reales con FitFatList.</p>
                </motion.div>
                <motion.div 
                    className="grid md:grid-cols-3 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {testimonialData.map((testimonial, index) => (
                         <motion.div key={index} variants={itemVariants}>
                            <TestimonialCard testimonial={testimonial} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
