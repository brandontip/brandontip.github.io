import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import React, {useState, useCallback, useEffect} from 'react';
// @ts-ignore
import {Route, Switch, HashRouter as Router} from 'react-router-dom';
import MathPage from "./pages/mathpage";
import FunPage from "./pages/FunPage";
import ProgrammingPage from "./pages/ProgrammingPage";
import LandingPage from "./pages/LandingPage";







function App() {
  let routes = (
      <Switch>
        <Route path exact="/">
            <LandingPage />
        </Route>
        <Route path="/math">
            <MathPage />
        </Route>
        <Route path="/programming">
            <ProgrammingPage />
        </Route>
        <Route path="/contact">
            <FunPage />
        </Route>
      </Switch>);

  return (

      <Router>
    <Header/>
          {routes}
      </Router>

  );
}

export default App;
