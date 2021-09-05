import React from "react";
import { Bar, Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
const DashGraph = () => {
 
  return (
    <div className="container">
      <div className="twoGraph-side">
        <div className="two-graph-content">
          <div className="right-side">
            <div className="write-ups">
              <h5>Enrollment Overview</h5>
            </div>
            <Line
              data={{
                // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                  {
                    label: "Enrollments",
                    data: [
                      { x: "2021-09", y: 53 },
                      { x: "2021-09-02", y: 3 },
                      { x: "2021-09-03", y: 24 },
                      { x: "2021-09-04", y: 15 },
                      { x: "2021-09-05", y: 6 },
                      { x: "2021-09-06", y: 23 },
                      { x: "2021-09-07", y: 23 },
                      { x: "2021-09-08", y: 23 },
                      { x: "2021-09-09", y: 43 },
                      { x: "2021-09-10", y: 53 },
                      { x: "2021-09-11", y: 22 },

                      { x: "2021-10", y: 2 },
                      { x: "2021-10-02", y: 34 },
                      { x: "2021-10-03", y: 12 },
                      { x: "2021-10-04", y: 14 },
                      { x: "2021-10-05", y: 5 },
                      { x: "2021-10-06", y: 39 },
                      { x: "2021-10-07", y: 40 },
                      { x: "2021-10-08", y: 12 },
                      { x: "2021-10-09", y: 45 },
                      { x: "2021-10-10", y: 54 },
                      { x: "2021-10-11", y: 23 },

                      { x: "2021-11", y: 32 },
                      { x: "2021-11-02", y: 12 },
                      { x: "2021-11-03", y: 23 },
                      { x: "2021-11-04", y: 23 },
                      { x: "2021-11-05", y: 32 },
                      { x: "2021-11-06", y: 34 },
                      { x: "2021-11-07", y: 45 },
                      { x: "2021-11-08", y: 56 },
                      { x: "2021-11-09", y: 26 },
                      { x: "2021-11-10", y: 32 },
                      { x: "2021-11-11", y: 45 },
                    ],
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
                    // tension: 0.4,
                    fill: true,
                  },
                ],
              }}
              options={{
                scales: {
                  x: {
                    parsing: false,
                    type: "time",
                    time: {
                      unit: "month",
                    },
                  },
                  yaxes: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
          <div className="right-side">
            <div className="write-ups">
              <h5>Formal Sector Overview</h5>
            </div>
            <Bar
              data={{
                labels: [
                  "ASHM",
                  "FSTC",
                  "IFX2",
                  "MKFM",
                  "PREH",
                  "PROH",
                  "RGNX",
                  "SLST",
                  "UTDC",
                  "UTDH",
                  "WLHN",
                ],
                datasets: [
                  {
                    type: "bar",
                    label: "Pricipals",
                    data: [12, 19, 53, 44, 42, 12, 13, 45, 67, 45, 23],
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
                    type: "bar",
                    label: "Dependents",
                    data: [19, 39, 13, 35, 20, 24, 34, 23, 12, 34, 47],
                    borderWidth: 1,
                    tension: 0.4,
                    fill: true,
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
                    //  eslint-disable-next-line
                    borderWidth: 1,
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
  );
};

export default DashGraph;
