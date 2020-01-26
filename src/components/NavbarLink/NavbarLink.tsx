import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarLink.scss';

export interface NavbarLinkProps {
    text: string;
    href: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ text, href }) => (
    <li className='navbar-link'>
        <Link to={href}>
            {text}
        </Link>
    </li>
);

export default NavbarLink;
