
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
    const [isFaqVisible, setIsFaqVisible] = useState(false);

    const handleFaqToggle = () => {
        setIsFaqVisible(prev => !prev);
    };

    useEffect(() => {
        if (isFaqVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isFaqVisible]);

    return (
        <div className="min-h-screen">
            <Header onFaqClick={handleFaqToggle} />
            <main>
                <Hero />
                <Features />
                <HowItWorks />
                <Testimonials />
                <Pricing />
                <CTA />
            </main>
            <Footer onFaqClick={handleFaqToggle} />
            <AnimatePresence>
                {isFaqVisible && <FAQ onClose={handleFaqToggle} />}
            </AnimatePresence>
        </div>
    );
};

export default App;
