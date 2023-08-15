import React from "react";
import "./ContactInfo.css";
import flower from "./../../../assets/images/logo/flower-decor-2.webp";
import Flower from "../../../components/Flower";
import { Col, Row } from "react-bootstrap";
import { AiOutlineTwitter, AiOutlineGooglePlus } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { MdPhoneAndroid } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { IoMdTimer } from "react-icons/io";

const ContactInfo = () => {
  return (
    <div className="container my-5 text-center pt-5">
      <div>
        <h2 className="text-body-tertiary mb-0" style={{ fontSize: "44px", fontFamily: "'Allura', cursive" }}>
          Enquiry and Feedback
        </h2>
        <h2>Get In Touch</h2>
        <Flower>{flower}</Flower>
        <p className="my-5 fs-5 text-secondary">
          Nulla consequat massa quis enim. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec
          pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet
          a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
        </p>
        <div className="mb-5">
          <h5 className="mb-4">FOLLOW US</h5>
          <AiOutlineTwitter className="fs-4 social-icon" />
          <BiLogoFacebook className="fs-4 mx-4 social-icon" />
          <AiOutlineGooglePlus className="fs-3 social-icon" />
        </div>
      </div>
      <hr />
      <Row xs={1} md={2} lg={4} className="my-5 py-5">
        <Col>
          <div className="contact-info">
            <div className="icon">
              <IoLocationOutline className="text-white" />
            </div>
            <div className="contact-text">
              <h5 className="my-4">Our Location</h5>
              <div className="line"></div>
              <p className="fs-5 mb-4">Eight Avenue 385, Dhanmondi, Dhaka</p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="contact-info">
            <div className="icon">
              <MdPhoneAndroid className="text-white" />
            </div>
            <div className="contact-text">
              <h5 className="my-4">Call US</h5>
              <div className="line"></div>
              <p>Enquiry : (00) 123 456 788</p>
              <p className="fs-5 mb-4 mt-1">Booking : (00) 123 456 789</p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="contact-info">
            <div className="icon">
              <TfiEmail className="text-white" />
            </div>
            <div className="contact-text">
              <h5 className="my-4">Mail US</h5>
              <div className="line"></div>
              <p>
                Email : <small>admin@example.com</small>
              </p>
              <p className="fs-5 mb-4 mt-1">
                Support : <small>support@example.com</small>
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="contact-info">
            <div className="icon">
              <IoMdTimer className="text-white" />
            </div>
            <div className="contact-text">
              <h5 className="my-4">Opening Hours</h5>
              <div className="line"></div>
              <p>Mon – Sat 9 am to 8 pm</p>
              <p className="fs-5 mb-4 mt-1">Sun – 10 am to 3 pm</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactInfo;
