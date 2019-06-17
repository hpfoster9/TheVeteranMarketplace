import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App';
import HomeScreen from './HomeScreen';
import Careers from './Careers';
import ContactUs from './ContactUs';
import NavbarComponent from './NavbarComponent';
import LandingPage from './LandingPage';

class App extends Component {
  render() {
    return (
        <div className="appDiv">

            {/*<NavbarComponent/>*/}
            <BrowserRouter>
              <Switch>
                <Route exact={true} path='/' component={LandingPage}/>
                <Route exact={true} path='/careers' component={Careers}/>
                <Route exact={true} path='/contact' component={ContactUs}/>
              </Switch>
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
