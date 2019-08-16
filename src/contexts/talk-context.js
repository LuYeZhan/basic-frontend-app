import React, { Component } from 'react';
import authService from '../services/talk-service';

export const TalkContext = React.createContext();

class AuthProvider extends Component {
    state = {
        isLoggedIn: false,
        user: {},
        isLoading: true,
    }

    userSignUp = (user) => {
       return authService.signup(user)
        .then(() => {
            this.setState({
                isLoggedIn: true,
                user
            })
        })
    }

    userLogin = (user) => {
      return authService.login(user)
         .then(() => {
            this.setState({
                isLoggedIn: true,
                user
            })
        })
    }

    userLogOut = () => {
      return authService.logout()
        .then(() => {
            this.setState ({
                isLoggedIn: false,
                user: {}
            })
        })
    }

    componentDidMount(){
    this.updateUserData()
    }

    updateUserData =() => {
        authService.me()
        .then(user =>  {
            this.setState({
                user,
                isLoggedIn: true,
                isLoading: false
            })
        })
        .catch(() => {
            this.setState({
                isLoggedIn:false,
                user:{},
                isLoading: false
            })
        })
    }

    render() {
        const {user, isLoggedIn, isLoading} = this.state;
        return (
            <>
            {isLoading ? <p>Loading...</p> : (

                <AuthContext.Provider value={ 
                    {
                        user,
                        isLoggedIn,
                        login: this.userLogin,
                        signup: this.userSignUp,
                        logout: this.userLogOut,
                        updateUserData: this.updateUserData,
                    }
                }>
                    {this.props.children}
                </AuthContext.Provider>
                )}
            </>
        )
    }
}


export default AuthProvider