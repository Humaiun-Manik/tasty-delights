import "./ButtonWarning.css";

const ButtonWarning = ({ children }) => {
  return (
    <div className="btn-container">
      <button className="w-100 py-2">{children}</button>
    </div>
  );
};

export default ButtonWarning;
