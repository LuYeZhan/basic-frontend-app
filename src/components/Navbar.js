import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WithAuth from './WithAuth';
require('typeface-roboto');

class Navbar extends Component {
  render() { 
    return (
      <>
        {this.props.isLoggedIn ? (
          <>
            <img className ="navbar-back" src='../images/back.png' onClick={()=>{this.props.goBack.history.goBack()}} alt=''/>
          </>
        ) : (
        <>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
        </>
        )}
      </>
    )
  }
}

export default WithAuth(Navbar);