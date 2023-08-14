import React from "react";
import "./EventRoom.css";
import { Col, Row } from "react-bootstrap";
import event1 from "./../../../assets/images/events/ev1.jpg";
import event2 from "./../../../assets/images/events/ev2.jpg";
import event3 from "./../../../assets/images/events/ev3.jpg";
import flower from "./../../../assets/images/logo/flower-decor-2.webp";
import ButtonWarning from "../../../components/ButtonWarning";

const EventRoom = () => {
  return (
    <div>
      <div className="event-room d-flex align-items-center justify-content-center mb-5">
        <div className="text-center">
          <h1 className="text-white">Need Your Best Party</h1>
          <h2
            className="text-warning fw-semibold"
            style={{ fontSize: "48px", fontFamily: "'Allura', cursive" }}
          >
            Events Rooms
          </h2>
        </div>
      </div>
      <div className="container">
        <Row xs={1} md={2} className="g-5 my-5">
          <Col>
            <div className="p-5 text-end h-100 d-flex align-items-center justify-content-center">
              <div>
                <h2
                  className="text-body-tertiary fw-semibold mb-0"
                  style={{ fontSize: "34px", fontFamily: "'Allura', cursive" }}
                >
                  Group Dinner
                </h2>
                <h2>Restaurant For Group</h2>
                <div className="flower-logo my-4 d-flex align-items-center justify-content-end">
                  <div></div>
                  <img src={flower} alt="" />
                </div>
                <p className="text-secondary">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                  voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                  cupiditate non provident.
                </p>
                <ButtonWarning>Book Now</ButtonWarning>
              </div>
            </div>
          </Col>
          <Col>
            <div className="p-5">
              <img className="w-100" src={event1} alt="" />
            </div>
          </Col>
          <Col>
            <div className="p-5">
              <img className="w-100" src={event2} alt="" />
            </div>
          </Col>
          <Col>
            <div className="p-5 h-100 d-flex align-items-center justify-content-center">
              <div>
                <h2
                  className="text-body-tertiary fw-semibold mb-0"
                  style={{ fontSize: "34px", fontFamily: "'Allura', cursive" }}
                >
                  Wine Tastings
                </h2>
                <h2>Special Dishes & Drinks</h2>
                <div className="flower-logo my-4 d-flex align-items-center justify-content-start">
                  <img src={flower} alt="" />
                  <div></div>
                </div>
                <p className="text-secondary">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                  voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                  cupiditate non provident.
                </p>
                <ButtonWarning>Book Now</ButtonWarning>
              </div>
            </div>
          </Col>
          <Col>
            <div className="p-5 h-100 text-end d-flex align-items-center justify-content-center">
              <div>
                <h2
                  className="text-body-tertiary fw-semibold mb-0"
                  style={{ fontSize: "34px", fontFamily: "'Allura', cursive" }}
                >
                  Playing Musics
                </h2>
                <h2>New Ideas Each Time</h2>
                <div className="flower-logo my-4 d-flex align-items-center justify-content-end">
                  <div></div>
                  <img src={flower} alt="" />
                </div>
                <p className="text-secondary">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                  voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                  cupiditate non provident.
                </p>
                <ButtonWarning>Book Now</ButtonWarning>
              </div>
            </div>
          </Col>
          <Col>
            <div className="p-5">
              <img className="w-100" src={event3} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default EventRoom;
