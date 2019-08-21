import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WithAuth from './WithAuth';
require('typeface-roboto');

class Footer extends Component {
    render() {
        return (
            <div className="flex footer">
                <Link to = '/' ><img className="icon-size" src="../images/home.png" alt=""/></Link>
                <Link to = '/create/talk' ><img className="icon-size" src="../images/mic.png" alt="" /></Link>
                <Link to = '/profile' ><img className="icon-size" src="../images/profile.png" alt=""/></Link>
            </div>
        )
    }
}

export default WithAuth(Footer);