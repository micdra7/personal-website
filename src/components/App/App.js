import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import FlipSection from '../FlipSection/FlipSection';
import MainInfoSection from '../MainInfoSection/MainInfoSection';

const App = () => {
    return (
        <div className="app-wrapper">
            <FlipSection>
                <Router>
                    <Route exact path="/" render={() => <p>xd</p>} />
                </Router>
            </FlipSection>
            
            <MainInfoSection />
        </div>
    );
};

export default App;
