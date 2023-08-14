import React from "react";
import "./Footer.css";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-dark text-white py-5">
        <div className="container">
          <Row xs={1} md={3}>
            <Col>
              <div className="d-flex align-items-center">
                <p className="mb-0 me-3">FOLLOW US :</p>
                <div>
                  <FaFacebookF />
                  <FaTwitter className="fs-5 mx-4" />
                  <FaGooglePlusG className="fs-4" />
                </div>
              </div>
            </Col>
            <Col>
              <h3 className="border-bottom text-uppercase border-3 logo ">Tasty Delights</h3>
            </Col>
            <Col>
              <InputGroup>
                <Form.Control className="fs-5" placeholder="Your Email Address" />
                <InputGroup.Text id="basic-addon2">
                  <BsFillSendFill />
                </InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
          <hr />
          <Row xs={1} md={3} className="my-5 pt-5">
            <Col className=" border-end border-warning-subtle">
              <div className="address-info">
                <h3 className="mb-4">Address</h3>
                <p className="fs-5 text-white-50">Eight Avenue 385, Dhaka</p>
              </div>
            </Col>
            <Col className=" border-end border-warning-subtle">
              <div className="open-info">
                <h3 className="" style={{ fontSize: "36px", fontFamily: "'Allura', cursive" }}>
                  Open Timing
                </h3>
                <div></div>
                <p>Monday - Friday</p>
                <span>7 am - 10 pm</span>
                <span>(Breakfast , Lunch, Dinner)</span>
              </div>
            </Col>
            <Col>
              <div className="contact-info">
                <h3>Contact Us</h3>
                <p>example@example.com</p>
                <span className="text-white-50">+880 1777000002</span>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="bg-black text-center py-4">
        <p className="m-0 text-secondary">&copy; {currentYear} TASTY DELIGHTS. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
