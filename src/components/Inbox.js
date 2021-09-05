import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ReplyIcon from "@material-ui/icons/Reply";
import ForwardIcon from "@material-ui/icons/Forward";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FlagIcon from "@material-ui/icons/Flag";
import FolderIcon from "@material-ui/icons/Folder";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import StarIcon from "@material-ui/icons/Star";
import { useState, useRef } from "react";
const Inbox = () => {
  const [starred, setStarred] = useState(false);
  const [modal, setModal] = useState(false);
  const mode = useRef();
  return (
    <div className="inbox">
      <div className="container">
        <div className="inbox-mainbody">
          <div className="mainbody-header">
            <div className="container">
              <div className="mainbody-header-top">
                <h5>Mailbox</h5>
                <div className="mail_body_search-bar">
                  <button className="search__submit">
                    <SearchIcon />
                  </button>
                  <input
                    type="text"
                    placeholder="Search"
                    className="search__input"
                  />
                </div>
              </div>
              <p>Here Are The List of Mail</p>
            </div>
          </div>
          <div className="mainbody-body">
            <div className="controls">
              <div className="container">
                <div className="control-content">
                  <div className="icons-cont">
                    <input type="checkbox" />
                  </div>
                  <div className="icons-contM">
                    <div className="icons-cont">
                      <DeleteIcon />
                    </div>
                    <div className="icons-cont">
                      <ReplyIcon />
                    </div>
                    <div className="icons-cont">
                      <ForwardIcon />
                    </div>
                    <div className="icons-cont">
                      <FlagIcon />
                      <ArrowDropDownIcon />
                    </div>
                    <div className="icons-cont">
                      <FolderIcon />
                      <ArrowDropDownIcon />
                    </div>
                  </div>
                  <div className="icons-contM2">
                    <div className="icons-cont">
                      <AutorenewIcon />
                    </div>
                  </div>
                  <div className="cont-end">
                    <p>1-50/200</p>
                    <div className="icons-cont">
                      <NavigateBeforeIcon />
                    </div>
                    <div className="icons-cont">
                      <NavigateNextIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="inboxes">
              <div className="container">
                <table className="table">
                  <tbody>
                    <tr onClick={() => setModal(!modal)}>
                      <td className="checking" onClick={() => setModal(false)}>
                        <input
                          type="checkbox"
                          onClick={() => setModal(false)}
                        />
                      </td>
                      <td>
                        {starred ? (
                          <StarIcon
                            className="text-yellow"
                            onClick={() => setStarred(!starred)}
                          />
                        ) : (
                          <StarBorderIcon
                            className="text-yellow"
                            onClick={() => setStarred(!starred)}
                          />
                        )}
                      </td>
                      <td className="w-80">
                        <div className="email-img">
                          <img src="/images/avatar/2.jpg" alt="#" />
                        </div>
                      </td>
                      <td className="mail-name">Jacob</td>
                      <td className="subject">
                        <b className="subject-titile">Lorem - </b>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </td>
                      <td className="attach">
                        <AttachFileIcon />
                      </td>
                      <td className="time">
                        <p>3 mins ago</p>
                      </td>
                    </tr>
                    <div
                      className="modal-formail"
                      ref={mode}
                      style={
                        modal
                          ? {
                              height: mode.current.scrollHeight + "px",
                            }
                          : {
                              height: "0px",
                            }
                      }
                    >
                      <div className="container">
                        <div className="from-who">
                          <p>From: Jacob</p>
                          <p>Tilte: Lorem</p>
                        </div>
                        <div className="from-body">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugit unde reiciendis mollitia! Laudantium
                            officia accusamus soluta architecto? Neque dolores,
                            fugit optio, explicabo, dolor deleniti
                            exercitationem laborum accusantium est odit unde.
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Sint, nam odio! Impedit, sint aliquid?
                            Nesciunt, laborum blanditiis? Corporis accusamus
                            eligendi vel sit, repudiandae voluptatem cupiditate
                            molestiae optio quis tempora! Quo! Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Non deserunt,
                            eum illo eaque, a in ipsum laborum ea dolorum
                            repellat consectetur ab culpa assumenda alias minus
                            possimus totam recusandae voluptatibus.
                          </p>
                        </div>
                      </div>
                    </div>

                    <tr>
                      <td className="checking">
                        <input type="checkbox" />
                      </td>
                      <td>
                        <StarIcon className="text-yellow" />
                      </td>
                      <td className="w-80">
                        <div className="email-img">
                          <img src="/images/avatar/2.jpg" alt="#" />
                        </div>
                      </td>
                      <td className="mail-name">Mason</td>
                      <td className="subject">
                        <b className="subject-titile">Lorem - </b>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </td>
                      <td className="attach">
                        <AttachFileIcon />
                      </td>
                      <td className="time">
                        <p>14 mins ago</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="checking">
                        <input type="checkbox" />
                      </td>
                      <td>
                        <StarIcon className="text-yellow" />
                      </td>
                      <td className="w-80">
                        <div className="email-img">
                          <img src="/images/avatar/2.jpg" alt="#" />
                        </div>
                      </td>
                      <td className="mail-name">William</td>
                      <td className="subject">
                        <b className="subject-titile">Lorem - </b>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </td>
                      <td className="attach">
                        <AttachFileIcon />
                      </td>
                      <td className="time">
                        <p>15 hours ago</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="checking">
                        <input type="checkbox" />
                      </td>
                      <td>
                        <StarIcon className="text-yellow" />
                      </td>
                      <td className="w-80">
                        <div className="email-img">
                          <img src="/images/avatar/2.jpg" alt="#" />
                        </div>
                      </td>
                      <td className="mail-name">Jayden</td>
                      <td className="subject">
                        <b className="subject-titile">Lorem - </b>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </td>
                      <td className="attach">
                        <AttachFileIcon />
                      </td>
                      <td className="time">
                        <p>25 hours ago</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="checking">
                        <input type="checkbox" />
                      </td>
                      <td>
                        <StarIcon className="text-yellow" />
                      </td>
                      <td className="w-80">
                        <div className="email-img">
                          <img src="/images/avatar/2.jpg" alt="#" />
                        </div>
                      </td>
                      <td className="mail-name">Noah</td>
                      <td className="subject">
                        <b className="subject-titile">Lorem - </b>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </td>
                      <td className="attach">
                        <AttachFileIcon />
                      </td>
                      <td className="time">
                        <p>3 mins ago</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="checking">
                        <input type="checkbox" />
                      </td>
                      <td>
                        <StarIcon className="text-yellow" />
                      </td>
                      <td className="w-80">
                        <div className="email-img">
                          <img src="/images/avatar/2.jpg" alt="#" />
                        </div>
                      </td>
                      <td className="mail-name">Ethan</td>
                      <td className="subject">
                        <b className="subject-titile">Lorem - </b>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </td>
                      <td className="attach">
                        <AttachFileIcon />
                      </td>
                      <td className="time">
                        <p>14 mins ago</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="checking">
                        <input type="checkbox" />
                      </td>
                      <td>
                        <StarIcon className="text-yellow" />
                      </td>
                      <td className="w-80">
                        <div className="email-img">
                          <img src="/images/avatar/2.jpg" alt="#" />
                        </div>
                      </td>
                      <td className="mail-name">Alexander</td>
                      <td className="subject">
                        <b className="subject-titile">Lorem - </b>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </td>
                      <td className="attach">
                        <AttachFileIcon />
                      </td>
                      <td className="time">
                        <p>15 hours ago</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="checking">
                        <input type="checkbox" />
                      </td>
                      <td>
                        <StarIcon className="text-yellow" />
                      </td>
                      <td className="w-80">
                        <div className="email-img">
                          <img src="/images/avatar/2.jpg" alt="#" />
                        </div>
                      </td>
                      <td className="mail-name">Aiden</td>
                      <td className="subject">
                        <b className="subject-titile">Lorem - </b>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </td>
                      <td className="attach">
                        <AttachFileIcon />
                      </td>
                      <td className="time">
                        <p>25 hours ago</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="checking">
                        <input type="checkbox" />
                      </td>
                      <td>
                        <StarIcon className="text-yellow" />
                      </td>
                      <td className="w-80">
                        <div className="email-img">
                          <img src="/images/avatar/2.jpg" alt="#" />
                        </div>
                      </td>
                      <td className="mail-name">Daniel</td>
                      <td className="subject">
                        <b className="subject-titile">Lorem - </b>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </td>
                      <td className="attach">
                        <AttachFileIcon />
                      </td>
                      <td className="time">
                        <p>3 mins ago</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="checking">
                        <input type="checkbox" />
                      </td>
                      <td>
                        <StarIcon className="text-yellow" />
                      </td>
                      <td className="w-80">
                        <div className="email-img">
                          <img src="/images/avatar/2.jpg" alt="#" />
                        </div>
                      </td>
                      <td className="mail-name">Anthony</td>
                      <td className="subject">
                        <b className="subject-titile">Lorem - </b>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </td>
                      <td className="attach">
                        <AttachFileIcon />
                      </td>
                      <td className="time">
                        <p>14 mins ago</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="checking">
                        <input type="checkbox" />
                      </td>
                      <td>
                        <StarIcon className="text-yellow" />
                      </td>
                      <td className="w-80">
                        <div className="email-img">
                          <img src="/images/avatar/2.jpg" alt="#" />
                        </div>
                      </td>
                      <td className="mail-name">Mattew</td>
                      <td className="subject">
                        <b className="subject-titile">Lorem - </b>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </td>
                      <td className="attach">
                        <AttachFileIcon />
                      </td>
                      <td className="time">
                        <p>15 hours ago</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="checking">
                        <input type="checkbox" />
                      </td>
                      <td>
                        <StarIcon className="text-yellow" />
                      </td>
                      <td className="w-80">
                        <div className="email-img">
                          <img src="/images/avatar/2.jpg" alt="#" />
                        </div>
                      </td>
                      <td className="mail-name">Elijah</td>
                      <td className="subject">
                        <b className="subject-titile">Lorem - </b>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </td>
                      <td className="attach">
                        <AttachFileIcon />
                      </td>
                      <td className="time">
                        <p>25 hours ago</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="checking">
                        <input type="checkbox" />
                      </td>
                      <td>
                        <StarIcon className="text-yellow" />
                      </td>
                      <td className="w-80">
                        <div className="email-img">
                          <img src="/images/avatar/2.jpg" alt="#" />
                        </div>
                      </td>
                      <td className="mail-name">Liam</td>
                      <td className="subject">
                        <b className="subject-titile">Lorem - </b>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </td>
                      <td className="attach">
                        <AttachFileIcon />
                      </td>
                      <td className="time">
                        <p>3 mins ago</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="checking">
                        <input type="checkbox" />
                      </td>
                      <td>
                        <StarIcon className="text-yellow" />
                      </td>
                      <td className="w-80">
                        <div className="email-img">
                          <img src="/images/avatar/2.jpg" alt="#" />
                        </div>
                      </td>
                      <td className="mail-name">andrew</td>
                      <td className="subject">
                        <b className="subject-titile">Lorem - </b>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </td>
                      <td className="attach">
                        <AttachFileIcon />
                      </td>
                      <td className="time">
                        <p>14 mins ago</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="checking">
                        <input type="checkbox" />
                      </td>
                      <td>
                        <StarIcon className="text-yellow" />
                      </td>
                      <td className="w-80">
                        <div className="email-img">
                          <img src="/images/avatar/2.jpg" alt="#" />
                        </div>
                      </td>
                      <td className="mail-name">james</td>
                      <td className="subject">
                        <b className="subject-titile">Lorem - </b>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </td>
                      <td className="attach">
                        <AttachFileIcon />
                      </td>
                      <td className="time">
                        <p>15 hours ago</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="checking">
                        <input type="checkbox" />
                      </td>
                      <td>
                        <StarIcon className="text-yellow" />
                      </td>
                      <td className="w-80">
                        <div className="email-img">
                          <img src="/images/avatar/2.jpg" alt="#" />
                        </div>
                      </td>
                      <td className="mail-name">benjamin</td>
                      <td className="subject">
                        <b className="subject-titile">Lorem - </b>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </td>
                      <td className="attach">
                        <AttachFileIcon />
                      </td>
                      <td className="time">
                        <p>25 hours ago</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
