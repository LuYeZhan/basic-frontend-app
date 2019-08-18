import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SplashPage extends Component {
    render() {
        return (
            <div>
               
                <Link to = '/signup' > <button >Signup </button></Link>
                <Link to = '/login'> <button > Login </button> </Link>
            </div>
        )
    }
}
