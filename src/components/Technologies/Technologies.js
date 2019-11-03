import React from 'react';
import './Technologies.scss';

const Technologies = () => {

    return (
        <div className="technologies">
            <section className="backend">
                <h3>Backend</h3>
                <ul className="tech-list">
                    <li>C#</li>
                    <li>.NET Core MVC &amp; REST API</li>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                </ul>
            </section>
            <section className="frontend">
                <h3>Frontend</h3>
                <ul className="tech-list">
                    <li>React.js (with Hooks)</li>
                    <li>Redux</li>
                    <li>SCSS</li>
                </ul>
            </section>
        </div>
    );
};

export default Technologies;