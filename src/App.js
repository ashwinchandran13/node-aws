import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Home, About, Contact } from './pages';

import { Nav, Footer } from './layout';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Router>
        <Nav />
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>

          <Footer />
      </Router>
    </div>
  );
}

export default App;
