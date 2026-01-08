import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        quote: "Ryze’s AI-driven ads outperform human optimization by a huge margin.",
        author: "Mathilde Biggs",
        role: "CEO, MotifDigital Agence",
        stat: "+63% ROAS"
    },
    {
        quote: "Broke down performance by asset—thumbnails, headlines, everything. Suggested swaps based on real data. Our CTR basically doubled.",
        author: "Daniel Amezquita",
        role: "Global Ads Strategy, Glava",
        stat: "2x CTR"
    },
    {
        quote: "Found wasted spend in search terms we'd never have caught manually. Cut those, reallocated budget.",
        author: "Daniel Roser",
        role: "Growth Marketer",
        stat: "+45% ROAS"
    }
];

const Testimonials = () => {
    return (
        <section className="section testimonials-section">
            <div className="container">
                <div className="features-header">
                    <h2 className="section-title">Wall of <span className="text-secondary-accent">Love</span></h2>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((item, index) => (
                        <div className="testimonial-card" key={index}>
                            <div className="quote-icon">"</div>
                            <p className="testimonial-quote">{item.quote}</p>
                            <div className="testimonial-footer">
                                <div>
                                    <h4 className="testimonial-author">{item.author}</h4>
                                    <p className="testimonial-role">{item.role}</p>
                                </div>
                                <div className="testimonial-stat">{item.stat}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
