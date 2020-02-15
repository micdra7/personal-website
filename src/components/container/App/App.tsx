import React, { useState } from 'react';
import { getClassNameIfActive } from '../../../utils/utils';
import Navbar from '../Navbar/Navbar';
import './App.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MainInfo from '../../presentational/MainInfo/MainInfo';

const App: React.FC = () => {

    const [isBurgerActive, setBurgerActive] = useState(false);

    const handleBurgerClick = (): void => {
        setBurgerActive(!isBurgerActive);
    };

    return (
        <div className={getClassNameIfActive('wrapper', isBurgerActive)}>
            <Router>
                <Navbar isBurgerActive={isBurgerActive} handleBurgerClick={handleBurgerClick} />

                <section className='main'>
                    <Switch>
                        <Route exact path='/'>
                            <MainInfo />
                        </Route>
                    </Switch>
                </section>
            </Router>
        </div>
    );
};

export default App;
