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
              <ProfileDetails 
              firstName = {this.props.firstName}
              profileUrl = {this.props.profileUrl}
              location = {this.props.location}
              role = {this.props.currentRole}
              learning = {this.props.tracks}
              goal = {this.props.careerGoal}
              followers = {this.props.followers}
              />
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