import React, { useState } from "react";
import Inbox from "./Inbox";
import MailNav from "./MailNav";
import MailSide from "./MailSide";

const MailDashboard = ({ setSideNavDisplay, sideNavDisplay }) => {
  const [notifyToggle, setNotifyTooggle] = useState(false);
  const [userToggle, setUserTooggle] = useState(false);
  const [messageToggle, setMessageToggle] = useState(false);
  const [taskToggle, SetTaskToggle] = useState(false);
  const [setting, setSetting] = useState(false);
  let [page, setPage] = useState(1);
 
  return (
    <div className="mail-dash" id={sideNavDisplay ? "active" : "activenot"}>
      <MailNav
        setSideNavDisplay={setSideNavDisplay}
        sideNavDisplay={sideNavDisplay}
        notifyToggle={notifyToggle}
        setNotifyTooggle={setNotifyTooggle}
        userToggle={userToggle}
        setUserTooggle={setUserTooggle}
        messageToggle={messageToggle}
        setMessageToggle={setMessageToggle}
        taskToggle={taskToggle}
        SetTaskToggle={SetTaskToggle}
        setting={setting}
        setSetting={setSetting}
        page={page}
        setPage={setPage}
      />
      <MailSide />
      
      <Inbox />
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

export default MailDashboard;
