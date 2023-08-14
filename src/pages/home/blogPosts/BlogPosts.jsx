import "./BlogPosts.css";
import { Card, Col, Image, Row } from "react-bootstrap";
import Flower from "../../../components/Flower";
import flower from "./../../../assets/images/logo/flower-decor-2.webp";
import blog1 from "./../../../assets/images/home/blog3-750x500.jpg";
import blog2 from "./../../../assets/images/home/blog2-750x500.jpg";
import img from "./../../../assets/images/home/453a59a0552b87df037b3c87a0b2c562.jpeg";

const BlogPosts = () => {
  return (
    <div className="container">
      <div className="text-center my-5">
        <h2
          className="text-body-tertiary fw-semibold mb-0"
          style={{ fontSize: "44px", fontFamily: "'Allura', cursive" }}
        >
          Latest News
        </h2>
        <h1>Blog Posts</h1>
        <Flower>{flower}</Flower>
      </div>
      <Row xs={1} md={2} className="g-4 mb-5 pb-5">
        <Col>
          <Card className="border-0 shadow blog">
            <Card.Img variant="top" src={blog1} />
            <Card.Body className="p-5">
              <Card.Title>
                <button>food</button>
                <button>traditional</button>
                <h4>The Traditional Way</h4>
                <div className="d-flex align-items-center">
                  <Image className="me-3" src={img} roundedCircle />
                  <span>admin</span>
                  <div className="box"></div>
                  <span>aug 28,2023</span>
                  <div className="box"></div>
                  <span>0 comments</span>
                </div>
                <hr />
              </Card.Title>
              <Card.Text className="mt-4 text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a nunc imperdiet, bibendum
                lectus accumsan, aliquet nisl. Fusce a venenatis diam.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="border-0 shadow blog">
            <Card.Img variant="top" src={blog2} />
            <Card.Body className="p-5">
              <Card.Title>
                <button>food</button>
                <button>tips</button>
                <h4>Customer Service Tips</h4>
                <div className="d-flex align-items-center">
                  <Image className="me-3" src={img} roundedCircle />
                  <span>admin</span>
                  <div className="box"></div>
                  <span>aug 28,2023</span>
                  <div className="box"></div>
                  <span>0 comments</span>
                </div>
                <hr />
              </Card.Title>
              <Card.Text className="mt-4 text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a nunc imperdiet, bibendum
                lectus accumsan, aliquet nisl. Fusce a venenatis diam.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default BlogPosts;
