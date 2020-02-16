import React from 'react';
import Navbar from '../Navbar/Navbar';
import './App.scss';
import { HashRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import MainInfo from '../../presentational/MainInfo/MainInfo';
import Skills from '../../presentational/Skills/Skills';
import Other from '../../presentational/Other/Other';
import Contact from '../../presentational/Contact/Contact';
import Projects from '../Projects/Projects';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const App: React.FC = () => (
    <div className='wrapper'>
        <Router>
            <Navbar />

            <section className='main'>
                <Switch>
                    <Route path='*' children={<MainSection />} />
                </Switch>
            </section>
        </Router>
    </div>
);

// needed to separate this section into another component
// otherwise I was getting errors that useContext was undefined
const MainSection: React.FC = () => {

    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
                // I need to use pathname as location.key was not updating at all
                key={location.pathname}
                classNames='fade'
                timeout={300}>

                <Switch location={location}>
                    <Route exact path='/' children={<MainInfo />} />
                    <Route path='/skills' children={<Skills />} />
                    <Route path='/projects' children={<Projects />} />
                    <Route path='/other' children={<Other />} />
                    <Route path='/contact' children={<Contact />} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default App;
