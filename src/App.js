import "./App.css";
import "./New.css";
import "./Sidebar.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MailDashboard from "./components/MailDashboard";

function App() {
  const [sideNavDisplay, setSideNavDisplay] = useState(false);
  return (
    <Router className="App">
      <div className="close">
        <NavBar
          sideNavDisplay={sideNavDisplay}
          setSideNavDisplay={setSideNavDisplay}
        />
      </div>
      <Sidebar sideNavDisplay={sideNavDisplay} />
      <Switch>
        <Route exact path="/">
          <Dashboard
            sideNavDisplay={sideNavDisplay}
            setSideNavDisplay={setSideNavDisplay}
          />
        </Route>
        <Route exact path="/maildashboard">
          <MailDashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
