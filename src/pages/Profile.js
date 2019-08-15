import React, { Component } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';



class Profile extends Component {
    render() {
        return (
            <>
                <Navbar goBack={this.props}/>
                <div>
                    <h1>Profile page</h1>
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