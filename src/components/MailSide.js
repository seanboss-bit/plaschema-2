import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import SendIcon from "@material-ui/icons/Send";
import DraftsIcon from "@material-ui/icons/Drafts";
import StarIcon from "@material-ui/icons/Star";
import DeleteIcon from "@material-ui/icons/Delete";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import { useState } from "react";

const MailSide = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="mail-sidebar" id={show ? "active" : ""}>
      <div className="mailbars" onClick={() => setShow(!show)}>
        <div className="support">
          <div className="mailspan"></div>
          <div className="mailspan"></div>
        </div>
      </div>
      <div className="compose-button">
        <div className="container">
          <button>Compose</button>
        </div>
      </div>
      <div className="mailside_header">
        <div className="container">
          <p>Folders</p>
        </div>
      </div>
      <div className="inbox_rest">
        <div className="container">
          <div className="back_actived activated">
            <div className="hulu_left">
              <EmailIcon />
              <p>Emaill</p>
            </div>
            <div className="hulu_right">14</div>
          </div>
          <div className="back_active activated">
            <div className="hulu_left">
              <SendIcon />
              <p>Sent</p>
            </div>
          </div>
          <div className="back_active activated">
            <div className="hulu_left">
              <DraftsIcon />
              <p>Draft</p>
            </div>
          </div>
          <div className="back_active activated">
            <div className="hulu_left">
              <StarIcon />
              <p>Starred</p>
            </div>
            <div className="hulu_right bg-warning">4</div>
          </div>
          <div className="back_active activated">
            <div className="hulu_left">
              <DeleteIcon />
              <p>Trash</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mailside_header">
        <div className="container">
          <p>labels</p>
        </div>
      </div>
      <div className="inbox_rest">
        <div className="container">
          <div className="back_active activated">
            <div className="hulu_left">
              <DataUsageIcon />
              <p>important</p>
            </div>
          </div>
          <div className="back_active activated">
            <div className="hulu_left">
              <DataUsageIcon className="last" />
              <p>social</p>
            </div>
          </div>
          <div className="back_active activated">
            <div className="hulu_left">
              <DataUsageIcon className="last-2" />
              <p>promotional</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailSide;
