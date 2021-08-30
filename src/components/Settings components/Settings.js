import React from "react";

const Settings = () => {
  return (
    <div>
      <div className="settings-header">
        <h4>RTL or LTR</h4>
        <div className="rtl-options">
          <p>RTL</p>
          <input type="checkbox" />
        </div>
      </div>
      <div className="settings-body">
        <h5>Layout Options</h5>
        <div className="rtl-options">
          <p>Fixed Layout</p>
          <input type="checkbox" />
        </div>
        <div className="rtl-options">
          <p>Boxed Layout</p>
          <input type="checkbox" />
        </div>
        <div className="rtl-options">
          <p>Toggle Sidebar</p>
          <input type="checkbox" />
        </div>
        <div className="rtl-options">
          <p>Toggle Right SideBar</p>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export default Settings;
