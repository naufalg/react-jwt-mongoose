import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
