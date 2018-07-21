import React, { Component } from "react";
import '../css/Navigation.css'

export default class Navigation extends Component {
  render() {
    return (
      <div className="top-navigation">
       <a href='/'> <p className="logo-nav">LeaPa</p></a>
      <ul>
        <li><a href="/profile">Profile</a></li>
        <li><a href="#">Log out</a></li>
      </ul>
      </div>
    )
  }
}

