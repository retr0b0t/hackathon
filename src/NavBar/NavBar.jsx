import React, { Component } from 'react'
import {Menu,Container,Button} from 'semantic-ui-react';

 class NavBar extends Component {
  render() {
    return (
      <div>
        <Menu inverted fixed="top">
              <Container>
                <Menu.Item header>
                  <img src="assets/logo.png" alt="logo" />
                  Portal
                </Menu.Item>
                <Menu.Item name="Authors" />
                <Menu.Item name="Events" />
                <Menu.Item name="Reminders" />
                <Menu.Item name="Activity Panel" />

                
                <Menu.Item position="right">
                  <Button basic inverted content="Login" />
                  <Button basic inverted content="Register" style={{marginLeft: '0.5em'}} />
                </Menu.Item>
              </Container>
            </Menu>
      </div>
    )
  }
}

export default NavBar;
