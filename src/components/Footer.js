import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth';
require('typeface-roboto');

class Footer extends Component {
    render() {
        return (
            <div>
                <h2>Footer</h2>
                <Link to = '/' > <button >Home </button></Link>
                <Link to = '/create-talk'> <button > Record </button> </Link>
                <Link to ='/profile'> <button> Profile </button> </Link>
            </div>
        )
    }
}

export default withAuth(Footer);