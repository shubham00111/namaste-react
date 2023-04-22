import React from "react";

const Shimmer = () => {
  return Array(20)
    .fill("")
    .map((el, index) => <div key={index} className="shimmer-card"></div>);
};

export default Shimmer;
