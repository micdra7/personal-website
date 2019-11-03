import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Route exact path="/" render={() => <p>xd</p>} />
            </Router>
        </div>
    );
};

export default App;
