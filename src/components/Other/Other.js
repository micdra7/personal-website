import React from 'react';
import './Other.scss';

const Other = () => {
    return (
        <div className="other">
            <section className="languages">
                <h3>Languages</h3>
                <ul className="language-list">
                    <li>English (C2)</li>
                    <li>Polish (Native)</li>
                </ul>
            </section>
            <section className="certificates">
                <h3>Certificates</h3>
                <ul className="cert-list">
                    <li>Certificate in Advanced English (grade A)</li>
                </ul>
            </section>
        </div>
    );
};

export default Other;