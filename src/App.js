import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Component/Dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import CreateCV from "./Component/CreateCV/CreateCV";
import CVList from "./Component/CVList/CVList";
import Navbar from "./Component/Navbar/Navbar";
import Notfound from "./Component/Notfound/Notfound";
import CvDetails from "./Component/CvDetails/CvDetails";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

firebase.initializeApp(firebaseConfig);

function App() {
  const [data, setData] = useState([]);
  const [detiailsData, setdetailsData] = useState([]);

  useEffect(() => {
    fetch("https://dynamic-cv-template.herokuapp.com/information")
      .then((res) => res.json())
      .then((data) => {
        // console.log("data from database", data);
        setData(data);
        // console.log(data);
      });
  }, []);

  const handleCV = (candidate) => {
    console.log("clicked", candidate);
    // const newData = [...detiailsData, candidate];
    setdetailsData(candidate);
    console.log("d", detiailsData);
  };

  const handleRemove = (candidateKey) => {
    console.log("Removed", candidateKey);
    const newData = data.filter((dt) => dt._id !== candidateKey);
    setData(newData);
  };

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
            {
              <CVList
                d={data}
                handleCV={handleCV}
                handleRemove={handleRemove}
              ></CVList>
            }
          </Route>
          <Route path="/cdDetails">
            {/* {detiailsData.map((dt) => (
              <CvDetails dt={dt}></CvDetails>
            ))} */}
            <CvDetails dt={detiailsData}></CvDetails>
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
