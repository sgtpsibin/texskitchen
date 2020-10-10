import React from "react";

const Topbar = props => {
  return (
    <>
      <div className="top-bar">
        DELIVERING ACROSS MOST OF MELBOURNE:{" "}
        <span className="phone">&nbsp;+61 419 129 079</span>
      </div>
      <style jsx>{`
        .phone {
          color: red;
          font-weight: bold;
        }
        .top-bar {
          color: #856404;
          background-color: #fff3cd;
          padding: 5px;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Topbar;
