
import React from 'react';
import { motion, Variants } from 'framer-motion';

const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.6-2.6L11.25 18l1.938-.648a3.375 3.375 0 002.6-2.6l.648-1.938 1.938.648a3.375 3.375 0 002.6 2.6l.648 1.938-.648 1.938a3.375 3.375 0 00-2.6 2.6z" />
    </svg>
);

const ReceiptTaxIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5 4.5l-1.5-1.5m3-1.5l-1.5-1.5m0 0l-1.5 1.5m-4.5-4.5L6.75 12m6.75 4.5l-1.5-1.5M12 12.75l-1.5-1.5M12 12.75l1.5 1.5M12 12.75l-1.5 1.5M12 12.75l1.5-1.5M15 21l-3-3L9 21m-3-3l3-3l-3-3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 2.25c-.247 0-.49.02-.731.059l-2.251.256a.75.75 0 00-.733.823V7.125c0 .414.336.75.75.75h3.375c.414 0 .75-.336.75-.75V3.189c0-.353-.263-.654-.609-.71l-2.25-.256A8.953 8.953 0 0014.25 2.25z" />
    </svg>
);

const ClipboardListIcon: React.FC<{ className?: string }> = ({ className }) => (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75c0-.231-.035-.454-.1-.664M6.75 7.5h.75v.75h-.75V7.5zM6.75 10.5h.75v.75h-.75v-.75zM6.75 13.5h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM4.5 6.108a2.25 2.25 0 00-2.25 2.25v10.302c0 1.243 1.007 2.25 2.25 2.25h10.5A2.25 2.25 0 0017.25 18.66v-2.162c0-.528-.213-1.02-.586-1.386l-3.95-3.952a.75.75 0 00-1.06 0L8.102 14.03a.75.75 0 000 1.06l3.95 3.952c.373.373.586.858.586 1.386v2.162A2.25 2.25 0 0115 20.849V12.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08" />
    </svg>
);

const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.57-.059 1.137-.094 1.71-.094a9.093 9.093 0 012.862.434m-7.016 0a8.949 8.949 0 01-2.232.056a3 3 0 01-3.237-2.472M12 10.5a3 3 0 11-6 0 3 3 0 016 0zM12 10.5a3 3 0 00-3-3m3 3a3 3 0 003-3m-3 3a3 3 0 00-3 3m6-3a3 3 0 00-3-3m3 3a3 3 0 003-3m-3 3a3 3 0 00-3 3m.25 6a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

interface FeatureCardProps {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-stone-gray/10 group">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-cream to-sage-green/40 mb-6 shrink-0 transition-all duration-300 group-hover:from-sage-green group-hover:to-olive-green">
          <Icon className="h-8 w-8 text-olive-green transition-all duration-300 group-hover:text-white" />
        </div>
        <h3 className="text-xl font-bold text-soft-black mb-3 font-heading">{title}</h3>
        <p className="text-soft-black/80 leading-relaxed">{description}</p>
    </div>
);


const Features: React.FC = () => {
    const featuresData: FeatureCardProps[] = [
        {
            icon: SparklesIcon,
            title: "Tu tiempo es valioso. Deja que la IA haga el trabajo pesado.",
            description: "¿Cansado de teclear precios? Saca una foto a tu ticket y nuestra Inteligencia Artificial lo digitalizará por ti. Mantén tus precios actualizados y crea tus listas en un abrir y cerrar de ojos."
        },
        {
            icon: ReceiptTaxIcon,
            title: "Compra de forma más inteligente, no más cara.",
            description: "Compara precios al instante entre tus tiendas habituales. FitFatList calcula el total de tu cesta en cada supermercado para que siempre elijas la opción que más le conviene a tu bolsillo."
        },
        {
            icon: ClipboardListIcon,
            title: "Del caos en el súper a una compra fluida.",
            description: "Genera listas organizadas por pasillos para un recorrido eficiente. Una barra de progreso te muestra cuánto llevas comprado, dándote una sensación de control y logro."
        },
        {
            icon: UsersIcon,
            title: "Sincronización total para equipos.",
            description: "Compártela con tu familia y ved los cambios en tiempo real. ¡Se acabaron las llamadas de última hora desde el supermercado y las compras duplicadas!"
        }
    ];

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <section id="features" className="py-20 bg-[#F9F9F7]">
            <div className="container mx-auto px-6">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="font-bold text-bordeaux-red uppercase tracking-widest text-sm">Beneficios Clave</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-soft-black font-heading mt-3">¿Por qué necesitas esta app?</h2>
                    <p className="text-lg text-soft-black/80 mt-4 max-w-5xl mx-auto">FitFatList no es solo una lista, es tu asistente de compras personal que te ahorra tiempo y dinero.</p>
                </motion.div>
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {featuresData.map((feature, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <FeatureCard {...feature} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;