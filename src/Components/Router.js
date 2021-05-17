import React from 'react';
import {Route, Switch } from "react-router";
import Calander from "./ComponentInsideCom/Calander";
import Dashbord from "./ComponentInsideCom/Dashbord";
import Student from "./ComponentInsideCom/Student";
import Branches from "./ComponentInsideCom/Branches";
import Teachers from "./ComponentInsideCom/Teachers";

const Router = () => {
    return (
        <>
        <Switch>
            <Route exact path="/ComponentInsideCom/Calender" component={Calander}/>
            <Route exact path="/ComponentInsideCom/Dashbord" component={Dashbord}/>
            <Route exact path="/ComponentInsideCom/Student" component={Student}/>
            <Route exact path="/ComponentInsideCom/Branches" component={Branches}/>
            <Route exact path="/ComponentInsideCom/Teachers" component={Teachers}/>
        </Switch>
        </>
    )
}
export default Router;
