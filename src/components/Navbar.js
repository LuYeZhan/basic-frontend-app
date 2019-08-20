import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WithAuth from './WithAuth';
require('typeface-roboto');

class Navbar extends Component {
  render() { 
    return (
      <>
        <h2>Navbar</h2>
        {this.props.isLoggedIn ? (
          <>
            <p>username: {this.props.user.username}</p>
            <img src='../images/back.png' onClick={()=>{this.props.goBack.history.goBack()}} alt=''/>
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