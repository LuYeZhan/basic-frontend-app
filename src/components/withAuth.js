import React, {Component} from 'react';
import {AuthContext} from '../contexts/auth-context';

const WithAuth = (Comp) => {
    return class WithAuth extends Component {
        render() {
            return (
                <AuthContext.Consumer>
                {({user, isLoggedIn, login, signup, logout,update, updateUserData}) => (
                    <>
                <Comp 
                user = {user} 
                isLoggedIn = {isLoggedIn}
                login = {login}
                signup = {signup}
                logout = {logout}
                update = {update}
                updateUserData = {updateUserData}
                {... this.props}
                />
                {console.log(user)}
                </>
                )}
                </AuthContext.Consumer>
            )
        }
    }
}

export default WithAuth;