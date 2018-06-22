import React, { Component } from 'react';
import Navigation from "./Navigation";
import LandingPage from "./LandingPage";
import Profile from "./Profile/Profile";
import '../css/App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {
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
