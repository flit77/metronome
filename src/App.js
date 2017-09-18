import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Metronome from './Metronome';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  render() {
    return <Metronome />;
  }
}
registerServiceWorker();

export default App;
