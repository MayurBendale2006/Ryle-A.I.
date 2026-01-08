import React from 'react';
import './Stats.css';

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    <StatItem value="230+" label="Active Customers" />
                    <StatItem value="$10M+" label="Ad Spend Managed" />
                    <StatItem value="+60%" label="Avg. CTR Increase" />
                </div>
            </div>
        </section>
    );
};

const StatItem = ({ value, label }) => (
    <div>
        <div className="stat-val-large">{value}</div>
        <div className="stat-label-large">{label}</div>
    </div>
);

export default Stats;
