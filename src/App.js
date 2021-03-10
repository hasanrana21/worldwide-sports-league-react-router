import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import LeagueDetails from "./Components/LeagueDetails/LeagueDetails";
import NotFound from "./Components/NotFound/NotFound";
require('typeface-roboto');


function App() {
  return (
    <Router>
      <Switch>

        <Route path="/home">
          <Home/>
        </Route>

        <Route path="/league/details/:idLeague">
          <LeagueDetails/>
        </Route>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="*">
          <NotFound/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
