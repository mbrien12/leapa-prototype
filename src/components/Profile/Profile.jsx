import React, { Component } from "react";
import ProfileDetails from "./ProfileDetails"
import AddTrackButton from "./AddTrackButton"
import LearningTrack from "./LearningTrack"
import '../../css/Profile.css';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <AddTrackButton />
          <div className="profile-container">
            <div className="profile-left-one-third">
              <ProfileDetails />
            </div>
            <div className="profile-right-two-thirds">
              <LearningTrack />
              <LearningTrack />
            </div>
          </div>
      </div>
    );
  }
}