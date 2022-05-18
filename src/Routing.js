import React from 'react'
import Header from './Header/Header';
import Homepage from './Homepage/Homepage';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function Routing() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Header />
          <Homepage />
        </Route>
      </Router>
    </>
  );
}

export default Routing;
