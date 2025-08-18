
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface StepProps {
    number: string;
    title: string;
    description: string;
}

const stepsData: StepProps[] = [
    {
        number: "1",
        title: "Construye tu Catálogo Personal",
        description: "Añade tus productos favoritos y organízalos por categorías. Este será tu inventario personal, listo para usar una y otra vez."
    },
    {
        number: "2",
        title: "Digitaliza tus Tickets con IA",
        description: "Después de comprar, simplemente toma una foto a tu ticket. Nuestra IA lo leerá y actualizará los precios en tu catálogo. ¡Así de fácil!"
    },
    {
        number: "3",
        title: "Planifica, Compara y Elige",
        description: "Selecciona lo que necesitas para tu próxima compra. FitFatList te mostrará el coste total en cada tienda y te ayudará a elegir la opción más económica."
    },
    {
        number: "4",
        title: "Genera, Comparte y ¡A Comprar!",
        description: "Crea tu lista final, organizada por pasillos. ¿Necesitas ayuda? Compártela con un solo clic para que otros puedan comprar contigo en tiempo real."
    }
];

const Step: React.FC<StepProps> = ({ number, title, description }) => (
    <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-5 ring-4 ring-sage-green/50">
            <span className="text-3xl font-bold text-olive-green">{number}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-soft-black font-heading">{title}</h3>
        <p className="text-soft-black/80 max-w-xs">{description}</p>
    </div>
);

const HowItWorks: React.FC = () => {
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
        <section id="how-it-works" className="py-20 bg-cream">
            <div className="container mx-auto px-6">
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold text-soft-black font-heading">Tan fácil como 1, 2, 3... 4</h2>
                    <p className="text-lg text-soft-black/80 mt-4">Demostramos que la aplicación no es complicada, transformando el caos en un proceso fluido.</p>
                </motion.div>
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {stepsData.map((step, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Step {...step} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
