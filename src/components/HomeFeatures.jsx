import React from 'react';

const HomeFeatures = () => {
    const steps = [
        { title: "Monitor", desc: "Ryze connects to your ad accounts to analyze 24/7 performance data across every campaign.", num: "01" },
        { title: "Optimize", desc: "AI instantly cuts budget from losing ads and reallocates it to top-performing creatives.", num: "02" },
        { title: "Create", desc: "Generates new high-converting ad creatives based on what's working to keep ROAS high.", num: "03" }
    ];

    return (
        <section className="section">
            <div className="container">
                <div className="text-center" style={{ marginBottom: 'var(--space-16)' }}>
                    <span style={{
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: 'var(--color-primary)'
                    }}>The Solution</span>
                    <h2>Your autonomous growth engine</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-8)' }}>
                    {steps.map((step, i) => (
                        <div key={i} style={{ padding: 'var(--space-6)', borderTop: '2px solid var(--color-slate-200)' }}>
                            <div style={{
                                fontSize: '3rem', fontWeight: '800',
                                color: 'var(--color-slate-200)',
                                lineHeight: '1', marginBottom: '16px'
                            }}>{step.num}</div>
                            <h3 style={{ marginBottom: '8px' }}>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeFeatures;
