import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
                    <h2>Your autonomous growth engine</h2>
                    <p style={{ marginTop: 'var(--space-2)' }}>Replace manual workflows with intelligent automation.</p>
                </div>

                <div className="steps-container">
                    <StepCard number="01" title="Monitor" desc="Ryze connects to your ad accounts to analyze 24/7 performance data across every campaign." />
                    <StepCard number="02" title="Optimize" desc="AI instantly cuts budget from losing ads and reallocates it to top-performing creatives." />
                    <StepCard number="03" title="Create" desc="Generates new high-converting ad creatives based on what's working to keep ROAS high." />
                </div>
            </div>
        </section>
    );
};

const StepCard = ({ number, title, desc }) => (
    <div className="step-card">
        <div className="step-number">{number}</div>
        <h3 style={{ marginBottom: '8px' }}>{title}</h3>
        <p style={{ fontSize: '1rem' }}>{desc}</p>
    </div>
);

export default HowItWorks;
