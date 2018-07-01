import React, { Component } from "react";
import { Button, Card, Header, Icon, Image, Label } from 'semantic-ui-react'
import '../../css/Profile.css';

export default class ProfileDetails extends Component {
  render() {
    return (
      <Card>
      <Image src='https://media1.popsugar-assets.com/files/thumbor/f6mR3MTC66MfnZFc0qGrgcnZ_fg/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/12/19/048/n/1922441/tmp_f17bIy_7aef35b1ab387138_k.jpg' />
      <Card.Content textAlign="left">
        <Card.Header>{this.props.firstName}</Card.Header>
        <Card.Meta>
          <span className='date'>{this.props.role} in {this.props.location}</span>
        </Card.Meta>
        <Card.Description>Sarah is learning <a href="#">Javascript</a>, <a href="#">CSS</a> and <a href="#">Digital Marketing</a></Card.Description>
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