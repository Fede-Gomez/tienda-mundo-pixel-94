import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="global-header">
            <img
                src={`/logo.jpg`}
                alt="Mundo Pixel Logo"
                className="global-logo"
            />
            <h1 className="global-title">¡Bienvenido a Mundo Pixel!</h1>
            <p className="global-subtitle">
                Descubre nuestras categorías y encuentra el pixel perfecto para tu inventario.
            </p>
        </header>
    );
};

export default Header;
