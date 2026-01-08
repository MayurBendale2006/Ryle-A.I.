import React from 'react';
import { Bot, BarChart, MessageSquare, Zap, Target, Search } from 'lucide-react';
import "../components/FeaturesGrid.css"; // Reusing grid styles

const featuresList = [
    {
        icon: <Bot size={24} />,
        title: "Autonomous AI Marketer",
        description: "Our AI agents monitor your campaigns 24/7. They detect performance dips, suggest optimizations, and even execute changes automatically if you enable autopilot."
    },
    {
        icon: <MessageSquare size={24} />,
        title: "Natural Language Queries",
        description: "Don't dig through complex dashboards. Just ask 'Which creative had the best CTR last week?' and get an immediate answer with data visualization."
    },
    {
        icon: <BarChart size={24} />,
        title: "Deep Performance Reports",
        description: "Get weekly PDF reports that break down your ad performance by visual element, hook, and call-to-action. Understand WHY an ad works."
    },
    {
        icon: <Target size={24} />,
        title: "Audience Targeting",
        description: "AI analyzes your best customers and automatically refines audience targeting on Meta and Google to find more lookalikes."
    },
    {
        icon: <Zap size={24} />,
        title: "Creative Generation",
        description: "Need new ad ideas? Ryze generates new ad copy and visual concepts based on your winning ads, ready for your design team."
    },
    {
        icon: <Search size={24} />,
        title: "Wasted Spend Detection",
        description: "Automatically identify and exclude negative keywords and low-performing placements to save budget for what works."
    }
];

const Features = () => {
    return (
        <div className="page-wrapper">
            <section className="section container text-center">
                <h1 className="hero-title" style={{ fontSize: '3rem' }}>
                    Everything you need to <br />
                    <span className="text-accent">scale ads profitable.</span>
                </h1>
                <p className="hero-description" style={{ margin: '0 auto' }}>
                    Ryze replaces the manual grunt work of ad management with intelligent agents.
                </p>
            </section>

            <section className="section container" style={{ borderRadius: 'var(--radius-lg)', background: 'var(--color-light-grey)' }}>
                <div className="features-grid">
                    {featuresList.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section container text-center">
                <h2>Ready to upgrade your workflow?</h2>
                <div style={{ marginTop: '2rem' }}>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </section>
        </div>
    );
};

export default Features;
