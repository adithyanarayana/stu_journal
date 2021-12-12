import { Route, Switch } from "react-router-dom";
import "./App.css";
import Student from "./pages/Student";
import Latest from "./pages/Latest";
import Preparation from "./pages/Preparation";
import Nav from "./components/Nav";

import Admin from "./pages/Admin";
import Feedback from "./pages/Feedback";

function App() {
  return (
    <div>
      <div className="App-header">
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

            <Route path="/Admin">
              <Admin />
            </Route>
            <Route path="/Feedback">
              <Feedback />
            </Route>
          </Switch>
        </div>
      </div>
      <div className="App-footer"></div>
    </div>
  );
}

export default App;
