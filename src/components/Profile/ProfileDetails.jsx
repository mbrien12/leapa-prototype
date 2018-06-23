import React, { Component } from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import '../../css/Profile.css';

export default class ProfileDetails extends Component {
  render() {
    return (
      <Card>
      <Image src='https://media1.popsugar-assets.com/files/thumbor/f6mR3MTC66MfnZFc0qGrgcnZ_fg/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/12/19/048/n/1922441/tmp_f17bIy_7aef35b1ab387138_k.jpg' />
      <Card.Content textAlign="left">
        <Card.Header>Sarah</Card.Header>
        <Card.Meta>
          <span className='date'>Marketing Manager in Bristol</span>
        </Card.Meta>
        <Card.Description>Sarah is learning <a href="#">HTML</a>, <a href="#">CSS</a> and <a href="#">Digital Marketing</a></Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='star' />
          22 Followers
        </a>
      </Card.Content>
    </Card>
    );
  }
}