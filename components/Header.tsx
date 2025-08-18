
import React from 'react';

const Header: React.FC<{ onFaqClick: () => void }> = ({ onFaqClick }) => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header className="bg-cream/90 backdrop-blur-lg sticky top-0 z-50 border-b border-stone-gray/20 shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-olive-green font-heading">
                    FitFatList
                </h1>
                <nav className="hidden md:flex items-center space-x-2">
                    <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="text-soft-black/80 hover:text-olive-green px-3 py-2 text-sm font-medium transition-colors relative group">
                        <span>Beneficios</span>
                        <span className="absolute bottom-1 left-0 w-full h-0.5 bg-sage-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                    </a>
                    <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} className="text-soft-black/80 hover:text-olive-green px-3 py-2 text-sm font-medium transition-colors relative group">
                        <span>Cómo Funciona</span>
                        <span className="absolute bottom-1 left-0 w-full h-0.5 bg-sage-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                    </a>
                    <button type="button" onClick={onFaqClick} className="text-soft-black/80 hover:text-olive-green px-3 py-2 text-sm font-medium transition-colors relative group">
                        <span>FAQ</span>
                        <span className="absolute bottom-1 left-0 w-full h-0.5 bg-sage-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                    </button>
                    <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')} className="text-soft-black/80 hover:text-olive-green px-3 py-2 text-sm font-medium transition-colors relative group">
                        <span>Testimonios</span>
                        <span className="absolute bottom-1 left-0 w-full h-0.5 bg-sage-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                    </a>
                    <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="text-soft-black/80 hover:text-olive-green px-3 py-2 text-sm font-medium transition-colors relative group">
                        <span>Precios</span>
                        <span className="absolute bottom-1 left-0 w-full h-0.5 bg-sage-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                    </a>
                    <a href="https://fitfatlist---lista-de-co-a8a1e.web.app/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-olive-green to-sage-green text-white font-semibold py-2 px-5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 ml-4 flex items-center gap-2">
                        Ir a la App
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
