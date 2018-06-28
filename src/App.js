import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import NavBar from './NavBar/NavBar';
import CommitDashBord from './Dashboard/CommitDashBord';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
          <NavBar />
          <Container className="main">
          <CommitDashBord />
          </Container>
          
      </div>
    );
  }
}

export default App;
