
import React from 'react';

const Footer: React.FC<{ onFaqClick: () => void }> = ({ onFaqClick }) => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <footer className="bg-soft-black text-cream">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div>
                        <h3 className="text-xl font-bold text-white font-heading">FitFatList</h3>
                        <p className="text-cream/70 text-sm mt-1">Tu compra, más inteligente y más barata.</p>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="text-cream/80 hover:text-white px-3 py-2 text-sm transition-colors">Beneficios</a>
                        <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} className="text-cream/80 hover:text-white px-3 py-2 text-sm transition-colors">Cómo Funciona</a>
                        <button type="button" onClick={onFaqClick} className="text-cream/80 hover:text-white px-3 py-2 text-sm transition-colors">FAQ</button>
                        <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')} className="text-cream/80 hover:text-white px-3 py-2 text-sm transition-colors">Testimonios</a>
                        <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="text-cream/80 hover:text-white px-3 py-2 text-sm transition-colors">Precios</a>
                    </div>
                </div>
                <div className="mt-8 border-t border-cream/20 pt-6 text-center text-cream/50 text-sm">
                    <p>&copy; {new Date().getFullYear()} FitFatList. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
