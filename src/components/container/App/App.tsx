import React from 'react';
import Navbar from '../Navbar/Navbar';
import './App.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MainInfo from '../../presentational/MainInfo/MainInfo';
import Skills from '../../presentational/Skills/Skills';
import Other from '../../presentational/Other/Other';
import Contact from '../../presentational/Contact/Contact';

const App: React.FC = () => {

    return (
        <div className='wrapper'>
            <Router>
                <Navbar />

                <section className='main'>
                    <Switch>
                        <Route exact path='/'>
                            <MainInfo />
                        </Route>
                        <Route path='/skills'>
                            <Skills />
                        </Route>

                        <Route path='/other'>
                            <Other />
                        </Route>
                        <Route path='/contact'>
                            <Contact />
                        </Route>
                    </Switch>
                </section>
            </Router>
        </div>
    );
};

export default App;
