import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Navbar from '../Navbar/Navbar';

const App: React.FC = () => {

    const [burgerActive, setBurgerActive] = useState(false);
    const [wrapperClassName, setWrapperClassName] = useState('');

    const handleBurgerClick = (event?: any): void => setBurgerActive(!burgerActive);

    useEffect(() => {
        if (burgerActive) {
            setWrapperClassName('active');
        } else {
            setWrapperClassName('');
        }
    }, [burgerActive]);

    return (
        <div className='app-wrapper'>
            <Navbar />
        </div>
    );
};

export default App;
