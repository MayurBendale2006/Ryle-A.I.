import React from 'react';
import './FeaturesGrid.css';
import { Bot, BarChart, MessageSquare, Zap, ArrowUpRight, CheckCircle } from 'lucide-react';

const FeaturesGrid = () => {
    return (
        <section className="section container" id="features">
            <div className="features-header">
                <h2 className="section-title">
                    Supercharge your <span className="text-primary">marketing team</span>
                </h2>
                <p className="section-subtitle">
                    Ryze uses autonomous agents to audit, optimize, and scale your campaigns 24/7.
                </p>
            </div>

            <div className="bento-grid">
                {/* Card 1: Creative Generation - Large Span */}
                <div className="bento-card card-creative">
                    <div className="card-header">
                        <span className="sc-badge">
                            <Bot size={16} /> AI Creative
                        </span>
                        <ArrowUpRight size={20} className="icon-link" />
                    </div>
                    <h3 className="card-heading">Creative Generation</h3>
                    <p className="card-subtext">Automated ad variations tailored to your audience.</p>
                    <div className="visual-preview creative-preview">
                        <div className="preview-item">
                            <div className="skeleton-img"></div>
                            <div className="skeleton-text">
                                <div className="bar w-75"></div>
                                <div className="bar w-50"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2: Performance Audit - Standard */}
                <div className="bento-card card-audit">
                    <div className="card-header">
                        <span className="sc-badge blue">
                            <BarChart size={16} /> Audits
                        </span>
                    </div>
                    <h3 className="card-heading">24/7 Account Audits</h3>
                    <ul className="audit-list">
                        <li><CheckCircle size={16} className="text-green" /> Wasted spend detection</li>
                        <li><CheckCircle size={16} className="text-green" /> Audience overlap check</li>
                        <li><CheckCircle size={16} className="text-green" /> Keyword conflict alerts</li>
                    </ul>
                </div>

                {/* Card 3: ROAS - Metric Focus */}
                <div className="bento-card card-roas">
                    <div className="card-header">
                        <span className="sc-badge green">
                            <Zap size={16} /> Results
                        </span>
                    </div>
                    <div className="metric-display">
                        <span className="metric-val">+4.5x</span>
                        <span className="metric-label">ROAS Increase</span>
                    </div>
                    <div className="chart-line"></div>
                </div>

                {/* Card 4: Cross Platform - Wide */}
                <div className="bento-card card-platform">
                    <div className="card-content-flx">
                        <div>
                            <h3 className="card-heading">Cross-Platform</h3>
                            <p className="card-subtext">Manage Meta, Google, and LinkedIn from one place.</p>
                        </div>
                        <div className="platform-icons">
                            {/* Simple circles for logos */}
                            <div className="p-icon" style={{ background: '#1877F2' }}></div>
                            <div className="p-icon" style={{ background: '#EA4335' }}></div>
                            <div className="p-icon" style={{ background: '#0A66C2' }}></div>
                        </div>
                    </div>
                </div>

                {/* Card 5: Chat Interface - Tall */}
                <div className="bento-card card-chat">
                    <div className="card-header">
                        <span className="sc-badge purple">
                            <MessageSquare size={16} /> Assistant
                        </span>
                    </div>
                    <h3 className="card-heading">ChatGPT for Ads</h3>
                    <div className="chat-ui-mock">
                        <div className="chat-msg user">How can I lower CPA?</div>
                        <div className="chat-msg bot">Try excluding "free" from your broad match...</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
