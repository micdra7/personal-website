import React from 'react';
import './Navbar.scss';
import { getClassNameIfActive } from '../../../utils/utils';
import { links } from '../../../data';
import NavbarLink from '../../presentational/NavbarLink/NavbarLink';

const Navbar: React.FC = () => {

    const renderedLinks = links.map((link) => (
        <NavbarLink
            href={link.href}
            text={link.name}
            icon={link.icon}
            key={link.name} />
    ));

    return (
        <nav className='navbar'>
            <ul className='nav'>
                {renderedLinks}
            </ul>
        </nav>
    );
};

export default Navbar;
