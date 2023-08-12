import "./Button.css";

const Button = ({ children }) => {
  return (
    <div className="btn-container">
      <button className="w-100">{children}</button>
    </div>
  );
};

export default Button;
