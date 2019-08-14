import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth'

class Footer extends Component {
    render() {
        return (
            <div>
                <h2>Footer</h2>
                <Link to = '/home' > <img src="./images/2.jpg" alt=""/> </Link>
                <Link to = '/create-talk' > <img src="./images/3.jpg" alt=""/> </Link>
                <Link to ='/profile'> <img src="./images/1.jpg" alt=""/> </Link>
            </div>
        )
    }
}

export default withAuth(Footer);