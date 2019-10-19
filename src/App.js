import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import HomePage from './account/Home'
import RegisterPage from './account/Register'
import Dashboard from './account/Dashboard'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      <Switch>
       <Route exact path="/" component={RegisterPage} />
       <Route exact path="/register" component={RegisterPage}/>
       <Route path="/home" component={HomePage} />
       <Route path="/dashboard" component={Dashboard} />
     </Switch>
     </div>
    );
  }
}

export default App;
