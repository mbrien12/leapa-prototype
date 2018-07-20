import React, { Component } from "react";
import LearningCard from "./LearningCard"
import MakingCard from "./MakingCard"
import { Header, Tab } from 'semantic-ui-react'
import '../../css/Profile.css';

export default class LearningTrack extends Component {
  render() {
    const panes = [
      { menuItem: 'Learning', pane: { key: 'tab1', content: (<LearningCard />) }},
      {
        menuItem: 'Making',
        pane: { key: 'tab2', content: (<MakingCard />) },
      },
    ]

    const tracks = this.props.tracks

   

    return (
      <div>
      {
        Object.keys(tracks || {}).map(key => {
          const track = tracks[key]
          console.log(track);
          return (
            <div className="profile-learning-track">
              <Header as='h2' floated='left'> {track.name} </Header>
              <Tab panes={panes} renderActiveOnly={false} />
           </div>
          )
        })
      }
      </div>
    );
  }
}