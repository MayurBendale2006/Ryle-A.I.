import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-pill">New v2.0</span>
                        <span className="badge-text">Autonomous Ad Optimization</span>
                    </div>

                    <h1 className="hero-title">
                        Stop burning money on <br className="hidden-mobile" />
                        <span className="text-primary">inefficient ads.</span>
                    </h1>

                    <p className="hero-subtitle">
                        Ryze connects to your ad accounts, identifies wasted spend, and launches
                        high-performing creatives 24/7. Stop paying agencies to guess.
                    </p>

                    <div className="hero-actions">
                        <button className="btn btn-primary btn-large">
                            Start Free Trial
                        </button>
                        <button className="btn btn-secondary btn-large">
                            View Case Studies
                        </button>
                    </div>

                    <div className="hero-trust">
                        <p>Trusted by 230+ growth teams managing $10M+ in spend</p>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="dashboard-mockup">
                        <div className="mockup-header">
                            <div className="traffic-lights">
                                <span className="light red"></span>
                                <span className="light yellow"></span>
                                <span className="light green"></span>
                            </div>
                            <div className="address-bar">app.get-ryze.ai/dashboard</div>
                        </div>
                        <div className="mockup-body">
                            {/* CSS Art Dashboard */}
                            <div className="mock-sidebar">
                                <div className="mock-line" style={{ width: '60%' }}></div>
                                <div className="mock-line" style={{ width: '80%' }}></div>
                                <div className="mock-line" style={{ width: '70%' }}></div>
                            </div>
                            <div className="mock-main">
                                <div className="mock-stats-row">
                                    <div className="mock-card">
                                        <div className="mock-label">Wasted Spend</div>
                                        <div className="mock-val text-red">-$2,400</div>
                                    </div>
                                    <div className="mock-card">
                                        <div className="mock-label">Optimized ROI</div>
                                        <div className="mock-val text-green">4.5x</div>
                                    </div>
                                    <div className="mock-card">
                                        <div className="mock-label">Active Acts</div>
                                        <div className="mock-val">12</div>
                                    </div>
                                </div>
                                <div className="mock-chart">
                                    <div className="chart-bar" style={{ height: '30%' }}></div>
                                    <div className="chart-bar" style={{ height: '50%' }}></div>
                                    <div className="chart-bar" style={{ height: '40%' }}></div>
                                    <div className="chart-bar active" style={{ height: '80%' }}></div>
                                    <div className="chart-bar" style={{ height: '65%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
