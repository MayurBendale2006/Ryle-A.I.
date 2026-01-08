import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AgencyCTA from '../components/AgencyCTA';

const HowItWorks = () => {
    return (
        <div>
            {/* Page Header */}
            <div className="section bg-gray text-center" style={{ paddingBottom: '0' }}>
                <div className="container">
                    <h1 style={{ marginBottom: '16px' }}>Your 24/7 AI Growth Engineer</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto' }}>
                        Ryze isn't just a dashboard. It's an autonomous agent that actively manages your ads.
                    </p>
                </div>
            </div>

            {/* Step 1 */}
            <section className="section">
                <div className="container text-center">
                    <div className="card-base" style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--space-12)' }}>
                        <span style={{ color: 'var(--color-primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Step 01</span>
                        <h2 style={{ marginTop: '16px', marginBottom: '16px' }}>The Audit & Connect</h2>
                        <p>
                            Securely connect your Meta, Google, and TikTok ad accounts.
                            Ryze identifies historical patterns, winners, and losers instantly using
                            read-only API access first.
                        </p>
                    </div>
                </div>
            </section>

            {/* Step 2 */}
            <section className="section bg-gray">
                <div className="container text-center">
                    <div className="card-base" style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--space-12)' }}>
                        <span style={{ color: 'var(--color-primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Step 02</span>
                        <h2 style={{ marginTop: '16px', marginBottom: '16px' }}>Real-Time Bidding</h2>
                        <p>
                            Human buyers adjust bids weekly. Ryze adjusts them hourly.
                            Our algorithms detect budget inefficiencies at 3AM and kill the ad before
                            you wake up, saving huge amounts of wasted spend.
                        </p>
                    </div>
                </div>
            </section>

            {/* Integrations */}
            <section className="section text-center">
                <div className="container">
                    <h3>Works where you advertise</h3>
                    <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', marginTop: '32px', opacity: '0.6', fontWeight: '700', fontSize: '1.5rem' }}>
                        <span>Meta Ads</span>
                        <span>Google Ads</span>
                        <span>TikTok</span>
                        <span>Shopify</span>
                    </div>
                </div>
            </section>

            <AgencyCTA />
            <Footer />
        </div>
    );
};

export default HowItWorks;
