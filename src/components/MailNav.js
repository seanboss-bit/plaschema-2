import React, { useEffect } from "react";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import BuildIcon from "@material-ui/icons/Build";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import SmsFailedIcon from "@material-ui/icons/SmsFailed";
import PeopleIcon from "@material-ui/icons/People";
import WarningIcon from "@material-ui/icons/Warning";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import ForumIcon from "@material-ui/icons/Forum";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import SettingsIcon from "@material-ui/icons/Settings";
import CloseIcon from "@material-ui/icons/Close";
import Settings from "./Settings components/Settings";
import Chat from "./Settings components/Chat";
import Todo from "./Settings components/Todo";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

const MailNav = ({
  setSideNavDisplay,
  sideNavDisplay,
  notifyToggle,
  setNotifyTooggle,
  userToggle,
  setUserTooggle,
  messageToggle,
  setMessageToggle,
  taskToggle,
  SetTaskToggle,
  setting,
  setSetting,
  page,
  setPage,
}) => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setNotifyTooggle(false);
        setUserTooggle(false);
        setMessageToggle(false);
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="navbars" id={sideNavDisplay ? "active" : "activenot"}>
      <div className="search-container">
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
        <div className="nav-search_bar">
          <input
            type="text"
            placeholder="Search"
            className="nav_search_input"
          />
          <button className="search_btn">
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className="user-menu">
        <div className="notify">
          <span></span>
          <NotificationsIcon
            onClick={() => {
              setNotifyTooggle(!notifyToggle);
              setUserTooggle(false);
              setMessageToggle(false);
              SetTaskToggle(false);
            }}
            className="bell_icon"
          />
          <ul className="notification-data" id={notifyToggle ? "active" : ""}>
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
                        <WarningIcon className="yellow" />3 nominal rolls sent
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
                        <WarningIcon className="yellow" />3 nominal rolls sent
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
        <div className="messages-nav">
          <div className="msg">
            <span></span>
            <EmailIcon
              onClick={() => {
                setNotifyTooggle(false);
                setUserTooggle(false);
                setMessageToggle(!messageToggle);
                SetTaskToggle(false);
              }}
            />
          </div>
          <ul className="notification-data3" id={messageToggle ? "active" : ""}>
            <li className="notification-header">
              <div className="new-notify">
                <h5>5 New </h5>
                <p>Messages</p>
              </div>
              <ForumIcon />
            </li>
            <li>
              <div className="notify-items">
                <ul>
                  <li>
                    <div className="container">
                      {/* eslint-disable-next-line */}
                      <a href="#" className="msg-items">
                        <img
                          src="/images/avatar/1.jpg"
                          alt="#"
                          className="msg-img"
                        />
                        <div>
                          <div className="msg-top">
                            <h6>Lorem</h6>
                            <p>
                              {" "}
                              <QueryBuilderIcon />
                              10 mins
                            </p>
                          </div>
                          <div className="msg-body">
                            <p>Lorem ipsum dolor sit...</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="container">
                      {/* eslint-disable-next-line */}
                      <a href="#" className="msg-items">
                        <img
                          src="/images/avatar/1.jpg"
                          alt="#"
                          className="msg-img"
                        />
                        <div>
                          <div className="msg-top">
                            <h6>Lorem</h6>
                            <p>
                              {" "}
                              <QueryBuilderIcon />
                              10 mins
                            </p>
                          </div>
                          <div className="msg-body">
                            <p>Lorem ipsum dolor sit...</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="container">
                      {/* eslint-disable-next-line */}
                      <a href="#" className="msg-items">
                        <img
                          src="/images/avatar/1.jpg"
                          alt="#"
                          className="msg-img"
                        />
                        <div>
                          <div className="msg-top">
                            <h6>Lorem</h6>
                            <p>
                              {" "}
                              <QueryBuilderIcon />
                              10 mins
                            </p>
                          </div>
                          <div className="msg-body">
                            <p>Lorem ipsum dolor sit...</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="container">
                      {/* eslint-disable-next-line */}
                      <a href="#" className="msg-items">
                        <img
                          src="/images/avatar/1.jpg"
                          alt="#"
                          className="msg-img"
                        />
                        <div>
                          <div className="msg-top">
                            <h6>Lorem</h6>
                            <p>
                              {" "}
                              <QueryBuilderIcon />
                              10 mins
                            </p>
                          </div>
                          <div className="msg-body">
                            <p>Lorem ipsum dolor sit...</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="container">
                      {/* eslint-disable-next-line */}
                      <a href="#" className="msg-items">
                        <img
                          src="/images/avatar/1.jpg"
                          alt="#"
                          className="msg-img"
                        />
                        <div>
                          <div className="msg-top">
                            <h6>Lorem</h6>
                            <p>
                              <QueryBuilderIcon />
                              10 mins
                            </p>
                          </div>
                          <div className="msg-body">
                            <p>Lorem ipsum dolor sit...</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="container">
                      {/* eslint-disable-next-line */}
                      <a href="#" className="msg-items">
                        <img
                          src="/images/avatar/1.jpg"
                          alt="#"
                          className="msg-img"
                        />
                        <div>
                          <div className="msg-top">
                            <h6>Lorem</h6>
                            <p>
                              {" "}
                              <QueryBuilderIcon />
                              10 mins
                            </p>
                          </div>
                          <div className="msg-body">
                            <p>Lorem ipsum dolor sit...</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="container">
                      {/* eslint-disable-next-line */}
                      <a href="#" className="msg-items">
                        <img
                          src="/images/avatar/1.jpg"
                          alt="#"
                          className="msg-img"
                        />
                        <div>
                          <div className="msg-top">
                            <h6>Lorem</h6>
                            <p>
                              <QueryBuilderIcon />
                              10 mins
                            </p>
                          </div>
                          <div className="msg-body">
                            <p>Lorem ipsum dolor sit...</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="notify-footer">
              <p>see all e-Mails</p>
            </li>
          </ul>
        </div>
        <div className="todo-nav">
          <div className="msg">
            <span></span>
            <FormatListBulletedIcon
              onClick={() => {
                setNotifyTooggle(false);
                setUserTooggle(false);
                setMessageToggle(false);
                SetTaskToggle(!taskToggle);
              }}
            />
          </div>
          <ul className="notification-data3" id={taskToggle ? "active" : ""}>
            <li className="notification-header">
              <div className="new-notify">
                <h5>5 New </h5>
                <p>Task</p>
              </div>
              <FormatListBulletedIcon />
            </li>
            <li>
              <div className="notify-items">
                <ul>
                  <li>
                    <div className="container">
                      <div className="tododetails">
                        <p>Lorem</p>
                        <span>91%</span>
                      </div>
                      <div className="table-progressbar">
                        <div className="progress-move"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="container">
                      <div className="tododetails">
                        <p>Lorem</p>
                        <span>80%</span>
                      </div>
                      <div className="table-progressbar">
                        <div className="progress-move2"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="container">
                      <div className="tododetails">
                        <p>Lorem</p>
                        <span>45%</span>
                      </div>
                      <div className="table-progressbar">
                        <div className="progress-move3"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="container">
                      <div className="tododetails">
                        <p>Lorem</p>
                        <span>0%</span>
                      </div>
                      <div className="table-progressbar">
                        <div className="progress-move4"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="container">
                      <div className="tododetails">
                        <p>Lorem</p>
                        <span>45%</span>
                      </div>
                      <div className="table-progressbar">
                        <div className="progress-move3"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="container">
                      <div className="tododetails">
                        <p>Lorem</p>
                        <span>91%</span>
                      </div>
                      <div className="table-progressbar">
                        <div className="progress-move2"></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="notify-footer">
              <p>See all Task</p>
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
              setMessageToggle(false);
              SetTaskToggle(false);
            }}
          />
          <ul className="notification-data2" id={userToggle ? "active" : ""}>
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
        <div className="settings">
          <SettingsIcon
            className="set"
            onClick={() => {
              setSetting(true);
              setUserTooggle(false);
              setNotifyTooggle(false);
              setMessageToggle(false);
              SetTaskToggle(false);
            }}
          />
          <div className="link-options" id={setting ? "active" : "activenot"}>
            <div className="close-btn">
              <CloseIcon
                onClick={() => {
                  setSetting(false);
                }}
              />
            </div>
            <div className="container">
              <div className="links">
                {/* eslint-disable-next-line */}
                <a
                  href="#settings"
                  onClick={() => setPage(1)}
                  className={page === 1 ? "cta" : ""}
                >
                  Settings
                </a>
                {/* eslint-disable-next-line */}
                <a
                  href="#chat"
                  onClick={() => setPage(2)}
                  className={page === 2 ? "cta" : ""}
                >
                  Chat
                </a>
                {/* eslint-disable-next-line */}
                <a
                  href="#todo"
                  onClick={() => setPage(3)}
                  className={page === 3 ? "cta" : ""}
                >
                  Todo
                </a>
              </div>
              <div className="set-body">
                {page === 1 ? <Settings /> : null}
                {page === 2 ? <Chat /> : null}
                {page === 3 ? <Todo /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailNav;
