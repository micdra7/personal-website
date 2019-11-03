import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import FlipSection from '../FlipSection/FlipSection';
import MainInfoSection from '../MainInfoSection/MainInfoSection';
import CurrentInfo from '../CurrentInfo/CurrentInfo';

const App = () => {
    return (
        <div className="app-wrapper">
            <FlipSection>
                <Router>
                    <Route exact path="/" render={() => <CurrentInfo />} />
                </Router>
            </FlipSection>
            
            <MainInfoSection />
        </div>
    );
};

export default App;
