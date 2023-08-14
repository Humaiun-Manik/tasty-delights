import "./SubHeader.css";
import PropTypes from "prop-types";

const SubHeader = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

SubHeader.propTypes = {
  text: PropTypes.string.isRequired,
};
export default SubHeader;
