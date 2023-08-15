import React from "react";
import "./PartyArea.css";
import { Col, Row } from "react-bootstrap";
import img from "./../../../assets/images/reservation/title-decor.webp";
import img1 from "./../../../assets/images/reservation/image-caption-4.jpg";
import img2 from "./../../../assets/images/reservation/image-caption-5.jpg";
import img3 from "./../../../assets/images/reservation/image-caption-6.jpg";

const PartyArea = () => {
  return (
    <div>
      <div className="event-banner">
        <div className="h-100 d-flex align-items-center justify-content-center flex-column">
          <h1>Events Or Celebration</h1>
          <h2 className="text-warning mb-0" style={{ fontSize: "54px", fontFamily: "'Allura', cursive" }}>
            Find a Party Area
          </h2>
        </div>
      </div>
      <div className="container">
        <div>
          <Row className="party-area g-5">
            <Col xs="12" md="6">
              <div className="overflow-hidden">
                <img className="w-100 area" src={img1} alt="" />
              </div>
            </Col>
            <Col xs="12" md="6">
              <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <h2
                    className="text-body-tertiary mb-0"
                    style={{ fontSize: "44px", fontFamily: "'Allura', cursive" }}
                  >
                    Private Dining
                  </h2>
                  <h2>Wedding Celebration</h2>
                  <img className="my-4 img-logo" src={img} alt="" />
                  <p className="text-secondary">
                    Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos
                    dolores et quas molestias excepturi sint occaecati.
                  </p>
                  <Row xs={1} md={2} className="mt-4">
                    <Col>
                      <p>
                        Hall Info : <small className="text-secondary">2452 Sq Feet Free Space</small>
                      </p>
                      <p>
                        Hall Info : <small className="text-secondary">2452 Sq Feet Free Space</small>
                      </p>
                    </Col>
                    <Col>
                      <p>
                        Hall Info : <small className="text-secondary">2452 Sq Feet Free Space</small>
                      </p>
                      <p>
                        Hall Info : <small className="text-secondary">2452 Sq Feet Free Space</small>
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mt-5">
          <Row className="party-area g-5">
            <Col xs="12" md="6">
              <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <h2
                    className="text-body-tertiary mb-0"
                    style={{ fontSize: "44px", fontFamily: "'Allura', cursive" }}
                  >
                    Family Party
                  </h2>
                  <h2>Birthday Celebration</h2>
                  <img className="my-4 img-logo" src={img} alt="" />
                  <p className="text-secondary">
                    Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos
                    dolores et quas molestias excepturi sint occaecati.
                  </p>
                  <Row xs={1} md={2} className="mt-4">
                    <Col>
                      <p>
                        Hall Info : <small className="text-secondary">2452 Sq Feet Free Space</small>
                      </p>
                      <p>
                        Hall Info : <small className="text-secondary">2452 Sq Feet Free Space</small>
                      </p>
                    </Col>
                    <Col>
                      <p>
                        Hall Info : <small className="text-secondary">2452 Sq Feet Free Space</small>
                      </p>
                      <p>
                        Hall Info : <small className="text-secondary">2452 Sq Feet Free Space</small>
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col xs="12" md="6">
              <div className="overflow-hidden">
                <img className="w-100 area" src={img2} alt="" />
              </div>
            </Col>
          </Row>
        </div>
        <div className="my-5 pb-5">
          <Row className="party-area g-5">
            <Col xs="12" md="6">
              <div className="overflow-hidden">
                <img className="w-100 area" src={img3} alt="" />
              </div>
            </Col>
            <Col xs="12" md="6">
              <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <h2
                    className="text-body-tertiary mb-0"
                    style={{ fontSize: "44px", fontFamily: "'Allura', cursive" }}
                  >
                    Party Celebration
                  </h2>
                  <h2>Official Meetings</h2>
                  <img className="my-4 img-logo" src={img} alt="" />
                  <p className="text-secondary">
                    Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos
                    dolores et quas molestias excepturi sint occaecati.
                  </p>
                  <Row xs={1} md={2} className="mt-4">
                    <Col>
                      <p>
                        Hall Info : <small className="text-secondary">2452 Sq Feet Free Space</small>
                      </p>
                      <p>
                        Hall Info : <small className="text-secondary">2452 Sq Feet Free Space</small>
                      </p>
                    </Col>
                    <Col>
                      <p>
                        Hall Info : <small className="text-secondary">2452 Sq Feet Free Space</small>
                      </p>
                      <p>
                        Hall Info : <small className="text-secondary">2452 Sq Feet Free Space</small>
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default PartyArea;
