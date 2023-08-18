import React from "react";
import "./Items.css";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const Items = ({ time, items }) => {
  return (
    <div className="container mb-5 pb-5">
      <h2
        className="text-center text-warning text-decoration-underline"
        style={{ fontSize: "44px", fontFamily: "'Allura', cursive" }}
      >
        {time}
      </h2>
      {items.map((item) => (
        <Row key={item.id} className="g-5 my-4 item">
          <Col sm="12" md="2">
            <div>
              <Link to={`/item/${item.id}`}>
                <img className="w-100 food-img" src={item.img} alt="" />
              </Link>
            </div>
          </Col>
          <Col sm="12" md="10">
            <div className="item-info h-100 d-flex align-items-center">
              <div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Link className="link-dark link-underline link-underline-opacity-0" to={`/item/${item.id}`}>
                    <h5>{item.name}</h5>
                  </Link>
                  <div className="empty-div mx-3"></div>
                  <h5>$ {item.price}</h5>
                </div>
                <p className="text-secondary">{item.description.slice(0, 250) + "..."}</p>
                <Rating style={{ maxWidth: 130 }} value={item.rating} readOnly />
              </div>
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
};

Items.propTypes = {
  time: PropTypes.string,
  items: PropTypes.array,
};

export default Items;
