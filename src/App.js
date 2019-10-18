import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/home';
import Journal from './pages/journal';
import Stats from './pages/stats';
import Tracker from './pages/tracker';

import Header from './components/Header';


function App() {
  return (
    <div className="App">
    <Router>
    <Header></Header>
    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/journal">
      <Journal />
    </Route>
    <Route path="/stats">
      <Stats />
    </Route>
    <Route path="/tracker">
      <Tracker />
    </Route>
  </Switch>
    </Router>
    </div>
  );
}

export default App;
