import React from 'react';
import {Switch,Route, Redirect} from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";
function AuthRoutes(props) {
    return (
        <div className="auth__main">
            <div className="auth_box-content">
        <Switch>
            <Route exact path={'/auth/login'} component={LoginScreen}/>
            <Route exact path={'/auth/register'} component={RegisterScreen}/>
             <Redirect to={'/auth/login'}/>


        </Switch>
            </div>
        </div>
    );
}

export default AuthRoutes;

