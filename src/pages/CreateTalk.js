import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Mic from '../components/ReactMic';


class CreateTalk extends Component {
    state = {
        sound: ''
    }
    render() {
        return (
            <>
                <Navbar goBack={this.props}/>
                <div>
                    <h1> Create talk page</h1>
                    <button className="mic">Record</button>
                    <Mic/>
                </div>
                <Footer/>
            </>
        )
    }
}

export default CreateTalk;