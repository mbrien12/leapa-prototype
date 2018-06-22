import React, { Component } from "react";

import { Button, Image, Menu } from "semantic-ui-react";

export default class Navigation extends Component {
  render() {
    return (
          <Menu secondary stackable size="massive">
            <Menu.Item
              name="log in"
              position = "right"
            />
          </Menu>
    );
  }
}