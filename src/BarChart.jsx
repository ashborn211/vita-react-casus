import React from "react";

const BarChart = () => {
  return (
    <>
      <div className="barcontainer">
        <div className="barcontainerheader">Bar Graph</div>
        <div className="bar" style="height:12%">
          bar
          <div className="barlabel">label</div>
        </div>
        <div className="bar" style="height: 16%">
          bar
          <div className="barlabel">label</div>
        </div>
        <div className="bar" style="height: 22%">
          bar
          <div className="barlabel">label</div>
        </div>
        <div className="bar" style="height:30%">
          bar
          <div className="barlabel">label </div>
        </div>
        <div className="bar" style="height:45%">
          bar
          <div className="barlabel">label</div>
        </div>
        <div className="bar" style="height:80%">
          bar
          <div className="barlabel">label</div>
        </div>
      </div>
    </>
  );
};

export default BarChart;
