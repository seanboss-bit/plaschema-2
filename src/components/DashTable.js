import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import NoteAddIcon from "@material-ui/icons/NoteAdd";

const DashTable = () => {
  return (
    <div className="container">
      <div className="Dashtable">
        <div className="dash-table-top">
          <div className="container">
            <h4>HMO Stats</h4>
            <p>11 Health Maitance Organisations Approved</p>
          </div>
        </div>
        <div className="table-content">
          <div className="container">
            <table className="table no-border">
              <thead>
                <tr className="text-left">
                  <th className="hmo">HMO</th>
                  <th className="spacing"></th>
                  <th className="contact">Primary Contact</th>
                  <th className="contact">Enrolment Progress</th>
                  <th class="text-right contact">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="profile-pic">
                      <img src="/images/avatar/1.jpg" alt="#" />
                    </div>
                  </td>
                  <td>
                    {/* eslint-disable-next-line */}
                    <a href="#">Ahmed Something</a>
                    <p>4 Bauchi Road, Jos</p>
                  </td>
                  <td>
                    <h6>F.Something</h6>
                    <p>08045374537</p>
                  </td>
                  <td>
                    <div className="table-progress-head">
                      <p>91%</p>
                      <p>Progress</p>
                    </div>
                    <div className="table-progressbar">
                      <div className="progress-move"></div>
                    </div>
                  </td>
                  <td className="act">
                    <div className="box-delete">
                      <DeleteIcon />
                    </div>
                    <div className="box-delete">
                      <NoteAddIcon />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="profile-pic">
                      <img src="/images/avatar/1.jpg" alt="#" />
                    </div>
                  </td>
                  <td>
                    {/* eslint-disable-next-line */}
                    <a href="#">Ahmed Something</a>
                    <p>4 Bauchi Road, Jos</p>
                  </td>
                  <td>
                    <h6>F.Something</h6>
                    <p>08045374537</p>
                  </td>
                  <td>
                    <div className="table-progress-head">
                      <p>83%</p>
                      <p>Progress</p>
                    </div>
                    <div className="table-progressbar">
                      <div className="progress-move2"></div>
                    </div>
                  </td>
                  <td className="act">
                    <div className="box-delete">
                      <DeleteIcon />
                    </div>
                    <div className="box-delete">
                      <NoteAddIcon />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="profile-pic">
                      <img src="/images/avatar/1.jpg" alt="#" />
                    </div>
                  </td>
                  <td>
                    {/* eslint-disable-next-line */}
                    <a href="#">Ahmed Something</a>
                    <p>4 Bauchi Road, Jos</p>
                  </td>
                  <td>
                    <h6>F.Something</h6>
                    <p>08045374537</p>
                  </td>
                  <td>
                    <div className="table-progress-head">
                      <p>47%</p>
                      <p>Progress</p>
                    </div>
                    <div className="table-progressbar">
                      <div className="progress-move3"></div>
                    </div>
                  </td>
                  <td className="act">
                    <div className="box-delete">
                      <DeleteIcon />
                    </div>
                    <div className="box-delete">
                      <NoteAddIcon />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="profile-pic">
                      <img src="/images/avatar/1.jpg" alt="#" />
                    </div>
                  </td>
                  <td>
                    {/* eslint-disable-next-line */}
                    <a href="#">Ahmed Something</a>
                    <p>4 Bauchi Road, Jos</p>
                  </td>
                  <td>
                    <h6>F.Something</h6>
                    <p>08045374537</p>
                  </td>
                  <td>
                    <div className="table-progress-head">
                      <p>91%</p>
                      <p>Progress</p>
                    </div>
                    <div className="table-progressbar">
                      <div className="progress-move"></div>
                    </div>
                  </td>
                  <td className="act">
                    <div className="box-delete">
                      <DeleteIcon />
                    </div>
                    <div className="box-delete">
                      <NoteAddIcon />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashTable;
