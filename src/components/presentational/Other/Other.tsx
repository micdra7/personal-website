import React from 'react';
import './Other.scss';

const Other: React.FC = () => (
    <div className='other'>
        <h3>Languages</h3>
        <ul className='languages'>
            <li>English (C2)</li>
            <li>Polish (Native)</li>
        </ul>
        <h3>Certificates</h3>
        <ul className='certs'>
            <li>Certificate in Advanced English (grade A)</li>
        </ul>
    </div>
);

export default Other;
