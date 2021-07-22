import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignUpFormPage";
import CreateOpportunityPage from "./components/CreateOpportunityPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/Home";
import Opportunity from "./components/Opportunity";
import OppSignup from "./components/OppSignup";
import Locations from "./components/Locations"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/opportunities">
            <CreateOpportunityPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/opportunities/:id">
            <Opportunity />
          </Route>
          <Route exact path="/signups">
            <OppSignup />
          </Route>
          <Route path="/locations">
            <Locations />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
