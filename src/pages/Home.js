import React, { Component } from 'react';
import withAuth from '../components/withAuth';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import userService from '../services/user-service'
require('typeface-roboto');

class Home extends Component {
  state = {
    talk: []
  }

  componentDidMount() {
    userService.getHome()
      .then((response) => {
        console.log(response)
        this.setState({
          talk: response
        });
        console.log(this.state.talk)
      }).catch((error) => {
        console.log(error)
      })
  }
  render() {
    const {talk} = this.state
    console.log(talk)
    return (
      <>
      <Navbar goBack={this.props}/>
        <div className="flex column">
        {talk.length > 0 ? talk.map((talk)=> {
          return (
            <>
              <article key={talk._id}>
                <audio 
                  controls
                  src={talk.soundURL}>
                  <code> audio </code> element.
                </audio>
              </article>
              </>
          )
          }):null}
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