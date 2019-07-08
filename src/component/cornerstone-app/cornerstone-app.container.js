import React from 'react';
// import './App.css';
import BeerDetails from '../beer-details';
import BeerList from '../beer-list';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const Cornerstone = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={BeerList}></Route>
        <Route path="/beer-details" component={BeerDetails}/>
      </Switch>
    </Router>
  );
}

export default Cornerstone;
