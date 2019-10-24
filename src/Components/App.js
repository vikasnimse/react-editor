import React, { Component, Fragment } from "react";
import { Router, Route, Switch, Link } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { history } from '../_helpers';
import Login from './Pages/Login';
import Home from './Pages/Home';
import "../css/app.css"

export default class extends Component {
  state = {
    loggedIn: false,
  };
  handleLogin (){
    console.log("clicked");
    return;
    this.setState({loggedIn: true});
  }
  render() {
    const { loggedIn } = this.state;
    return (
      <Fragment>
        <Router history={history} >
          <div>
            <Switch>
              <PrivateRoute path="/home" 
                loggedIn={loggedIn} 
                component={Home}
              />
              <PrivateRoute exact path="/" 
                component={Home}
                loggedIn={loggedIn} 
              />
              <Route exact path="/login" 
                component={Login}
                loggedIn={loggedIn} 
              />
            </Switch>
          </div>
        </Router>
      </Fragment>
    );
  }
};

