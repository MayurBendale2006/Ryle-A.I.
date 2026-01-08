import React from 'react';
import { AlertCircle, DollarSign, Clock } from 'lucide-react';

const ProblemSection = () => {
    return (
        <section className="section bg-gray">
            <div className="container">
                <div className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
                    <h2>Why 80% of paid ads <span className="text-primary">lose money</span></h2>
                    <p style={{ marginTop: '16px', maxWidth: '600px', marginInline: 'auto' }}>
                        The old way of managing ads is broken. Here is why most campaigns fail.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-8)' }}>
                    <ProblemCard
                        icon={<AlertCircle size={28} />}
                        title="Human Error"
                        desc="Manual bidding and targeting adjustments are too slow to keep up with algorithm changes."
                    />
                    <ProblemCard
                        icon={<DollarSign size={28} />}
                        title="Agency Fees"
                        desc="Traditional agencies charge 15-20% of your ad spend regardless of performance."
                    />
                    <ProblemCard
                        icon={<Clock size={28} />}
                        title="Creative Fatigue"
                        desc="Ads go stale in days. Humans can't design and test fast enough to stay profitable."
                    />
                </div>
            </div>
        </section>
    );
};

const ProblemCard = ({ icon, title, desc }) => (
    <div className="card-base">
        <div style={{
            width: '48px', height: '48px',
            background: 'var(--color-slate-50)',
            borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--color-primary)',
            marginBottom: '16px'
        }}>
            {icon}
        </div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{title}</h3>
        <p>{desc}</p>
    </div>
);

export default ProblemSection;
