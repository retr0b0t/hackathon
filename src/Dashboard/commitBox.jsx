import React, { Component } from "react";
import { Segment, Item, List, Button, Icon } from "semantic-ui-react";
class commitBox extends Component {
  render() {
    return (
      <div>
        <Segment.Group>
          <Segment>
            <Item.Group>
              <Item>
                <Item.Image size="tiny" circular src="https://randomuser.me/api/portraits/women/75.jpg" />
                <Item.Content>
                  <Item.Header as="a">Title</Item.Header>
                  <Item.Description>
                    Hosted by <a>Author's name</a>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
          <Segment>
            <span>
              <Icon name="clock" /> date |
              <Icon name="marker" /> time
            </span>
          </Segment>
          <Segment secondary>
            <span>classes and sub classes go here</span>
          </Segment>
          <Segment clearing>
            <span>desc goes here</span>
            <Button as="a" color="teal" floated="right" content="View" />
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}
export default commitBox;
