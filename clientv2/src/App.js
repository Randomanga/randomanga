import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Daily } from './components/DailyManga';
import { Navigation } from './components/Navigation';
function App() {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route exact path="" component={() => <Daily />} />
            </Switch>
        </Router>
    );
}

export default App;
