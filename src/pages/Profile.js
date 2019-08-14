import React, { Component } from 'react'

class Profile extends Component {
    render() {
        return (
            <div>
                <h1>Profile page</h1>
                <ul className="flex">
                    <li> <p>profile pic</p> </li>
                    <li> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur consequatur quibusdam deleniti quo error odit.</p> </li>
                    <li><p>add friend</p></li>
                </ul>
                <ul className="flex two-columns">
                    <li><p>My talks</p></li>
                    <li><p>friends</p></li>
                </ul>
            </div>
        )
    }
}
export default Profile;