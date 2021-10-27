import { Route, Switch } from "react-router-dom";
import "./App.css";
import Gpa from "./pages/Gpa";
import Fee from "./pages/Fees";
import Library from "./pages/Library";
import Nav from "./components/Nav";
import Preparation from "./pages/Preparation";
import Todo from "./pages/Todo";
import Notes from "./pages/Notes";

function App() {
  return (
    <div>
      <div className="App-header">
        <h2>Mini-project</h2>
      </div>

      <div className="App-main">
        <div>
          <Switch>
            <Route exact path="/">
              <Nav />
            </Route>
            <Route path="/gpa">
              <Gpa />
            </Route>
            <Route path="/fees">
              <Fee />
            </Route>
            <Route path="/library">
              <Library />
            </Route>
            <Route path="/Preparation">
              <Preparation />
            </Route>
            <Route path="/Todo">
              <Todo />
            </Route>
            <Route path="/Notes">
              <Notes />
            </Route>
          </Switch>
        </div>
      </div>
      <div className="App-footer"></div>
    </div>
  );
}

export default App;
