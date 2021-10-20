import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Route,Redirect } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoding,setIsLoding}=useAuth();
    if(isLoding){
        return <Spinner animation="grow" variant="info" />
    }
    return ( 
        <Route {...rest} render={({location})=>(
            user.email? children:<Redirect to={{
                pathname:"/login",
                state:{from:location}
            }}></Redirect>
        )}>
            
        </Route>
    );
};

export default PrivateRoute;