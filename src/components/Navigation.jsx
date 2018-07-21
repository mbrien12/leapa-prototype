import React, { Component } from "react";
import '../css/Navigation.css'

export default class Navigation extends Component {
  render() {
    return (
      <div className="top-navigation">
       <a href='/'> <img className="logo-nav" src="https://image.ibb.co/mHF9EJ/icon_above_font.png" alt="logo"/></a>
      <ul>
        <li><a href="/profile">Profile</a></li>
        <li><a href="#">Log out</a></li>
      </ul>
      </div>
    )
  }
}

