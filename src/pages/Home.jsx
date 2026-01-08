import React from 'react';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import HomeFeatures from '../components/HomeFeatures';
import AgencyCTA from '../components/AgencyCTA';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <ProblemSection />
            <HomeFeatures />
            <div className="container section text-center">
                {/* Social Proof Mini-Section */}
                <h3 style={{ marginBottom: '32px' }}>Real Results</h3>
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '32px' }}>
                    <div>
                        <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-primary)' }}>+60%</div>
                        <div style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', color: 'var(--color-slate-500)' }}>CTR Increase</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-primary)' }}>30%</div>
                        <div style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', color: 'var(--color-slate-500)' }}>Lower CPA</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-primary)' }}>$10M+</div>
                        <div style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', color: 'var(--color-slate-500)' }}>Spend Managed</div>
                    </div>
                </div>
            </div>
            <AgencyCTA />
            <Footer />
        </div>
    );
};

export default Home;
