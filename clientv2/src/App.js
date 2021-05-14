import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import { SWRConfig } from 'swr';
import axios from 'axios';
import Login from './pages/SignIn';
import SignUp from './pages/SignUp';
import { RandomList } from './pages/Random/List';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher: url =>
            axios.get(url, { withCredentials: true }).then(res => res.data),
        }}
      >
        <ColorModeSwitcher />
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/login" component={Login} />
            <Route exact path="/sign-up" component={SignUp} />

            <Route exact path="/random-lists/:id" component={RandomList} />
          </Switch>
          <Footer />
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Router>
      </SWRConfig>
    </ChakraProvider>
  );
}

export default App;
