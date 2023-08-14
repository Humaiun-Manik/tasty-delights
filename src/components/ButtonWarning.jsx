import React from "react";
import "./ButtonWarning.css";
import PropTypes from "prop-types";

const ButtonWarning = ({ children }) => {
  return (
    <div className="btn-container">
      <button className="w-100 py-2">{children}</button>
    </div>
  );
};

ButtonWarning.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ButtonWarning;
