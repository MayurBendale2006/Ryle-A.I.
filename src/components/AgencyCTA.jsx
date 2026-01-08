import React from 'react';

const AgencyCTA = () => {
    return (
        <section className="section" style={{ background: 'var(--color-slate-900)', color: 'white', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ color: 'white', marginBottom: '24px' }}>
                    Replace your agency. <br />
                    Save 100+ hours.
                </h2>
                <p style={{ color: 'var(--color-slate-500)', marginBottom: '48px', maxWidth: '600px', marginInline: 'auto' }}>
                    Join the fastest growing companies using Ryze to scale their paid acquisition without the agency bloat.
                </p>
                <button className="btn btn-primary btn-large">
                    Start Free Trial
                </button>
            </div>
        </section>
    );
};

export default AgencyCTA;
