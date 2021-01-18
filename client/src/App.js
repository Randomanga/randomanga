import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Navigation } from './components';
import { SignUp,Home,SignIn } from './pages';
function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <AuthProvider>
                <Router>
                    <Navigation />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/sign-up" component={SignUp} />
                    <Route exact path="/sign-in" component={SignIn} />
                </Router>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
