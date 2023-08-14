import React from "react";
import "./Flower.css";
import PropTypes from "prop-types";

const Flower = ({ children }) => {
  return (
    <div className="flower-container">
      <div></div>
      <img src={children} alt="" />
      <div></div>
    </div>
  );
};

Flower.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Flower;
