import React, { Component } from "react";
import { Button, Icon } from 'semantic-ui-react'
import '../../css/Profile.css';

export default class Profile extends Component {
  render() {
    return (
      <Button icon labelPosition='left'>
      <Icon name='plus' />
      Add learning track
    </Button>
    );
  }
}