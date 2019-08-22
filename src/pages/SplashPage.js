import React, { Component } from 'react';
import { Link } from 'react-router-dom';

require('typeface-roboto');

export default class SplashPage extends Component {
    render() {
        return (
            <div className="container text-center">
                <img className="logo" src="../images/logo.png" alt=" listen and talklogo"/>
                <Link to = '/signup'><button className="margin-button">Signup</button></Link>
                <Link to = '/login'><button className="margin-button">Connect</button></Link>
                <p className="text-end">A social network, without image or videos</p>
                <p className="text-end">So we can heard each other</p>
                <p className="text-end">And really connect and engage</p>
                <p className="text-end">Share your voice with the world, in less than a minute.</p>
            </div>
        )
    }
}
