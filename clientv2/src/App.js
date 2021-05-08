import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navigation } from './components/Navigation';
function App() {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route exact path="" component={() => <>home page</>} />
            </Switch>
        </Router>
    );
}

export default App;
