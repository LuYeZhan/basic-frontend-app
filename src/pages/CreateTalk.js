import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'



class CreateTalk extends Component {
    render() {
        return (
            <>
                <Navbar goBack={this.props}/>
                <div>
                    <h1> Create talk page</h1>
                    <button className="mic">Record</button>
                </div>
                <Footer/>
            </>
        )
    }
}

export default CreateTalk;