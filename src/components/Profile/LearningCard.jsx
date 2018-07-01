import React, { Component } from "react";
import { Button, Card, Header, Icon, Image } from 'semantic-ui-react'
import '../../css/Profile.css';

// Refactor button out and use component once using props

export default class LearningCard extends Component {
  render() {
    return (
      <div className="learning-card-container">
        <p className="learning-card-description">Track the tutorials, courses and conferences you're using to help you learn Javascript.</p>
        <Card.Group itemsPerRow={3}>

        <Card>
          <Card.Content>
            <Header as='h3'>
              <Icon name='clock outline' color="grey" />
              <Header.Content><span className="grey-number">3</span> to do next</Header.Content>
            </Header>
          </Card.Content>
            <Image className="resource-image" src='https://production.cdmycdn.com/assets/logo-codecademy-social-abfd8450722d675bddedde689f8af624.png' />
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
              <Header as='h3'>
              <Icon name='book' color="orange" />
              <Header.Content><span className="orange-number">2</span> in progress</Header.Content>
              </Header>
            </Card.Content>
              <Image 
              className="resource-image" src='https://i0.wp.com/blog.petehouston.com/wp-content/uploads/2018/03/blog-udacity.png?resize=640%2C363&ssl=1' />
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
            className="resource-image" 
            label={{ as: 'a', color: 'green', content: 'Most recent', icon: 'circle check outline', ribbon: true }} src='https://cdn.css-tricks.com/wp-content/uploads/2018/02/js-30-video.jpg' />
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