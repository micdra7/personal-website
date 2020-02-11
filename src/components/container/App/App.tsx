import React, { useState } from 'react';
import { getClassNameIfActive } from '../../../utils/utils';
import './App.scss';

const App: React.FC = () => {

    const [isBurgerActive, setBurgerActive] = useState(false);

    const handleBurgerClick = () => {
        setBurgerActive(!isBurgerActive);
    };

    return (
        <div className={getClassNameIfActive('wrapper', isBurgerActive)}>
            xd
        </div>
    );
};

export default App;
