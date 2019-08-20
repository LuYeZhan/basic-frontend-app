import React, { Component } from 'react';
import { Link } from 'react-router-dom';

require('typeface-roboto');

export default class SplashPage extends Component {
    render() {
        return (
            <div className="container">

                <p>if you cannot see the truth, heard the truth</p>
               
                <Link to = '/signup'><button>Signup</button></Link>
                <Link to = '/login'><button>Connect</button></Link>

                <p>everything starts with a conversation</p>

                <p>find someone who understands you</p>
                
                <p> You don't have to see, to connect</p>

                <h3>Social sound app </h3>
            </div>
        )
    }
}
