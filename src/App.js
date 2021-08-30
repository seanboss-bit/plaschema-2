import "./App.css";
import "./New.css";
import "./Sidebar.css";
import "./Mail.css";
import "./Mailbox.css";
import "./Inbox.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Resnav from "./components/Resnav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MailDashboard from "./components/MailDashboard";

function App() {
  const [sideNavDisplay, setSideNavDisplay] = useState(false);
  return (
    <Router className="App">
      <Sidebar sideNavDisplay={sideNavDisplay} />
      <Switch>
        <Route exact path="/">
          <div className="close">
            <NavBar
              sideNavDisplay={sideNavDisplay}
              setSideNavDisplay={setSideNavDisplay}
            />
          </div>
          <Dashboard
            sideNavDisplay={sideNavDisplay}
            setSideNavDisplay={setSideNavDisplay}
          />
        </Route>
        <Route exact path="/maildashboard">
          <div className="close">
            <Resnav
              sideNavDisplay={sideNavDisplay}
              setSideNavDisplay={setSideNavDisplay}
            />
          </div>
          <MailDashboard
            sideNavDisplay={sideNavDisplay}
            setSideNavDisplay={setSideNavDisplay}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
