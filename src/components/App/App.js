import React, { useState } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import FlipSection from '../FlipSection/FlipSection';
import MainInfoSection from '../MainInfoSection/MainInfoSection';
import CurrentInfo from '../CurrentInfo/CurrentInfo';
import Navbar from '../Navbar/Navbar';
import Technologies from '../Technologies/Technologies';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Other from '../Other/Other';

const App = () => {

    const links = [{ name: 'Home', href: '/' }, { name: 'Technologies', href: '/tech' }, 
    { name: 'Projects', href: '/projects'}, { name: 'Other', href: '/other' }, 
    { name: 'Contact', href: '/contact' }];

    const [burgerActive, setBurgerActive] = useState(false);

    // eslint-disable-next-line no-unused-vars
    const handleBurgerClick = (event) => {
        setBurgerActive(!burgerActive);
    };

    const projects = [{ name: 'Card matching game', description: 'A simple card matching game with 4 different ' + 
    'difficulty levels and a scoreboard. Made with React & Redux.', imgSrc: 'card_match_game.png', 
    githubLink: 'https://github.com/micdra7/card-match-game', siteLink: 'https://micdra7.github.io/card-match-game/#/'}];

    return (
        <div className={burgerActive ? 'app-wrapper active' : 'app-wrapper'}>
            <Router>
                <Navbar links={links} active={burgerActive} handleBurgerClick={handleBurgerClick} />

                <FlipSection>
                    <Route exact path="/" render={() => <CurrentInfo />} />
                    <Route path="/tech" render={() => <Technologies />} />
                    <Route path="/projects" render={() => <Projects projectList={projects} />} />
                    <Route path="/other" render={() => <Other />} />
                    <Route path="/contact" render={() => <Contact />} />
                </FlipSection>
            </Router>
            
            <MainInfoSection active={burgerActive} />
        </div>
    );
};

export default App;
