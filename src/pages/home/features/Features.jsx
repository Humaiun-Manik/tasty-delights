import "./Features.css";
import { Card, Col, Row } from "react-bootstrap";
import Flower from "../../../components/Flower";
import flower from "./../../../assets/images/logo/flower-decor-2.webp";
import ico1 from "./../../../assets/images/home/ico-1.webp";
import ico2 from "./../../../assets/images/home/ico-2.webp";
import ico3 from "./../../../assets/images/home/ico-3.webp";
import ico4 from "./../../../assets/images/home/ico-4.webp";
import ico5 from "./../../../assets/images/home/ico-5.webp";
import ico6 from "./../../../assets/images/home/ico-6.webp";
import { Link } from "react-router-dom";

const features = () => {
  return (
    <div>
      <div className="container">
        <div className="text-center my-5">
          <h2
            className="text-body-tertiary mb-0"
            style={{ fontSize: "44px", fontFamily: "'Allura', cursive" }}
          >
            For your comfort
          </h2>
          <h1 className="fw-bold">Stunning Things</h1>
          <Flower>{flower}</Flower>
        </div>
        <Row xs={1} md={2} lg={3} className="g-5 my-5">
          <Col>
            <Card className="p-4 feature">
              <Card.Img className="w-25 ms-3" variant="top" src={ico1} />
              <Card.Body>
                <Card.Title className="mb-4 fs-4 title">High Quality Foods</Card.Title>
                <Card.Text className="fs-5 lh-lg text-black-50">
                  Etiam feugiat eleifend est, sed luctus odio tempor vitae. Vivamus maximus scelerisque ipsum
                  nec commodo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="p-4 feature">
              <Card.Img className="w-25 ms-3" variant="top" src={ico2} />
              <Card.Body>
                <Card.Title className="mb-4 fs-4 title">Inspiring Recipes</Card.Title>
                <Card.Text className="fs-5 lh-lg text-black-50">
                  Etiam feugiat eleifend est, sed luctus odio tempor vitae. Vivamus maximus scelerisque ipsum
                  nec commodo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="p-4 feature">
              <Card.Img className="w-25 ms-3" variant="top" src={ico3} />
              <Card.Body>
                <Card.Title className="mb-4 fs-4 title">Salutary Meals</Card.Title>
                <Card.Text className="fs-5 lh-lg text-black-50">
                  Etiam feugiat eleifend est, sed luctus odio tempor vitae. Vivamus maximus scelerisque ipsum
                  nec commodo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="p-4 feature">
              <Card.Img className="w-25 ms-3" variant="top" src={ico4} />
              <Card.Body>
                <Card.Title className="mb-4 fs-4 title">Veteran Staff</Card.Title>
                <Card.Text className="fs-5 lh-lg text-black-50">
                  Etiam feugiat eleifend est, sed luctus odio tempor vitae. Vivamus maximus scelerisque ipsum
                  nec commodo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="p-4 feature">
              <Card.Img className="w-25 ms-3" variant="top" src={ico5} />
              <Card.Body>
                <Card.Title className="mb-4 fs-4 title">Pristine Ingredients</Card.Title>
                <Card.Text className="fs-5 lh-lg text-black-50">
                  Etiam feugiat eleifend est, sed luctus odio tempor vitae. Vivamus maximus scelerisque ipsum
                  nec commodo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="p-4 feature">
              <Card.Img className="w-25 ms-3" variant="top" src={ico6} />
              <Card.Body>
                <Card.Title className="mb-4 fs-4 title">Express Delivery</Card.Title>
                <Card.Text className="fs-5 lh-lg text-black-50">
                  Etiam feugiat eleifend est, sed luctus odio tempor vitae. Vivamus maximus scelerisque ipsum
                  nec commodo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="discount">
        <div className="discount-text">
          <h2 style={{ fontFamily: "'Allura', cursive" }}>Enjoy with Family and Friends</h2>
          <h1>25% Discount</h1>
          <p>for Family Parties! Coupon 015</p>
          <Link to={"/"} style={{ fontFamily: "'Allura', cursive" }}>
            Make a Reservation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default features;
