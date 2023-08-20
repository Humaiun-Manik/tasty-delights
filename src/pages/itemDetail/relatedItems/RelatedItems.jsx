import React from "react";
import PropTypes from "prop-types";
import { Card, Col, Row } from "react-bootstrap";
import { Rating } from "@smastrom/react-rating";

const RelatedItems = ({ items }) => {
  return (
    <div className="container my-5 pb-5">
      <h4>Related Products</h4>
      <div className="bg-warning mb-5" style={{ width: "100px", height: "2px" }}></div>
      <Row xs={1} md={4} className="g-4">
        {items.map((item) => (
          <Col key={item.id}>
            <Card className="h-100 shadow-lg">
              <Card.Img className="w-100 h-75 mx-auto p-3" variant="top" src={item.img} />
              <Card.Body className="bg-warning mt-4 text-center text-white">
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  <div className="d-flex align-items-center justify-content-between mt-4">
                    <p className="m-0 fs-5">$ {item.price}</p>
                    <Rating style={{ maxWidth: 100 }} value={item.rating} readOnly />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

RelatedItems.propTypes = {
  items: PropTypes.array,
};

export default RelatedItems;
