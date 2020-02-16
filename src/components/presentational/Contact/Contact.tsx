import React from 'react';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact: React.FC = () => (
    <div className='contact'>
        <h1>
            <a href='https://www.linkedin.com/in/micha%C5%82-drabik-5497b4191/' rel='nofollow'>
                <FontAwesomeIcon icon={faLinkedin} />
                &nbsp;
                LinkedIn
            </a>
        </h1>
        <h1>
            <a href='https://github.com/micdra7' rel='nofollow'>
                <FontAwesomeIcon icon={faGithub} />
                &nbsp;
                Github
            </a>
        </h1>
    </div>
);

export default Contact;
