import React, { Component } from 'react';
import {Grid} from "semantic-ui-react";
import CommitBox from "./commitBox";
import CommitTools  from "./commitTools";
class CommitDashBord extends Component {
  render() {
    return (
      <div>
        <Grid>
            <Grid.Column width={10}>
                <CommitBox />
            </Grid.Column>
            <Grid.Column width={6}>
                <CommitTools />
            </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default CommitDashBord;