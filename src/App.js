import React, {Component} from 'react'
import HomePage from './pages/homepage/homepage'
import './App.css';
import {Route, Switch} from 'react-router-dom'
import AboutPage from './pages/about-page/about-page';
import Hats from './pages/hats/hats';
import Shop from './pages/shop/shop';
import Header from './components/header/header'


class App extends Component {

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/hats' component={Hats} />
          <Route path='/shop' component={Shop} />
        </Switch>
      </div>
    );
  }
}

export default App;
