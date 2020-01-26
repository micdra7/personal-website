import React from 'react';
import { links } from '../../data';
import './Navbar.scss';
import NavbarLink from '../NavbarLink/NavbarLink';

const Navbar: React.FC = () => {

    const renderedLinks = links.map((link) =>
        <NavbarLink text={link.name} href={link.href} key={link.name} />);

    return(
        <nav className='navbar'>
            <ul className='nav'>
                {renderedLinks}
            </ul>
            <div className='burger'>
                <span />
                <span />
                <span />
            </div>
        </nav>
    )
};

export default Navbar;
