import React from 'react';
import './MainInfoSection.scss';

const MainInfoSection = ({ active }) => {
    return (
        <section className={active ? 'main-info-section active' : 'main-info-section'}>
            <h1>Michał Drabik</h1>
            <h3>Fullstack Web Developer</h3>
        </section>
    );
};

export default MainInfoSection;