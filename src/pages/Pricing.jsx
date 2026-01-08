import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AgencyCTA from '../components/AgencyCTA';
import { Check } from 'lucide-react';

const Pricing = () => {
    return (
        <div>
            {/* Header */}
            <section className="section text-center">
                <div className="container">
                    <h1>Pricing that scales with profit</h1>
                    <p>Stop paying % of ad spend. Pay for performance tech.</p>
                </div>
            </section>

            {/* Comparison */}
            <section className="section bg-gray">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>

                        {/* Comparison Card: Agency */}
                        <div className="card-base" style={{ opacity: 0.8 }}>
                            <h3 className="text-center" style={{ color: 'var(--color-slate-500)' }}>Traditional Agency</h3>
                            <div className="text-center" style={{ margin: '32px 0' }}>
                                <div style={{ fontSize: '2rem', fontWeight: '700' }}>$2,500<span style={{ fontSize: '1rem' }}>/mo</span></div>
                                <div style={{ color: 'var(--color-slate-500)' }}>+ 15% of Ad Spend</div>
                            </div>
                            <ul style={{ listStyle: 'none', space: 'y-4' }}>
                                <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>❌ Expensive Retainers</li>
                                <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>❌ Weekly Reporting</li>
                                <li style={{ padding: '8px 0' }}>❌ Manual Errors</li>
                            </ul>
                        </div>

                        {/* Comparison Card: Ryze */}
                        <div className="card-base" style={{ border: '2px solid var(--color-primary)', position: 'relative' }}>
                            <div style={{
                                position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                                background: 'var(--color-primary)', color: 'white', padding: '4px 12px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: '600'
                            }}>RECOMMENDED</div>

                            <h3 className="text-center" style={{ color: 'var(--color-primary)' }}>Ryze AI</h3>
                            <div className="text-center" style={{ margin: '32px 0' }}>
                                <div style={{ fontSize: '2rem', fontWeight: '700' }}>$299<span style={{ fontSize: '1rem' }}>/mo</span></div>
                                <div style={{ color: 'var(--color-slate-500)' }}>Flat Fee. No % of spend.</div>
                            </div>
                            <ul style={{ listStyle: 'none' }}>
                                <li style={{ padding: '8px 0', borderBottom: '1px solid #eee', display: 'flex', gap: '8px' }}><Check size={20} color="var(--color-primary)" /> 24/7 Monitoring</li>
                                <li style={{ padding: '8px 0', borderBottom: '1px solid #eee', display: 'flex', gap: '8px' }}><Check size={20} color="var(--color-primary)" /> Instant Optmization</li>
                                <li style={{ padding: '8px 0', display: 'flex', gap: '8px' }}><Check size={20} color="var(--color-primary)" /> AI Ad Creative</li>
                            </ul>
                            <button className="btn btn-primary" style={{ width: '100%', marginTop: '24px' }}>Start 14-Day Free Trial</button>
                        </div>

                    </div>
                </div>
            </section>

            <AgencyCTA />
            <Footer />
        </div>
    );
};

export default Pricing;
