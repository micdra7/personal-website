import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { links } from '../../../data';
import NavbarLink from '../../presentational/NavbarLink/NavbarLink';
import { useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {

    const [selectedLink, setSelectedLink] = useState(links[0].name);
    const location = useLocation();

    const renderedLinks = links.map((link) => (
        <NavbarLink
            href={link.href}
            text={link.name}
            icon={link.icon}
            isSelected={link.href === selectedLink}
            key={link.name} />
    ));

    useEffect(() => {
        setSelectedLink(location.pathname);
    }, [location]);

    return (
        <nav className='navbar'>
            <ul className='nav'>
                {renderedLinks}
            </ul>
        </nav>
    );
};

export default Navbar;
