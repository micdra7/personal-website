import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = ({ links }) => {

    const renderedLinks = links.map(link => (
        <Link to={link.href} key={link.name}>
            {link.name}
        </Link>
    ));

    return (
        <nav className="navbar">
            {renderedLinks}
        </nav>
    );
};

export default Navbar;