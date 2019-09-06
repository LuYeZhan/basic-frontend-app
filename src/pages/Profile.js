import React, { Component } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import WithAuth from '../components/WithAuth';
import userService from '../services/user-service';
import talkService from '../services/talk-service';
require('typeface-roboto');

class Profile extends Component {
  state = {
      talk: [],
    }
    componentDidMount() {
      userService.getUser()
        .then((response) => {
          this.setState({
            talk: response,
          });
        }).catch((error) => {
          console.log(error)
        })
    }
  delete = (index, talk_id) => {
  talkService.delete(talk_id)
    .then((response) => {
      const { talk } = this.state;
      const newMyTalks = [...talk];
      newMyTalks.splice(index, 1)
      this.setState ({
        talk: newMyTalks,
      })
    })
  } 
  
  render() {
      const {talk} = this.state
      return (
          <> 
            <div className="flex between">
              <Navbar goBack={this.props}/>
              <img src="../images/logout.png" alt="logout icon" className="icon-size" onClick={this.props.logout}/>
            </div>
            <>
              <h1>Profile page</h1>
              <h2>Hello, {this.props.user.username}</h2>
              <div className="flex between">
                <p>{this.props.user.email}</p>
                <Link to= '/profile/update'><img className="icon-size" src="../images/edituser.png" alt="edit user"/></Link>
              </div>
              <section className="flex column reset">
              {talk.length > 0 ? talk.map((talk, index)=> {
                return (
                  <article key={index} className="talk-cards">
                    <h3>{talk.title}</h3>
                    <p>{talk.tags[0]}</p>
                    <audio
                    controls
                    src={talk.soundURL}>
                    <code> audio </code> element.
                  </audio>
                    <div className="flex between">
                      {/* code without the window.confirm message 
                      <img className="icon-size" src="./images/delete.png" alt="delete icon" onClick={() => this.delete(index,talk._id)}/> */}
                      <img className="icon-size" src="./images/delete.png" alt="delete icon" onClick={(e) => { if (window.confirm('Are you sure you want to delete this talk?')) (this.delete(index,talk._id)) } } />
                      <Link to= {`/talk/update/${talk._id}`}><img className="icon-size" src="../images/edit-talk.png" alt="edit talk icon"/></Link>
                    </div>
                  </article>
                )
                }):null}
                <div className="margin-bottom">
                </div>
                </section>
            </>
              <Footer/>
          </>
      )
  }
}
export default WithAuth(Profile);