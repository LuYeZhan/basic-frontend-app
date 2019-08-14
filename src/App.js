import React, {Component} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer'
import Home from './pages/Home';
import Profile from './pages/Profile';
import CreateTalk from './pages/CreateTalk'

import AuthProvider from './contexts/auth-context';
import PrivateRoute from './components/PrivateRoute'
import AnonRoute from './components/AnonRoute'

import './App.css';
import 'milligram';

class App extends Component {
  render() {
    return (
      <Router>
      {/* cualquier ruta que este dentro del auth provider, yo tengo acceso al      Adhoc withAuth */}
        <AuthProvider>
          <div className="container">
            <h1>Basic React Authentication</h1>
            <Navbar />
            <Switch>
              <AnonRoute path="/signup" component={Signup} />
              <AnonRoute path="/login" component={Login} />
              <PrivateRoute path='/home' component={Home} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/create-talk" component={CreateTalk} />
            </Switch>
            <Footer/>
          </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
