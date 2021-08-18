import React from 'react';
import {BrowserRouter,Route,Switch ,Redirect} from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import JournalScreen from "../components/journal/JournalScreen";

function AppRoutes(props) {
    return (
         <BrowserRouter>
             <Switch>
             <Route  path={"/auth"} component={AuthRoutes} />
             <Route exact path={"/"} component={JournalScreen} />
              <Redirect to={'/auth/login'} />
             </Switch>



         </BrowserRouter>
    );
}

export default AppRoutes;

