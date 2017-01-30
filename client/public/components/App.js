import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import CardGrid from './CardGrid';
import SearchBar from './SearchBar';


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <SearchBar />
        <br></br>
        <CardGrid />
      </Container>

    );
  }
}

export default App;