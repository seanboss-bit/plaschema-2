import React from "react";
import DashBottom from "./DashBottom";
import DashGraph from "./DashGraph";
import DashNav from "./DashNav";
import DashShowcase from "./DashShowcase";
import DashTable from "./DashTable";

const Dashboard = ({ sideNavDisplay, setSideNavDisplay }) => {
  return (
    <div
      className="dashboard-main"
      id={sideNavDisplay ? "active" : "activenot"}
    >
      <DashNav
        setSideNavDisplay={setSideNavDisplay}
        sideNavDisplay={sideNavDisplay}
      />
      <div className="container">
        <DashShowcase />
        <DashTable />
        <DashGraph />
        <DashBottom />
      </div>
      <footer>
        <div className="container">
          <div className="footer-content">
            <p>
              © 2021. Designed for Plateau State Contributory Health Care
              Management Agency by Instant Deposit Ltd. All Rights Reserved.
            </p>
            <p className="lop">FAQ</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
