import React, {Component} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

import SplashPage from './pages/SplashPage'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import CreateTalk from './pages/CreateTalk'
import ProfileUpdate from './pages/ProfileUpdate'
import AuthProvider from './contexts/auth-context';
import PrivateRoute from './components/PrivateRoute'
import AnonRoute from './components/AnonRoute'


import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
      {/* cualquier ruta que este dentro del auth provider, yo tengo acceso al Adhoc withAuth */}
        <AuthProvider>
          <div className="container">
            <h1>Listen and talk</h1>
            <Switch>
              <AnonRoute path="/splash" exact component={SplashPage} />
              <AnonRoute path="/signup" exact component={Signup} />
              <AnonRoute path="/login" exact component={Login} />
              <PrivateRoute path='/' exact component={Home} />
              <PrivateRoute path="/profile" exact component={Profile} />
              <PrivateRoute path= "/profile/update" exact component={ProfileUpdate}/>
              <PrivateRoute path="/create-talk" exact component={CreateTalk} />
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
