import React from 'react';
import './Skills.scss';

const Skills: React.FC = () => (
    <div className='skills'>
        <h3>Backend</h3>
        <ul className='backend'>
            <li>C# - ASP.NET Core MVC &amp; REST API</li>
            <li>MySQL and PostgreSQL</li>
            <li>Basic Java and PHP</li>
        </ul>

        <h3>Frontend</h3>
        <ul className='frontend'>
            <li>React &amp; Redux</li>
            <li>Typescript</li>
            <li>SCSS</li>
            <li>NPM &amp; Webpack</li>
        </ul>
    </div>
);

export default Skills;
