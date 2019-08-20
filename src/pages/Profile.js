import React, { Component } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AudioElement from '../components/AudioElement'
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth';
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
    delete = (index,talk_id) => {
      
    talkService.delete(talk_id)
    .then((response)=>{
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
                <Navbar goBack={this.props}/>
                <button onClick={this.props.logout}>Logout</button>
                <div>
                    <h1>Profile page</h1>
                   <Link to= '/profile/update'> <button>Edit user</button> </Link>
                    <ul className="flex">
                        <li> <button>profile pic</button> </li>
                        <li> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur consequatur quibusdam deleniti quo error odit.</p> </li>
                        <li><button>add friend</button></li>
                    </ul>
                    <ul className="flex column">
                    {talk.length > 0 ? talk.map((talk, index)=> {
                        return (
                          <div key={index}>
                            <AudioElement key={talk._id} talk={talk}/>
                            <img src="./images/delete.png" alt="delete icon" onClick={() => this.delete(index,talk._id)}/>
                          </div>
                    )
                    }):null}
                        <li><button>friends</button></li>
                    </ul>
                </div>
                <Footer/>
            </>
        )
    }
}
export default withAuth(Profile);