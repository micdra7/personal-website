import React, { useState } from 'react';
import { getClassNameIfActive } from '../../../utils/utils';
import Navbar from '../Navbar/Navbar';
import './App.scss';
import { HashRouter as Router, Route } from 'react-router-dom';

const App: React.FC = () => {

    const [isBurgerActive, setBurgerActive] = useState(false);

    const handleBurgerClick = (): void => {
        setBurgerActive(!isBurgerActive);
    };

    return (
        <div className={getClassNameIfActive('wrapper', isBurgerActive)}>
            <Router>
                <Navbar isBurgerActive={isBurgerActive} handleBurgerClick={handleBurgerClick} />
            </Router>
        </div>
    );
};

export default App;
