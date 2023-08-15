import React, { useState } from "react";
import "./OnlineForm.css";
import { Col, FloatingLabel, Form, InputGroup, Row } from "react-bootstrap";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsBookmark } from "react-icons/bs";
import { BiMessageAltDetail } from "react-icons/bi";

const OnlineForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="mb-5 pb-5">
      <div className="feedback-banner mb-5">
        <div className="h-100 d-flex flex-column align-items-center justify-content-center">
          <h1>Question And Support</h1>
          <h2 className="text-warning mb-0" style={{ fontSize: "54px", fontFamily: "'Allura', cursive" }}>
            Online Form
          </h2>
        </div>
      </div>
      <div className="container py-5">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">
                  <FaRegUser />
                </InputGroup.Text>
                <Form.Control
                  className="fs-5"
                  type="text"
                  placeholder="Your Name"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">
                  <HiOutlineMail />
                </InputGroup.Text>
                <Form.Control
                  className="fs-5"
                  type="text"
                  placeholder="Email Address"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">Please enter your email.</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Form.Group className="mb-5 mt-5" controlId="validationCustomUsername">
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">
                <BsBookmark />
              </InputGroup.Text>
              <Form.Control
                className="fs-5"
                type="text"
                placeholder="Subject"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">Please write subject.</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="validationCustomUsername">
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">
                <BiMessageAltDetail />
              </InputGroup.Text>
              <FloatingLabel className="fs-5" controlId="floatingTextarea2" label="Message">
                <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: "200px" }} />
              </FloatingLabel>
            </InputGroup>
          </Form.Group>
          <div className="text-center mt-5">
            <button className="submit-btn" type="submit">
              Submit Now
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default OnlineForm;
