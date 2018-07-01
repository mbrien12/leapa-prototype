import React, { Component } from "react";
import { Button, Card, Header, Icon, Image } from 'semantic-ui-react'
import '../../css/Profile.css';

// Delete this component once refactored and using props. Only need one card component. Just for testing.


export default class MakingCard extends Component {
  render() {
    return (
      <div className="learning-card-container">
        <p className="learning-card-description">Showcase anything you've made, done or contributed to as part of learning Javascript</p>
        <Card.Group itemsPerRow={3}>

        <Card>
          <Card.Content>
            <Header as='h3'>
              <Icon name='clock outline' color="grey" />
              <Header.Content><span className="faded-text">To do next</span></Header.Content>
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
              <Header.Content><span className="orange-number">1</span> in progress</Header.Content>
              </Header>
              <Image src='' />
              <Card.Content>
                <h3 className="card-resource-title">Holiday poll app</h3>
                  <Card.Description>Dynamic leaderboard to help plan group holidays</Card.Description>
              </Card.Content>
            </Card.Content>
              <Button icon labelPosition='right'>
              Manage all
                <Icon name='right arrow' />
              </Button>
          </Card>

          <Card>
          <Card.Content>
            <Header as='h3'>
              <Icon name='check circle outline' color="green" />
              <Header.Content><span className="faded-text">Completed</span></Header.Content>
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
