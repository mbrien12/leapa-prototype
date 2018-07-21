import React, { Component } from "react";
import LearningCard from "./LearningCard"
import MakingCard from "./MakingCard"
import { Header, Tab } from 'semantic-ui-react'
import '../../css/Profile.css';

export default class LearningTrack extends Component {
  render() {
    const tracks = this.props.tracks
    return (
      <div>
      {
        Object.keys(tracks || {}).map(key => {
          const track = tracks[key]
          return (
            <div key={key} className="profile-learning-track">
              <Header as='h2' floated='left'> {track.name} </Header>
              <Tab panes={[
                { menuItem: 'Learning', pane: { key: 'tab1', content: (<LearningCard track = {track} />) }},
                {
                  menuItem: 'Making',
                  pane: { key: 'tab2', content: (<MakingCard />) },
                },
              ]} renderActiveOnly={false} />
           </div>
          )
        })
      }
      </div>
    );
  }
}