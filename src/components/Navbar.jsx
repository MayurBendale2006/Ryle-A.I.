import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <a href="/" className="navbar-brand">
                    Ryze<span style={{ color: 'var(--color-primary)' }}>.ai</span>
                </a>

                {/* Desktop Menu */}
                <div className="navbar-links">
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                    <NavLink to="/how-it-works" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>How it Works</NavLink>
                    <NavLink to="/pricing" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Pricing</NavLink>
                </div>

                <div className="navbar-actions">
                    <button className="btn btn-secondary btn-sm" style={{ border: 'none' }}>Log in</button>
                    <button className="btn btn-primary btn-sm">Book Demo</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
