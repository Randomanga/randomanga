import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Navigation } from './components';
import Home from './pages/Home';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <AuthProvider>
                <Router>
                    <Navigation />
                    <Route exact path="/" component={Home} />
                </Router>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
