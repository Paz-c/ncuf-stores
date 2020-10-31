import React, {Component} from 'react'
import HomePage from './pages/homepage/homepage'
import './App.css';
import {Route, Switch} from 'react-router-dom'
import AboutPage from './pages/about-page/about-page';
import Hats from './pages/hats/hats';


class App extends Component {

  render(){
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/hats' component={Hats} />
      </Switch>
    );
  }
}

export default App;
