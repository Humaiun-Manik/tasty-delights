import React from "react";
import "./PrivateEvent.css";
import flower from "./../../../assets/images/logo/flower-decor-2.webp";
import flower2 from "./../../../assets/images/logo/flower-decor.webp";
import Flower from "../../../components/Flower";
import { Col, Form, Row } from "react-bootstrap";

const PrivateEvent = () => {
  return (
    <div className="container my-5">
      <Row xs={1} md={2} className="g-5">
        <Col md="8">
          <div className="text-center">
            <h2
              className="text-body-tertiary mb-0"
              style={{ fontSize: "38px", fontFamily: "'Allura', cursive" }}
            >
              Make a Reservation
            </h2>
            <h2 className="fw-bold">Private Dining & Events</h2>
            <Flower>{flower}</Flower>
            <p className="my-4">
              Eros ludus laboramus ne eam. Mea inani utamur rationibus eu, his ei assum volutpat. Integre
              dolorem mel an, mei nihil omittam et. Postea regione mentitum ei quo, debitis phaedrum conceptam
              vis at. Fugit choro scriptorem nam an, vel ex possit audire.
            </p>
            <h5>Reserved By Phone</h5>
            <h3 className="text-warning">+880 1777000033</h3>
          </div>
        </Col>
        <Col md="4">
          <div className="bg-black p-4">
            <div className="text-center text-white open-time">
              <h2 className="text-warning mb-0" style={{ fontSize: "38px", fontFamily: "'Allura', cursive" }}>
                Open Timing
              </h2>
              <div className="my-3"></div>
              <p className="text-warning">Monday – Friday</p>
              <p className="mb-0">7 am – 10 pm</p>
              <p>(Breakfast , Lunch, Dinner)</p>
              <p className="text-warning">Saturday – Sunday</p>
              <p className="mb-0">8 am – 11 pm</p>
              <p>(Breakfast , Lunch, Dinner)</p>
            </div>
          </div>
        </Col>
      </Row>
      <hr className="my-5 pb-5" />
      <div>
        <div className="text-center">
          <h2
            className="text-body-tertiary mb-0"
            style={{ fontSize: "38px", fontFamily: "'Allura', cursive" }}
          >
            Online Reservation
          </h2>
          <h2 className="fw-bold">No Need To Wait For Table</h2>
          <Flower>{flower2}</Flower>
        </div>
        <Form className="mt-5 pb-5">
          <Row xs={1} md={2} lg={3} className="g-5">
            <Col>
              <div className="border-bottom border-warning">
                <Form.Control className="border-0 p-1 fs-5" placeholder="mm/dd/yyyy" readOnly />
              </div>
            </Col>
            <Col>
              <div className="border-bottom border-warning">
                <Form.Control className="border-0 p-1 fs-5" placeholder="Select Time" />
              </div>
            </Col>
            <Col>
              <div className="border-bottom border-warning">
                <Form.Select className="border-0 p-1 fs-5" defaultValue="People">
                  <option>People</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </Form.Select>
              </div>
            </Col>
            <Col>
              <div className="border-bottom border-warning">
                <Form.Control className="border-0 p-1 fs-5" placeholder="Name" />
              </div>
            </Col>
            <Col>
              <div className="border-bottom border-warning">
                <Form.Control className="border-0 p-1 fs-5" placeholder="Phone" />
              </div>
            </Col>
            <Col>
              <div className="border-bottom border-warning">
                <Form.Control className="border-0 p-1 fs-5" placeholder="Email" />
              </div>
            </Col>
          </Row>
          <button className="submit-btn mt-5 mb-2" type="submit">
            Submit Now
          </button>
          <p>POWERED BY OPENTABLE</p>
        </Form>
      </div>
    </div>
  );
};

export default PrivateEvent;
