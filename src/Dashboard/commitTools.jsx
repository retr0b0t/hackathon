import React, { Component } from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'

 class commitTools extends Component {
    render() {


    return (
      <Menu vertical>
        <Menu.Item name='inbox'>
          <Label color='teal'>1</Label>
          Inbox
        </Menu.Item>

        <Menu.Item name='spam'>
          <Label>51</Label>
          Spam
        </Menu.Item>

        <Menu.Item name='updates'>
          <Label>1</Label>
          Updates
        </Menu.Item>
       
      </Menu>
    )
  }
}
export default commitTools;