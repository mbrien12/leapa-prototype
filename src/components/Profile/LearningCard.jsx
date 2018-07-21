import React, { Component } from "react";
import { Button, Card, Header, Icon, Image } from 'semantic-ui-react'
import '../../css/Profile.css';
import styled from 'styled-components';

const ManageButton = styled(Button)`
  width: 100%
`

export default class LearningCard extends Component {
  render() {
    const track = this.props.track
    const to_do_num = Object.keys(track.learning.to_do).length
    const in_progress_num = Object.keys(track.learning.in_progress)
    .length
    const completed_num = Object.keys(track.learning.completed)
    .length

    return (
      <div className="learning-card-container">
        <p className="learning-card-description">Track the tutorials, courses and resources you're using to help you learn {this.props.track.name}.</p>
        <Card.Group itemsPerRow={3}>

        <Card>
          <Card.Content>
            <Header as='h3'>
              <Icon name='clock outline' color="grey" />
              <Header.Content><span className="grey-number">{to_do_num}</span> to do next</Header.Content>
            </Header>
          </Card.Content>
            {
              // This can be refactored into another component
              to_do_num >= 1 ?
                <div>
                  <Image className="resource-image" src={track.learning.to_do[1].imageUrl} />
                  <Card.Content>
                    <h3 className="card-resource-title">{track.learning.to_do[1].name}</h3>
                    <Card.Description>{track.learning.to_do[1].description}</Card.Description>
                  </Card.Content>
                  <ManageButton icon labelPosition='right'>
                  Manage all
                  <Icon name='right arrow' />
                </ManageButton>
                </div>
               :  
                <Button icon labelPosition='right'>
                  Add first resource
                  <Icon name='right arrow' />
                </Button>
            } 
       </Card>

          <Card>
            <Card.Content>
              <Header as='h3'>
              <Icon name='book' color="orange" />
              <Header.Content><span className="orange-number">{in_progress_num}</span> in progress</Header.Content>
              </Header>
            </Card.Content>
            {
              in_progress_num >= 1 ?
                <div>
                  <Image className="resource-image" src={track.learning.in_progress[1].imageUrl} />
                  <Card.Content>
                    <h3 className="card-resource-title">{track.learning.in_progress[1].name}</h3>
                    <Card.Description>{track.learning.in_progress[1].description}</Card.Description>
                  </Card.Content>
                  <ManageButton icon labelPosition='right'>
                  Manage all
                    <Icon name='right arrow' />
                  </ManageButton>
                </div>
               : <Button icon labelPosition='right'>
               Add first resource
              <Icon name='right arrow' />
            </Button>
            }
          </Card>

          <Card>
          <Card.Content>
            <Header as='h3'>
              <Icon name='check circle outline' color="green" />
              <Header.Content><span className="green-number">{completed_num}</span> Completed</Header.Content>
            </Header>
          </Card.Content>
          {
            completed_num >= 1 ?
              <div>
                <Image className="resource-image" src={track.learning.completed[1].imageUrl} />
                <Card.Content>
                  <h3 className="card-resource-title">{track.learning.completed[1].name}</h3>
                  <Card.Description>{track.learning.completed[1].description}</Card.Description>
                </Card.Content>
                <ManageButton icon labelPosition='right'>
                Manage all
                  <Icon name='right arrow' />
                </ManageButton>
              </div>
             :  <Button icon labelPosition='right'>
             Add first resource
            <Icon name='right arrow' />
          </Button>
          } 
        </Card>
        </Card.Group>
      </div>
    );
  }
}