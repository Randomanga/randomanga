import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navigation } from './components/Navigation'
import { Home } from './pages/Home'
function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="" component={() => <Home />} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
