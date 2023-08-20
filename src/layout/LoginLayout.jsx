import React from "react";
import "./LoginLayout.css";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../components/shared/header/Header";
import Footer from "../components/shared/footer/Footer";
import SocialMedia from "../pages/login/socialMedia/SocialMedia";

const LoginLayout = () => {
  return (
    <>
      <Header />
      <div className="login-container">
        <Container className="py-5">
          <Row className="py-5">
            <Col md={1}></Col>
            <Col sm={12} md={4} className="px-0">
              <SocialMedia />
            </Col>
            <Col sm={12} md={6} className="px-0">
              <Outlet />
            </Col>
            <Col md={1}></Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default LoginLayout;
