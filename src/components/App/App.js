import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "../App/App.module.scss";
import Header from "../Header"

// Pages
import home from "../../pages/home";
import signup from "../../pages/signup";
import airlines from "../../pages/airlines";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/airlines" component={airlines} />
          <Route exact path="/sign-up" component={signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
