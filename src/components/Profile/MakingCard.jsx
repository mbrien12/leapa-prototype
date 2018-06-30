import React, { Component } from "react";
import { Button, Card, Dimmer, Header, Icon, Image } from 'semantic-ui-react'
import '../../css/Profile.css';

// Delete this component once refactored and using props. Only need one card component. Just for testing.


export default class MakingCard extends Component {
  render() {
    return (
      <div className="learning-card-container">
        <p>Showcase anything you've made, done or contributed to as part of learning Javascript</p>
        <Card.Group itemsPerRow={3}>

        <Card>
          <Card.Content>
            <Header as='h3'>
              <Icon name='clock outline' color="grey" />
              <Header.Content>To do next</Header.Content>
            </Header>
          </Card.Content>
            <Button icon labelPosition='right'>
            Add first project
              <Icon name='right arrow' />
            </Button>
       </Card>

          <Card>
            <Card.Content>
              <Header as='h3'>
              <Icon name='book' color="orange" />
              <Header.Content>In progress</Header.Content>
              </Header>
            </Card.Content>
              <Button icon labelPosition='right'>
              Add first project
                <Icon name='right arrow' />
              </Button>
          </Card>

          <Card>
          <Card.Content>
            <Header as='h3'>
              <Icon name='check circle outline' color="green" />
              <Header.Content>Completed</Header.Content>
            </Header>
          </Card.Content>
            <Button icon labelPosition='right'>
            Add first project
              <Icon name='right arrow' />
          </Button>
        </Card>
        </Card.Group>
      </div>
    );
  }
}
