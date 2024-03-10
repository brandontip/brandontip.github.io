import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import React, {useState, useCallback, useEffect} from 'react';
// @ts-ignore
import {Route, Switch, HashRouter as Router} from 'react-router-dom';

function Math() {
    return <div>Math</div>;
}

function Programming() {
    return <div>Programming</div>;
}

function Contact() {
    return <div>Contact</div>;
}

function App() {
  let routes = (
      <Switch>
        <Route path exact="/">
            <Math />
        </Route>
        <Route path="/math">
            <Math />
        </Route>
        <Route path="/programming">
            <Programming />
        </Route>
        <Route path="/contact">
            <Contact />
        </Route>
      </Switch>);

  return (

      <Router>
    <Header></Header>
          {routes}
      </Router>

  );
}

export default App;
