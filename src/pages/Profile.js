import React, { Component } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';




class Profile extends Component {

    state = {
        username: '',
        email: '',
    };

    handleEditClick = (id) => {
    const {user} = this.state;
    user.EditOneUser(id)
    .then(() =>{
        this.setState({
            username: '',
            email: '',
        })
    })
    }

    render() {
        const {user} = this.state
        return (
            <>
                <Navbar goBack={this.props}/>
                <div>
                    <h1>Profile page</h1>
                    <button onClick= {() =>{
                        this.handleEditClick(user._id)
                    }}>Edit user</button>
                    <ul className="flex">
                        <li> <button>profile pic</button> </li>
                        <li> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur consequatur quibusdam deleniti quo error odit.</p> </li>
                        <li><button>add friend</button></li>
                    </ul>
                    <ul className="flex two-columns">
                        <li><button>My talks</button></li>
                        <li><button>friends</button></li>
                    </ul>
                </div>
                <Footer/>
            </>
        )
    }
}
export default Profile;