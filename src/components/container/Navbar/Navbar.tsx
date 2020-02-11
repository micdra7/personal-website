import React from 'react';
import './Navbar.scss';
import { getClassNameIfActive } from '../../../utils/utils';
import { links } from '../../../data';
import NavbarLink from '../../presentational/NavbarLink/NavbarLink';

export interface NavbarProps {
    isBurgerActive: boolean;
    handleBurgerClick: (event?: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isBurgerActive, handleBurgerClick }) => {

    const renderedLinks = links.map((link) =>
        <NavbarLink href={link.href} text={link.name} handleClick={handleBurgerClick} key={link.name} />);

    return (
        <nav className={getClassNameIfActive('navbar', isBurgerActive)}>
            <ul className='nav'>
                {renderedLinks}
            </ul>
            <div className={getClassNameIfActive('burger', isBurgerActive)} onClick={handleBurgerClick}>
                <span />
                <span />
                <span />
            </div>
        </nav>
    );
};

export default Navbar;
