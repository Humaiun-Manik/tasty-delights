import React from "react";
import "./ActiveLink.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
      {children}
    </NavLink>
  );
};

ActiveLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string,
};

export default ActiveLink;
