import React, { Component } from "react";
import ProfileDetails from "./ProfileDetails"
import AddTrackButton from "./AddTrackButton"
import '../../css/Profile.css';

export default class Profile extends Component {
  render() {
    return (
     <div className="profile-container">
        <div className="profile-left-one-third">
          <ProfileDetails />
        </div>
        <div className="profile-right-two-thirds">
          <AddTrackButton/>
        </div>
      </div>
    );
  }
}