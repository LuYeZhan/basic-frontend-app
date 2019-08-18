import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import withAuth from './withAuth';

const AnonRoute = (props) => {
    // hemos hecho rename del component a Component, con los :
    const {isLoggedIn, component: Component, ...rest} = props;
    return (
        <>
       {!isLoggedIn ? <Route 
       render= {(props) =>{
           // React solo lee un componente si esta en mayuscula, nosotros lo hemos definido como component, arriba, le hacemos rename
           return <Component {...props}/>
        
        }}
        {...rest}
       /> : <Redirect to='/' />}
        </>
    );
}

export default withAuth(AnonRoute);