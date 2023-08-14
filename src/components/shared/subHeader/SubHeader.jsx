import React from "react";
import { Link } from "react-router-dom";
import "./SubHeader.css";
import PropTypes from "prop-types";
import { RiCupFill } from "react-icons/ri";

const SubHeader = ({ text }) => {
  return (
    <div className="sub-menu">
      <div className="h-100 d-flex align-items-center justify-content-center flex-column">
        <h1 className="text-light">{text}</h1>
        <div className="fs-5">
          <Link to={"/"} className="text-light text-decoration-none">
            Home
          </Link>
          <RiCupFill className="mx-3 text-light fs-4" />
          <span className="text-warning">{text}</span>
        </div>
      </div>
    </div>
  );
};

SubHeader.propTypes = {
  text: PropTypes.string.isRequired,
};
export default SubHeader;
