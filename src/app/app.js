import React, {PropTypes} from 'react';
import AppTemplate from './components/appTemplate.jsx';
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom';
import SignIn from './components/authentication/signin.jsx';
import Dashboard from './components/dashboard/mainDashboard.jsx';
//import UserAccount from './components/dashboard/userAccount';
import Whoops404 from './components/whoops404.jsx';
import '../common/css/style.css';


export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <HashRouter>
          <Switch>
            <Route exact path="/signIn" component={SignIn} />
            <Route path="/dashboard/index" component={Dashboard} />
            <Route component={Whoops404} />
          </Switch>
        </HashRouter>
      </div>);
  }
}

App.propTypes = {
};
