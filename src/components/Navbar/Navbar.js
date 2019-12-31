import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import Burger from '../Burger/Burger';

const Navbar = ({ links, active, handleBurgerClick }) => {

    const renderedLinks = links.map(link => (
        <Link to={link.href} key={link.name}>
            {link.name}
        </Link>
    ));


    return (
        <nav className={active ? 'navbar active' : 'navbar'}>
            <div className="nav">
                {renderedLinks}
            </div>
            <Burger active={active} handleClick={handleBurgerClick} />
        </nav>
    );
};

export default Navbar;