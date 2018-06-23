import React, { Component } from "react";
import { Card } from 'semantic-ui-react'
import '../../css/Profile.css';

// Delete this component once refactored and using props. Only need one card component. Just for testing.


export default class MakingCard extends Component {
  render() {
    return (
      <div className="learning-card-container">
        <p>Showcase anything you've made, done or contributed to as part of learning HTML</p>
        <Card.Group itemsPerRow={4}>
          <Card image={"https://picsum.photos/200/300?image=0"} />
          <Card image={"https://picsum.photos/200/300?image=0"} />
          <Card image={"https://picsum.photos/200/300?image=0"} />
          <Card />
        </Card.Group>
      </div>
    );
  }
}
