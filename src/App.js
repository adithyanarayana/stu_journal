//import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Student from "./pages/Student";
import Latest from "./pages/Latest";
import Preparation from "./pages/Preparation";
import Nav from "./components/Nav";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UserAuth from "./pages/UserAuth";
import Feedback from "./pages/Feedback";
import Feed from "./pages/Feed";
import Notespage from "./pages/Notespage";
import Loginpage from "./components/Loginpage";
import Stu_admin from "./pages/Stu_admin";
import Pushnoti from "./components/Pushnoti";

function App() {
  return (
    <div>
      <div className="header_div">
        <h2>Student Journal Application</h2>
      </div>
      <div className="App-main">
        <div>
          <Switch>
            <Route exact path="/">
              <Nav />
            </Route>
            <Route path="/Student">
              <Student />
            </Route>
            <Route path="/Latest">
              <Latest />
            </Route>
            <Route path="/Preparation">
              <Preparation />
            </Route>

            <Route path="/UserAuth">
              <UserAuth />
            </Route>
            <Route path="/Feedback">
              <Feedback />
            </Route>
            <Route path="/Feed">
              <Feed />
            </Route>
            {/* <Route path="/Admin">
              <Admin /> */}
            {/* </Route> */}
            <Route path="/Loginpage">
              <Loginpage />
            </Route>
            <Route path="/Pushnoti">
              <Pushnoti />
            </Route>
            <Route path="/Notespage">
              <Notespage />
            </Route>
            <Route path="/Stu_admin">
              <Stu_admin />
            </Route>
          </Switch>
        </div>
      </div>
      <div className="App-footer"></div>
    </div>
  );
}

export default App;
