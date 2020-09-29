import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Component/Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateCV from "./Component/CreateCV/CreateCV";
import CVList from "./Component/CVList/CVList";
import Navbar from "./Component/Navbar/Navbar";
import Notfound from "./Component/Notfound/Notfound";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="sidbar">
          <Navbar></Navbar>
        </div>
        <Switch>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/createCV">
            <CreateCV></CreateCV>
          </Route>
          <Route path="/cvlist">
            <CVList></CVList>
          </Route>
          <Route exact path="/">
            <Dashboard></Dashboard>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
