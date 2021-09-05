import React from "react";
import { Bar } from "react-chartjs-2";
import AdjustIcon from "@material-ui/icons/Adjust";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import "chartjs-adapter-date-fns";
import "chartjs-plugin-zoom";

const DashShowcase = () => {
  return (
    <div className="container">
      <div className="dash-showcase">
        <div>
          <div className="dash-content">
            <div className="left-side">
              <div className="top-boxa">
                <div className="one">
                  <div className="top-nav">
                    <h6>Pricipals</h6>
                    <i className="fas fa-bars"></i>
                  </div>
                  <div className="top-body">
                    <div className="numbers">
                      <h4>23,544</h4>
                      <p>Total Enrolled</p>
                    </div>
                    <div className="graph-pic">
                      <img src="/images/hbf790cbl.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="1">
                  <div className="top-nav">
                    {/* eslint-disable-next-line */}
                    <h6></h6>
                    <i className="fas fa-bars"></i>
                  </div>
                  <div className="top-body">
                    <div className="numbers2">
                      <h4>23,544</h4>
                      <p>Selected Facility</p>
                    </div>
                    <div className="graph-pic">
                      <img src="/images/wpuhxq9h.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="top-boxb">
                <div className="top-side-of">
                  <h6>
                    <AdjustIcon className="first" />
                    Selected Facility
                  </h6>
                  <h6>
                    <AdjustIcon className="last" />
                    Total Enrolled
                  </h6>
                </div>
                <div className="progressbar">
                  <div className="progress-status"></div>
                </div>
                <div className="under">
                  <h6>
                    <span>
                      <TrendingUpIcon />
                      15%
                    </span>
                    Up from Last Week
                  </h6>
                  <button>Download Report</button>
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="write-ups">
                <h3>Overview</h3>
              </div>
              <Bar
                data={{
                  labels: [
                    "Red",
                    "Blue",
                    "Yellow",
                    "Green",
                    "Purple",
                    "Orange",
                  ],
                  datasets: [
                    {
                      type: "bar",
                      label: "Enrollment",
                      data: [12, 23, 43, 34, 53, 12, 54, 12],
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                      ],
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                      ],
                      borderWidth: 1,
                    },
                    {
                      type: "line",
                      label: "Subscription",
                      data: [12, 23, 43, 34, 53, 12, 54, 12],
                      borderWidth: 1,
                      tension: 0.4,
                      fill: true,
                      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                      borderColor: ["rgba(255, 99, 132, 1)"],
                      //  eslint-disable-next-line
                      borderWidth: 1,
                    },
                    {
                      type: "line",
                      label: "Encounters",
                      data: [9, 13, 21, 34, 63, 12, 67, 13],
                      backgroundColor: ["limegreen"],
                      borderColor: ["green"],
                      borderWidth: 1,
                      tension: 0.4,
                      fill: false,
                    },
                  ],
                }}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashShowcase;
