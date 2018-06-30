import React, { Component } from "react";
import { Button, Card, Dimmer, Header, Icon, Image } from 'semantic-ui-react'
import '../../css/Profile.css';

// Refactor button out and use component once using props

export default class LearningCard extends Component {
  render() {
    return (
      <div className="learning-card-container">
        <p className="learning-card-description">Track the tutorials, courses and conferences you're using to help you learn Javascript.</p>
        <Card.Group itemsPerRow={3}>

        <Card>
        <Dimmer active />
          <Card.Content>
            <Card.Header><span className="number">3</span> to do next</Card.Header>
          </Card.Content>
            <Image src='https://production.cdmycdn.com/assets/logo-codecademy-social-abfd8450722d675bddedde689f8af624.png' />
          <Card.Content>
            <h3 className="card-resource-title">ES6 Codecademy</h3>
              <Card.Description>Introduction to ES6 syntax</Card.Description>
          </Card.Content>
            <Button icon labelPosition='right'>
            Manage all
              <Icon name='right arrow' />
            </Button>
       </Card>

          <Card>
            <Card.Content>
              <Card.Header><span className="number">2</span> in progress</Card.Header>
            </Card.Content>
              <Image src='https://i0.wp.com/blog.petehouston.com/wp-content/uploads/2018/03/blog-udacity.png?resize=640%2C363&ssl=1' />
            <Card.Content>
              <h3 className="card-resource-title">Udacity Intro to Javascript</h3>
                <Card.Description>Fundamentals of the JS syntax</Card.Description>
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
              <Header.Content><span className="green-number">5</span> Completed</Header.Content>
            </Header>
          </Card.Content>
            <Image 
            label={{ as: 'a', color: 'green', content: 'Most recent', icon: 'circle check outline', ribbon: true }} src='https://javascript30.com/images/JS3-social-share.png' />
          <Card.Content>
            <h3 className="card-resource-title">Javascript 30</h3>
              <Card.Description>Vanilla JS by Wes Bos.</Card.Description>
          </Card.Content>
            <Button icon labelPosition='right'>
            Manage all
              <Icon name='right arrow' />
          </Button>
        </Card>
        </Card.Group>
      </div>
    );
  }
}