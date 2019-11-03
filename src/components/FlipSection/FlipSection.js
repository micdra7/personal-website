import React from 'react';
import './FlipSection.scss';

const FlipSection = ({ children }) => {
    return (
        <section className="flip-section">
            {children}
        </section>
    );
};

export default FlipSection;