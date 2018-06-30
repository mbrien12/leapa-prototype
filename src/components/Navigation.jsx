import React, { Component } from "react";

import { Button, Icon, Menu, Segment } from "semantic-ui-react";

export default class Navigation extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <a href="/"> <Icon name='lemon' color="yellow" size='big'/></a>     
        <Menu.Menu position="right">
          <Menu.Item
            href='/profile'
            name='profile'
            active={activeItem === 'profile'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='log out'
            active={activeItem === 'log out'}
            onClick={this.handleItemClick}

          />
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}
