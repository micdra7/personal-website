import React from 'react';
import './FlipSection.scss';

const FlipSection = ({ children }) => {
    return (
        <section className="flip-section">
            <div className="content">
                {children}
            </div>
        </section>
    );
};

export default FlipSection;