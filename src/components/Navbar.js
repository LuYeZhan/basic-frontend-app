import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth'

class Navbar extends Component {
  render() { 
    return (
      <>
        <h2>Navbar</h2>
        {this.props.isLoggedIn ? (
          <>
            <p>username: {this.props.user.username}</p>
            <button onClick={()=>{this.props.goBack.history.goBack()}}>BACK</button>
            <button onClick={this.props.logout}>Logout</button>
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

export default withAuth(Navbar);