import React, { Component } from "react";
import { Button, Card, Header, Icon, Image, Label } from 'semantic-ui-react'
import '../../css/Profile.css';

export default class ProfileDetails extends Component {
  render() {
    const learnings = Object.entries(this.props.learning)
    return (
      <Card>
        <Image src={this.props.profileUrl} />
      <Card.Content textAlign="left">
        <Card.Header>{this.props.firstName}</Card.Header>
          <Card.Meta>
            <span>{this.props.role} in {this.props.location}</span>
          </Card.Meta>
          <Card.Description>
          <strong>Sarah is learning: </strong>
          {
            learnings.map((track, i) => {
              return (
                <div key={i}>
                <a href="#">{track[1].name} </a> <br/>
                </div>
              )
            })
          }
          
      
          </Card.Description>
          <Header as='h5'>
            <Icon name='road' />
            <Header.Content>Career goal: <span className="career-goal-text">{this.props.goal}</span></Header.Content>
          </Header>
      </Card.Content>
      <Card.Content extra>
        <Button as='div' labelPosition='right'>
          <Button icon>
            <Icon name='star' />
            Follow
          </Button>
        <Label as='a' basic pointing='left'>
          {this.props.followers[0]}
        </Label>
        </Button>
      </Card.Content>
      </Card>
    );
  }
}