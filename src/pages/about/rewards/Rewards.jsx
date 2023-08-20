import React from "react";
import "./Rewards.css";
import Flower from "../../../components/Flower";
import flower from "./../../../assets/images/logo/flower-decor.webp";
import { Col, Row } from "react-bootstrap";
import img1 from "./../../../assets/images/about/client-1.webp";
import img2 from "./../../../assets/images/about/client-2.webp";
import img3 from "./../../../assets/images/about/client-3.webp";
import img4 from "./../../../assets/images/about/client-4.webp";

const Rewards = () => {
  return (
    <div className="pb-5">
      <div className="container my-5 py-5">
        <h1 className="text-center">Rewards We Received</h1>
        <Flower>{flower}</Flower>
        <Row xs={1} md={2} lg={4} className="mt-5 client-reward g-4">
          <Col>
            <div>
              <img src={img1} alt="" />
            </div>
          </Col>
          <Col>
            <div>
              <img src={img2} alt="" />
            </div>
          </Col>
          <Col>
            <div>
              <img src={img3} alt="" />
            </div>
          </Col>
          <Col>
            <div>
              <img src={img4} alt="" />
            </div>
          </Col>
        </Row>
      </div>
      <div className="success-story mb-5">
        <div className="h-100 d-flex flex-column align-items-center justify-content-center">
          <h1 className="text-light">Hard Work Brings Us Here!!</h1>
          <h2 className="fw-semibold" style={{ fontFamily: "'Allura', cursive" }}>
            Our Success Story
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
