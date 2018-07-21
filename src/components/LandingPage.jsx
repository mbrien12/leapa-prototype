import React, { Component } from "react";
import '../css/LandingPage.css'


export default class LandingPage extends Component {
  render() {
    return (
     <div>
        <div className="banner-cover">
          <div className="white">
          <img className="image-test"src="https://image.ibb.co/fnHTPJ/Leapa_learning_track.png" alt=""/>
          </div>
        </div>
        <div className="homepage-second-row">
          <h2>The overall vision...</h2>
        </div>
     </div>
    );
  }
}