import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Mic from '../components/ReactMic';
require('typeface-roboto');

class CreateTalk extends Component {
    state = {
        sound: ''
    }
    render() {
        return (
            <>
                <Navbar goBack={this.props}/>
                <div className="container">
                    <h1> Create talk page</h1>
                    <Mic/>
                </div>
                <Footer/>
            </>
        )
    }
}

export default CreateTalk;