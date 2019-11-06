import React from 'react';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div className="contact">
           <h1>
               <a href="https://www.linkedin.com/in/micha%C5%82-drabik-5497b4191/" rel="nofollow">
                   LinkedIn 
                   &nbsp;
                   <FontAwesomeIcon icon={faLinkedin} />
               </a>
           </h1>
           <h1>
               <a href="https://github.com/micdra7" rel="nofollow">
                   GitHub 
                   &nbsp;
                   <FontAwesomeIcon icon={faGithub} />
               </a>
           </h1>
        </div>
    );
};

export default Contact;