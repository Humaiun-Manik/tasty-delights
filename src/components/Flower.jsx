import "./Flower.css";

const Flower = ({ children }) => {
  return (
    <div className="flower-container">
      <div></div>
      <img src={children} alt="" />
      <div></div>
    </div>
  );
};

export default Flower;
