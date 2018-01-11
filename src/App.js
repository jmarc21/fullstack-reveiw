import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Private from './components/private/Private';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/private' component={Private} />
        </Switch>
      </div>
    );
  }
}

export default App;
