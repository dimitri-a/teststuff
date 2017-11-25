import React, { Component } from 'react';

import './App.css';
import List from './components/List'
import data from './sample-data.json'

class App extends Component {
  render() {
    return (
      <div>
        <List employees={data}></List>
      </div>
    );
  }
}

export default App;
