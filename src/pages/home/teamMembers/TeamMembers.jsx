import "./TeamMembers.css";
import { Col, Row } from "react-bootstrap";
import Flower from "../../../components/Flower";
import flower from "./../../../assets/images/logo/flower-decor.webp";
import team1 from "./../../../assets/images/home/team1.jpg";
import team2 from "./../../../assets/images/home/team2.jpg";
import team3 from "./../../../assets/images/home/team3.jpg";
import { FaTwitterSquare, FaGooglePlusSquare, FaLinkedin } from "react-icons/fa";
import { BiLogoFacebookSquare } from "react-icons/bi";

const TeamMembers = () => {
  return (
    <div>
      <div className="container">
        <div className="text-center my-5">
          <h2
            className="text-body-tertiary fw-semibold mb-0"
            style={{ fontSize: "44px", fontFamily: "'Allura', cursive" }}
          >
            For your comfort
          </h2>
          <h1>Stunning Things</h1>
          <Flower>{flower}</Flower>
        </div>
        <Row xs={1} md={3} className="mb-5">
          <Col>
            <div className="team-member">
              <img className="w-100" src={team1} alt="" />
              <div className="member-info">
                <h5>MARC COPPOLO</h5>
                <p>Head Of Chef</p>
                <div className="icons">
                  <FaTwitterSquare className="me-2" />
                  <BiLogoFacebookSquare className="me-2 fs-1" />
                  <FaGooglePlusSquare className="me-2" />
                  <FaLinkedin className="me-2" />
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="team-member">
              <img className="w-100" src={team2} alt="" />
              <div className="member-info">
                <h5>MARY SANDRA</h5>
                <p>Executive Chef</p>
                <div className="icons">
                  <FaTwitterSquare className="me-2" />
                  <BiLogoFacebookSquare className="me-2 fs-1" />
                  <FaGooglePlusSquare className="me-2" />
                  <FaLinkedin className="me-2" />
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="team-member">
              <img className="w-100" src={team3} alt="" />
              <div className="member-info">
                <h5>LOHAN CRAIG</h5>
                <p>Decoration Chef</p>
                <div className="icons">
                  <FaTwitterSquare className="me-2" />
                  <BiLogoFacebookSquare className="me-2 fs-1" />
                  <FaGooglePlusSquare className="me-2" />
                  <FaLinkedin className="me-2" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="taste-improve">
        <div className="h-100 d-flex align-items-center justify-content-center flex-column">
          <h1>Need a Quality & Taste Improve?</h1>
          <h2 style={{ fontFamily: "'Allura', cursive" }}>Signup with Newsletter</h2>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
