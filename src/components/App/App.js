import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import FlipSection from '../FlipSection/FlipSection';
import MainInfoSection from '../MainInfoSection/MainInfoSection';
import CurrentInfo from '../CurrentInfo/CurrentInfo';
import Navbar from '../Navbar/Navbar';

const App = () => {

    const links = [{ name: 'Home', href: '/' }, { name: 'Technologies', href: '/tech' },
        { name: 'Other', href: '/other' }, { name: 'Contact', href: '/contact' }];

    return (
        <div className="app-wrapper">
            <Router>
                <Navbar links={links} />

                <FlipSection>
                    <Route exact path="/" render={() => <CurrentInfo />} />
                </FlipSection>
            </Router>
            
            <MainInfoSection />
        </div>
    );
};

export default App;
