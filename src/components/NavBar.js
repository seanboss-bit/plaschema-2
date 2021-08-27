import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SmsFailedIcon from "@material-ui/icons/SmsFailed";
import PeopleIcon from "@material-ui/icons/People";
import WarningIcon from "@material-ui/icons/Warning";
import PersonIcon from "@material-ui/icons/Person";
import { useState } from "react";
import { useEffect } from "react";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import BuildIcon from "@material-ui/icons/Build";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const NavBar = ({ setSideNavDisplay, sideNavDisplay }) => {
  const [notifyToggle, setNotifyTooggle] = useState(false);
  const [userToggle, setUserTooggle] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setNotifyTooggle(false);
        setUserTooggle(false);
      }
    });
    // eslint-disable-next-line
  }, []);
  return (
    <div className="nav-res">
      <div className="nav-responsive-top"></div>
      <div className="nav-responsive-bottom">
        <div className="navbars" id={sideNavDisplay ? "active" : "activenot"}>
          <div
            className="bar"
            onClick={() => {
              setSideNavDisplay(!sideNavDisplay);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="user-menu">
            <div className="notify">
              <span></span>
              <NotificationsIcon
                onClick={() => {
                  setNotifyTooggle(!notifyToggle);
                  setUserTooggle(false);
                }}
              />
              <ul
                className="notification-data"
                id={notifyToggle ? "active" : ""}
              >
                <li className="notification-header">
                  <div className="new-notify">
                    <h5>5 New </h5>
                    <p>Notifcations</p>
                  </div>
                  <SmsFailedIcon />
                </li>
                <li>
                  <div className="notify-items">
                    <ul>
                      <li>
                        <div className="container">
                          {/* eslint-disable-next-line */}
                          <a href="#">
                            <PeopleIcon className="blue" />
                            251 pricipals selected facilities
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="container">
                          {/* eslint-disable-next-line */}
                          <a href="#">
                            <WarningIcon className="yellow" />3 nominal rolls
                            sent
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="container">
                          {/* eslint-disable-next-line */}
                          <a href="#">
                            <PersonIcon className="red" />3 nominal rolls sent
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="container">
                          {/* eslint-disable-next-line */}
                          <a href="#">
                            <WarningIcon className="yellow" />3 nominal rolls
                            sent
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="container">
                          {/* eslint-disable-next-line */}
                          <a href="#">
                            <PersonIcon className="red" />3 nominal rolls sent
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="container">
                          {/* eslint-disable-next-line */}
                          <a href="#">
                            <PersonIcon className="blue" />
                            30 refferals aproved
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="container">
                          {/* eslint-disable-next-line */}
                          <a href="#">
                            <PersonIcon className="green" />2 PHCs Submitted
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="notify-footer">
                  <p>View All</p>
                </li>
              </ul>
            </div>
            <div className="user">
              <img
                src="/images/avatar/1.jpg"
                alt="#"
                onClick={() => {
                  setUserTooggle(!userToggle);
                  setNotifyTooggle(false);
                }}
              />
              <ul
                className="notification-data2"
                id={userToggle ? "active" : ""}
              >
                <li className="notification-header">
                  <div className="new-notify-icon-img">
                    <img src="/images/avatar/1.jpg" alt="#" />
                  </div>
                  <div className="email-stuffs">
                    <h6>Mr Micheal</h6>
                    <p>mrmicheal@gmail.com</p>
                  </div>
                </li>
                <li>
                  <div className="main-body">
                    <ul>
                      <li>
                        <div className="container">
                          <div className="put-two">
                            {/* eslint-disable-next-line */}
                            <a href="#">
                              <PersonIcon />
                              Beneficiaries
                            </a>
                            {/* eslint-disable-next-line */}
                            <a href="#">
                              <LocalMallIcon />
                              Accreditations
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="container">
                          <div className="put-two">
                            {/* eslint-disable-next-line */}
                            <a href="#">
                              {" "}
                              <BuildIcon />
                              Account Settings
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="container">
                          <div className="put-two">
                            {/* eslint-disable-next-line */}
                            <a href="#">
                              {" "}
                              <ExitToAppIcon />
                              Log Out
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="notify-footer">
                  <button>View Profile</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
