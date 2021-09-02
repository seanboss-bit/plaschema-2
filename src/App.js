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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MailDashboard from "./components/MailDashboard";
import Mailmainside from "./components/Mailmainside";

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

      <Switch>
        <Route exact path="/">
          <Sidebar sideNavDisplay={sideNavDisplay} />
          <Dashboard
            sideNavDisplay={sideNavDisplay}
            setSideNavDisplay={setSideNavDisplay}
          />
        </Route>
        <Route exact path="/maildashboard">
          <Mailmainside sideNavDisplay={sideNavDisplay} />
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
