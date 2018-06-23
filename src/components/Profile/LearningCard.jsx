import React, { Component } from "react";
import { Button, Card, Icon } from 'semantic-ui-react'
import '../../css/Profile.css';

// Refactor button out and use component once using props

export default class LearningCard extends Component {
  render() {
    return (
      <div className="learning-card-container">
        <p>Track the tutorials, courses and conferences you're using to help you learn HTML.</p>
        <Card.Group itemsPerRow={4}>
          <Card image={"https://picsum.photos/200/300/?random"} />
          <Card image={"https://picsum.photos/200/300/?random"} />
          <Card image={"https://picsum.photos/200/300/?random"} />
          <Card> 
            <div style={{height: "100%"}}></div>
            <Button  basic icon labelPosition='left' className="add-card-button"> 
              <Icon name='plus' />
               Add resource
            </Button>
          </Card>
        </Card.Group>
      </div>
    );
  }
}