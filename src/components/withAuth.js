import React, {Component} from 'react';
import {AuthContext} from '../contexts/auth-context';



const wihtAuth = (Comp) => {
    return class WithAuth extends Component {
        render() {
            return (
                <AuthContext.Consumer>
                {/* esto es value desestructurizado, es decir en el Comp, deberia ser;
                value.user, value.isLoggedIn, ... */}
                {({user, isLoggedIn, login, signup, logout}) => (
                <Comp 
                user = {user} 
                isLoggedIn = {isLoggedIn}
                login = {login}
                signup = {signup}
                logout = {logout}
                {... this.props}
                />
                )}
                </AuthContext.Consumer>
            )
        }
    }
}

export default wihtAuth;