import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Flower from "../../../components/Flower";
import ButtonWarning from "../../../components/ButtonWarning";
import img1 from "./../../../assets/images/home/home-image-1-2.jpg";
import img2 from "./../../../assets/images/home/home-image-1-1.jpg";
import img3 from "./../../../assets/images/home/davide-cantelli-jpkfc5_d-DI-unsplash.jpg";
import flower from "./../../../assets/images/logo/flower-decor.webp";
import { Link } from "react-router-dom";

const CoreFeatures = () => {
  return (
    <div className="mb-5 pb-5">
      <div className="container my-5 py-5">
        <Row xs={1} md={2} className="g-5 gy-5">
          <Col className="text-center">
            <Card className="border-0">
              <Card.Body>
                <Card.Title>
                  <h2
                    className="text-body-tertiary fw-semibold mb-0"
                    style={{ fontSize: "44px", fontFamily: "'Allura', cursive" }}
                  >
                    History of
                  </h2>
                  <h1>Our Restaurant</h1>
                  <Flower>{flower}</Flower>
                </Card.Title>
                <Card.Text className="my-4 fs-5 text-secondary">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                  voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                  cupiditate non provident.
                </Card.Text>
                <ButtonWarning>Our Story</ButtonWarning>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={img1} />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={img2} />
            </Card>
          </Col>
          <Col className="text-center">
            <Card className="border-0">
              <Card.Body>
                <Card.Title>
                  <h2
                    className="text-body-tertiary fw-semibold mb-0"
                    style={{ fontSize: "44px", fontFamily: "'Allura', cursive" }}
                  >
                    Delicated
                  </h2>
                  <h1>Our Services</h1>
                  <Flower>{flower}</Flower>
                </Card.Title>
                <Card.Text className="my-4 fs-5 text-secondary">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                  voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                  cupiditate non provident.
                </Card.Text>
                <ButtonWarning>View More</ButtonWarning>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div
        className="d-flex align-items-center justify-content-center "
        style={{
          height: "700px",
          background: `rgba(0,0,0,0.7)url(${img3})`,
          backgroundSize: "100%",
          backgroundBlendMode: "darken",
        }}
      >
        <div className="text-center mt-5 pt-5">
          <h1 style={{ fontSize: "72px", color: "red" }}>Over 250 Delicious & Tasty</h1>
          <Link
            to={"/"}
            className="text-warning link-underline link-underline-opacity-0"
            style={{ fontSize: "64px", fontFamily: "'Allura', cursive" }}
          >
            Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
