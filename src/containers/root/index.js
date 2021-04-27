import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import DahboardMainContainer from "../dashboard/dashboardView/main";
import DahboardSubContainer from "../dashboard/dashboardView/sub";

const RootContainer = () => {

  return (
    <Router>
        <Switch>
          <Route exact path="/dashboard" component={DahboardMainContainer} />
          <Route exact path="/dashboardsub" component={DahboardSubContainer} />
          <Redirect from="/" exact to="/dashboard" />
          <Route exact path="*" component={DahboardMainContainer} />
        </Switch>
    </Router>
  );
};

export default RootContainer;
