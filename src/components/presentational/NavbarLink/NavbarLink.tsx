import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarLink.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface NavbarLinkProps {
    href: string;
    text: string;
    icon: any;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, text, icon }) => (
    <li className='navbar-link'>
        <Link to={href}>
            <span className='icon'>
                <FontAwesomeIcon icon={icon} />
            </span>

            <span className='text'>
                {text}
            </span>
        </Link>
    </li>
);

export default NavbarLink;
