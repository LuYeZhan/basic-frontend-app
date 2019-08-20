import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth';
require('typeface-roboto');

class Footer extends Component {
    render() {
        return (
            <div>
                <h2>Footer</h2>
                <Link to = '/' ><img src="./images/home.png" alt=""/></Link>
                <Link to = '/create-talk' ><img src="./images/mic.png" alt="" /></Link>
                <Link to = '/profile' ><img src="./images/profile.png" alt=""/></Link>
            </div>
        )
    }
}

export default withAuth(Footer);