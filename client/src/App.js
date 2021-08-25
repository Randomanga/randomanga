import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import Login from './pages/SignIn';
import SignUp from './pages/SignUp';
import { RandomList } from './pages/Random/List';
import useUser from './hooks/data/useUser';
import { authStatus } from './adapters/api';
import { ScrollToTop } from './components/ScrollToTop';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';
import ProtectedRoute from './components/Router/ProtectedRoute';
import { Unauthorized } from './pages/Unauthorized';
import { NotFound } from './pages/404';
import { Related } from './pages/Related/index';
import { Create } from './pages/Lists/Create';
import { List } from './pages/Lists/List';
import { Home } from './pages/Home';
import { Browse } from './pages/Lists/Browse';
function App() {
  const { user, mutate } = useUser();


  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <Router>
        <ScrollToTop />
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/random-lists/:id" component={RandomList} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/unauthorized" component={Unauthorized} />
          <Route exact path="/recommendations" component={Related} />

          <Route exact path="/lists/browse/:page?" component={Browse} />
          <Route exact path="/lists/create" component={Create} />
          <Route exact path="/lists/:id" component={List} />
          <Route path="" component={NotFound} />
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
    </ChakraProvider>
  );
}

export default App;
