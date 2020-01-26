import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.scss';

const App: React.FC = () => {

    const [burgerActive, setBurgerActive] = useState(false);
    const [wrapperClassName, setWrapperClassName] = useState('');

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


    const handleBurgerClick = (event?: any): void => setBurgerActive(!burgerActive);

    useEffect(() => {
        if (burgerActive) {
            setWrapperClassName('active');
        } else {
            setWrapperClassName('');
        }
    }, [burgerActive]);

    return (
        <h1>xd</h1>
    );
};

export default App;
