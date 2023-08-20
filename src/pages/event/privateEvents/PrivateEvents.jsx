import React from "react";
import "./PrivateEvents.css";
import Flower from "../../../components/Flower";
import flower from "./../../../assets/images/logo/flower-decor-2.webp";
import { Card, Col, Row } from "react-bootstrap";
import img1 from "./../../../assets/images/events/img2.jpg";
import img2 from "./../../../assets/images/events/img3.jpg";
import img3 from "./../../../assets/images/events/img4.jpg";

const PrivateEvents = () => {
  return (
    <div className="mb-5">
      <div className="container my-5 p-5">
        <div className="text-center">
          <h2
            className="text-body-tertiary mb-0"
            style={{ fontSize: "44px", fontFamily: "'Allura', cursive" }}
          >
            Arrangements and Arrange
          </h2>
          <h2>Private Events</h2>
          <Flower>{flower}</Flower>
          <p className="mt-4 fs-5 text-secondary">
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
            felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
            pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet
            a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          </p>
        </div>
        <Row xs={1} md={3} className="g-4 mt-5">
          <Col>
            <Card className="border-0 single-event">
              <Card.Img variant="top" src={img1} />
              <div className="gray-box"></div>
              <Card.Body className="text-center mt-3">
                <Card.Title className="fs-3 event-title">Rich Flavor</Card.Title>
                <Card.Text className="fs-5 text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod
                  orci.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="border-0 single-event">
              <Card.Img variant="top" src={img2} />
              <div className="gray-box"></div>
              <Card.Body className="text-center mt-3">
                <Card.Title className="fs-3 event-title">Served With Love</Card.Title>
                <Card.Text className="fs-5 text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod
                  orci.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="border-0 single-event">
              <Card.Img variant="top" src={img3} />
              <div className="gray-box"></div>
              <Card.Body className="text-center mt-3">
                <Card.Title className="fs-3 event-title">Enjoy the Fresh</Card.Title>
                <Card.Text className="fs-5 text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod
                  orci.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PrivateEvents;
