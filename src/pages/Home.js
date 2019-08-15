import React, { Component } from 'react';
import withAuth from '../components/withAuth';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

class Home extends Component {
  render() {
    
    return (
      <>
      <Navbar goBack={this.props}/>
        <div className="flex column">
        
          <h1>Welcome free talker </h1>
          <button className="mic">Logo</button>
          <button className="search-bar">Search bar</button>
          <button className="talk">Talk1</button>
          <button className="talk">Talk2</button>
          <button className="talk">Talk3</button>
          <button className="talk">Talk4</button>
        </div>
      <Footer/>
      </>
    )
  }
}

export default withAuth(Home);