import React, { useState } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { primary, fontStyle } from '../../constants';

const App: React.FC = () => {

    const [burgerActive, setBurgerActive] = useState(false);

    const links = [
        { name: 'Home', href: '/' },
        { name: 'Technologies', href: '/tech' },
        { name: 'Projects', href: '/projects'},
        { name: 'Other', href: '/other' },
        { name: 'Contact', href: '/contact' }
    ];

    const projects = [{ name: 'Card matching game',
                        description: 'A simple card matching game with 4 different ' +
                            'difficulty levels and a scoreboard. Made with React & Redux.',
                        imgSrc: 'card_match_game.png',
                        githubLink: 'https://github.com/micdra7/card-match-game',
                        siteLink: 'https://micdra7.github.io/card-match-game/#/'}];

    const Wrapper = styled('div')<{active: boolean}>`
        box-sizing: border-box;

        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;

        position: fixed;

        top: ${(props) => props.active ? 5 : 0}rem;
        width: 100%;
        height: 100%;

        background-color: ${primary};

        transition: all ease-in-out .5s;
        font-family: ${fontStyle};
    `;

    const handleBurgerClick = (event?: any): void => setBurgerActive(!burgerActive);

    const getClassName = (isActive: boolean): string => (isActive ? 'active' : '');

    return (
        // tslint:disable-next-line: jsx-no-lambda
        <Wrapper className={(): string => getClassName(burgerActive)} active={burgerActive} onClick={handleBurgerClick}>
            xd
        </Wrapper>
    );
};

export default App;
