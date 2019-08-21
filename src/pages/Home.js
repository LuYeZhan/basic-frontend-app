import React, { Component } from 'react';
import WithAuth from '../components/WithAuth';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Search from '../components/Search';
import userService from '../services/user-service';


require('typeface-roboto');

class Home extends Component {
  state = {
    talk: [],
    showingTalk: []
  } 
  componentDidMount() {
    userService.getHome()
      .then((response) => {
        this.setState({
          talk: response,
          showingTalk: response
        });
      })
  }

  talkShowingState = (talks) => {
    this.setState({
      showingTalk: talks
    })
  }

  render() {
    const {talk, showingTalk} = this.state
    return (
      <>
      <Navbar goBack={this.props}/>
        <>
          <h1>Home page</h1>
          {talk.length > 0 ? <Search changeTalk={this.talkShowingState} talk={talk} className="search-bar">Search bar</Search> : null}
          {showingTalk.length > 0 ? showingTalk.map((talk)=> {
            return (
              <div key={talk._id} className="talk-cards">
                <h3>{talk.title}</h3>
                <p>{talk.tags[0]}</p>
                <article>
                  <audio
                    controls
                    src={talk.soundURL}>
                    <code> audio </code> element.
                  </audio>
                </article>
              </div>
                  )
          }):null}
        </>
      <Footer/>
      </>
          )
      }
}

export default WithAuth(Home);