import React, { Component } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth';





class Profile extends Component {

    render() {
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
export default withAuth(Profile);