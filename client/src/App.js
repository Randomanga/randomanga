import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth';

import Nav from './components/Nav';
import Home from './pages/Home';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Nav />
                <Route exact path="/" component={Home} />
            </Router>
        </AuthProvider>
    );
}

export default App;
