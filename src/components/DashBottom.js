import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import MoodIcon from "@material-ui/icons/Mood";
import CloudIcon from "@material-ui/icons/Cloud";
const DashBottom = () => {
  return (
    <div className="container">
      <div className="last-last">
        <div className="last-first">
          <div className="ui">
            <PersonIcon />
          </div>
          <div className="continue">
            <h4>New Enrollments</h4>
            <h6>4050</h6>
            <div className="last-prgress">
              <div className="last-status"></div>
            </div>
            <p>45% Increase in 90Days</p>
          </div>
        </div>
        <div className="last-second">
          <div className="ui">
            <MoodIcon />
          </div>
          <div className="continue">
            <h4>Total Encounters</h4>
            <h6>4050</h6>
            <div className="last-prgress">
              <div className="last-status"></div>
            </div>
            <p>45% Increase in 90Days</p>
          </div>
        </div>
        <div className="last-third">
          <div className="ui">
            <CloudIcon />
          </div>
          <div className="continue">
            <h4>Facilities</h4>
            <h6>4050</h6>
            <div className="last-prgress">
              <div className="last-status"></div>
            </div>
            <p>45% Increase in 90Days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBottom;
