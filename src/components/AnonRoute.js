import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import WithAuth from './WithAuth';

const AnonRoute = (props) => {
    
    const {isLoggedIn, component: Component, ...rest} = props;
    return (
        <>
       {!isLoggedIn ? <Route 
       render= {(props) =>{
           return <Component {...props}/>
        }}
        {...rest}
       /> : <Redirect to='/' />}
        </>
    );
}

export default WithAuth(AnonRoute);