import React from "react";
import './loader.css';
const loader = () => {
  return (
    <div className="loading">
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <h3>Loading...</h3>
      </div>
    </div>
  );
};

export default loader;
