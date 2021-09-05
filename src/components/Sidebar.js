import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import PersonIcon from "@material-ui/icons/Person";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ sideNavDisplay }) => {
  const [dashArr, setDashArr] = useState(true);
  const [benOpen, setBenOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [encOpen, setEncOpen] = useState(false);
  const [facOpen, setFacOpen] = useState(false);
  const [useOpen, setUseOpen] = useState(false);
  const topOpen = useRef();
  const midOpen = useRef();
  return (
    <div>
      <div
        className="sidebar-main"
        id={sideNavDisplay ? "active" : "activenot"}
      >
        <div className="container">
          <div className="side-header text-center">
            <h5>PLASCHEMA Admin</h5>
          </div>
          <ul className="tree">
            <li>
              <div className="general ps-2">
                <h6>General</h6>
              </div>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a
                href="#"
                className="linkflex"
                onClick={() => {
                  setDashArr(!dashArr);
                  setBenOpen(false);
                  setSubOpen(false);
                  setEncOpen(false);
                  setFacOpen(false);
                  setUseOpen(false);
                }}
              >
                <div className="links">
                  <div className="box-for">
                    <DashboardIcon className="small" />
                  </div>
                  <p>Dashboard</p>
                </div>
                <ArrowForwardIosIcon
                  className="smaller"
                  id={dashArr ? "active" : "activenot"}
                />
              </a>

              <ul className={dashArr ? "display show" : "display"}>
                <li>
                  {/* eslint-disable-next-line */}
                  <Link to="/" className="links ps-4">
                    <ArrowForwardIcon className="small" />
                    <p className="ps-3">Main Overview</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <div
                className={dashArr ? "mt-5 general ps-2" : "mt-3 general ps-2"}
              >
                <h6>Beneficiaries</h6>
              </div>
            </li>
            <li>
              <li>
                {/* eslint-disable-next-line */}
                <a
                  href="#"
                  className="linkflex"
                  onClick={() => {
                    setDashArr(false);
                    setBenOpen(!benOpen);
                    setSubOpen(false);
                    setEncOpen(false);
                    setFacOpen(false);
                    setUseOpen(false);
                  }}
                >
                  <div className="links">
                    <div className="box-for">
                      <NoteAddIcon className="small" />
                    </div>
                    <p>Enrollments</p>
                  </div>
                  <ArrowForwardIosIcon
                    className="smaller"
                    id={benOpen ? "active" : "activenot"}
                  />
                </a>
                <ul
                  className="display"
                  ref={topOpen}
                  style={
                    benOpen
                      ? {
                          height: topOpen.current.scrollHeight + "px",
                        }
                      : {
                          height: "0px",
                        }
                  }
                >
                  <li>
                    {/* eslint-disable-next-line */}
                    <Link to="/maildashboard" className="links ps-4">
                      <MoreHorizIcon className="small" />
                      <p className="ps-3">Approved</p>
                    </Link>
                    {/* eslint-disable-next-line */}
                    <a href="#" className="links ps-4 mt-3">
                      <MoreHorizIcon className="small" />
                      <p className="ps-3">Pending</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a
                  href="#"
                  className="linkflex"
                  onClick={() => {
                    setDashArr(false);
                    setBenOpen(false);
                    setSubOpen(!subOpen);
                    setEncOpen(false);
                    setFacOpen(false);
                    setUseOpen(false);
                  }}
                >
                  <div className="links">
                    <div className="box-for">
                      <CheckCircleOutlineIcon className="small" />
                    </div>
                    <p>Subscriptions</p>
                  </div>
                  <ArrowForwardIosIcon
                    className="smaller"
                    id={subOpen ? "active" : "activenot"}
                  />
                </a>
                <ul
                  className="display"
                  ref={midOpen}
                  style={
                    subOpen
                      ? {
                          height: midOpen.current.scrollHeight + "px",
                        }
                      : {
                          height: "0px",
                        }
                  }
                >
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="#" className="links ps-2 pt3 pb-2">
                      <MoreHorizIcon className="small" />
                      <p className="ps-3">Enrollee Subscription</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a
                  href="#"
                  className="linkflex"
                  onClick={() => {
                    setDashArr(false);
                    setBenOpen(false);
                    setSubOpen(false);
                    setEncOpen(!encOpen);
                    setFacOpen(false);
                    setUseOpen(false);
                  }}
                >
                  <div className="links">
                    <div className="box-for">
                      <ListAltIcon className="small" />
                    </div>
                    <p>Encounters</p>
                  </div>
                  <ArrowForwardIosIcon
                    className="smaller"
                    id={encOpen ? "active" : "activenot"}
                  />
                </a>
                <ul
                  className="display"
                  ref={midOpen}
                  style={
                    encOpen
                      ? {
                          height: midOpen.current.scrollHeight + "px",
                        }
                      : {
                          height: "0px",
                        }
                  }
                >
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="#" className="links ps-4">
                      <MoreHorizIcon className="small" />
                      <p className="ps-3">Facility Encounters</p>
                    </a>
                  </li>
                </ul>
              </li>
            </li>
            <li>
              <div className="general ps-2">
                <h6>accreditations</h6>
              </div>
            </li>
            <li>
              <li>
                {/* eslint-disable-next-line */}
                <a
                  href="#"
                  className="linkflex"
                  onClick={() => {
                    setDashArr(false);
                    setBenOpen(false);
                    setSubOpen(false);
                    setEncOpen(false);
                    setFacOpen(!facOpen);
                    setUseOpen(false);
                  }}
                >
                  <div className="links">
                    <div className="box-for">
                      <ListAltIcon className="small" />
                    </div>
                    <p>Facilities</p>
                  </div>
                  <ArrowForwardIosIcon
                    className="smaller"
                    id={facOpen ? "active" : "activenot"}
                  />
                </a>
                <ul
                  className="display"
                  ref={midOpen}
                  style={
                    facOpen
                      ? {
                          height: midOpen.current.scrollHeight + "px",
                        }
                      : {
                          height: "0px",
                        }
                  }
                >
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="#" className="links ps-4">
                      <MoreHorizIcon className="small" />
                      <p className="ps-3">Approved</p>
                    </a>
                    {/* eslint-disable-next-line */}
                    <a href="#" className="links ps-4 pt-3 pb-3">
                      <MoreHorizIcon className="small" />
                      <p className="ps-3">Pending</p>
                    </a>
                  </li>
                </ul>
              </li>
            </li>
            <li>
              <li>
                <div className="general ps-2">
                  <h6>Settings</h6>
                </div>
              </li>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a
                href="#"
                className="linkflex"
                onClick={() => {
                  setDashArr(false);
                  setBenOpen(false);
                  setSubOpen(false);
                  setEncOpen(false);
                  setFacOpen(false);
                  setUseOpen(!useOpen);
                }}
              >
                <div className="links">
                  <div className="box-for">
                    <PersonIcon className="small" />
                  </div>
                  <p>User Settings</p>
                </div>
                <ArrowForwardIosIcon
                  className="smaller"
                  id={useOpen ? "active" : "activenot"}
                />
              </a>
              <ul
                className="display"
                ref={midOpen}
                style={
                  useOpen
                    ? {
                        height: midOpen.current.scrollHeight + "px",
                      }
                    : {
                        height: "0px",
                      }
                }
              >
                <li>
                  {/* eslint-disable-next-line */}
                  <a href="#" className="links ps-4">
                    <MoreHorizIcon className="small" />
                    <p className="ps-3">Profile</p>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#" className="linkflex">
                <div className="links">
                  <div className="box-for">
                    <PowerSettingsNewIcon className="small" />
                  </div>
                  <p className="ps-1">Log Out</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
