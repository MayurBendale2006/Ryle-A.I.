import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>Ryze.ai</h3>
                        <p>Autonomous ad management for modern growth teams.</p>
                    </div>
                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Product</h4>
                            <a href="/how-it-works">How it Works</a>
                            <a href="/pricing">Pricing</a>
                            <a href="#">Case Studies</a>
                        </div>
                        <div className="link-group">
                            <h4>Company</h4>
                            <a href="#">About</a>
                            <a href="#">Careers</a>
                            <a href="#">Contact</a>
                        </div>
                        <div className="link-group">
                            <h4>Legal</h4>
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Ryze AI Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
