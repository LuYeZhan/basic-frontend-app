import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import WithAuth from './WithAuth';

const PrivateRoute = (props) => {
    
    const {isLoggedIn, component: Component, ...rest} = props;
    return (
        <>
       {isLoggedIn ? <Route 
       render= {(props) =>{
          
           return <Component {...props}/>
        
        }}
        {...rest}
       /> : <Redirect to='/splash' />}
        </>
    );
}

export default WithAuth(PrivateRoute);