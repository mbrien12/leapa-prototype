import React, { Component } from "react";
import '../css/LandingPage.css'
import { Button } from 'semantic-ui-react'


export default class LandingPage extends Component {
  render() {
    return (
     <div>
        <div className="banner-cover">
        <div className="banner-content">
          <div className="banner-content-left">
            <h1>Your learning passport</h1>
            <p>Create a record of your personal learning progress and connect with others learning the same.</p>
            <Button inverted>Join today</Button>
          </div>
          <div className="banner-content-right">
            <img className="banner-image"src="https://image.ibb.co/fnHTPJ/Leapa_learning_track.png" alt=""/>
          </div>
          </div>
        </div>
        <div className="homepage-second-row">
          <h2>The overall vision...</h2>
        </div>
     </div>
    );
  }
}