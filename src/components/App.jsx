import React, { Component } from 'react';
import Navigation from "./Navigation";
import LandingPage from "./LandingPage";
import Profile from "./Profile/Profile";
import data from '../test-db.js'
import '../css/App.css';

import { Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: data.users,
    };
  }

  render() {
    return (
      <div className="App">
      <Navigation/>
      <Route
        path="/"
        exact={true}
        render={() => (
          <LandingPage/>
        )}
      />
      <Route
        path="/profile"
        render={() => (
          <Profile/>
        )}
      />
    </div>
    );
  }
}

export default App;
