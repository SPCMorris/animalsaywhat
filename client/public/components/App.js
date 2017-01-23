import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import SearchBar from './SearchBar';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>

    )
  }
}

export default App;