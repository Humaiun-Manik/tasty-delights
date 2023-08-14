import React from "react";
import "./Introduction.css";
import { Col, Row } from "react-bootstrap";
import Flower from "../../../components/Flower";
import flower from "./../../../assets/images/logo/flower-decor-2.webp";
import img1 from "./../../../assets/images/about/img-flip-1.jpg";
import img2 from "./../../../assets/images/about/img-flip-2.jpg";
import img3 from "./../../../assets/images/about/img-flip-3.jpg";
import img4 from "./../../../assets/images/about/img-flip-4.jpg";
import img5 from "./../../../assets/images/about/elle-morre-k6VCwawxgMg-unsplash.jpg";
import img6 from "./../../../assets/images/about/huden-harui-iCTKQBWNhVU-unsplash.jpg";

const Introduction = () => {
  return (
    <>
      <div className="container text-center my-5 py-5">
        <div>
          <h1>Introduction</h1>
          <Flower>{flower}</Flower>
          <p className="mt-5 mb-4 fs-5">
            Eros ludus laboramus ne eam. Mea inani utamur rationibus eu, his ei assum volutpat. Integre
            dolorem mel an, mei nihil omittam et. Postea regione mentitum ei quo, debitis phaedrum conceptam
            vis at. Fugit choro scriptorem nam an, vel ex possit audire. Qui elitr graeci referrentur ad, eu
            ludus laudem tincidunt vel, ad vim wisi graeci efficiendi.
          </p>
          <h3>– Robert Williams</h3>
          <p className="text-warning fs-5">Founder - Ceo</p>
        </div>
        <Row xs={1} md={2} className="gx-4 mt-5">
          <Col>
            <div className="image-container">
              <img className="w-100" src={img1} alt="" />
              <div className="hover-image"></div>
            </div>
          </Col>
          <Col>
            <div className="image-container">
              <img className="w-100" src={img2} alt="" />
              <div className="hover-image1"></div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="bg-black">
        <div className="container pb-5">
          <Row xs={1} md={2} className="g-5 py-5 text-white">
            <Col>
              <div className="text-end p-5 about-info">
                <h4 className="mb-3">Drive Through Restaurant</h4>
                <small className="text-warning">November 1982</small>
                <p className="mt-5">
                  Augue legendos eam ne, pro quot definitionem te, viderer appareat atomorum mel ea. Melius
                  adipisci eum id, mea cibo decore nominavi eu. Eu porro nemore mea, ius posse primis ea.
                </p>
              </div>
            </Col>
            <Col>
              <div className="px-5">
                <img className="w-100" src={img5} alt="" />
              </div>
            </Col>
            <Col>
              <div className="px-5">
                <img className="w-100" src={img3} alt="" />
              </div>
            </Col>
            <Col>
              <div className="p-5 about-info">
                <h4 className="mb-3">Kudil With Seating Opened</h4>
                <small className="text-warning">April 1992</small>
                <p className="mt-5">
                  Augue legendos eam ne, pro quot definitionem te, viderer appareat atomorum mel ea. Melius
                  adipisci eum id, mea cibo decore nominavi eu. Eu porro nemore mea, ius posse primis ea.
                </p>
              </div>
            </Col>
            <Col>
              <div className="text-end p-5 about-info">
                <h4 className="mb-3">Spicy Burger Introduced</h4>
                <small className="text-warning">May 2002</small>
                <p className="mt-5">
                  Augue legendos eam ne, pro quot definitionem te, viderer appareat atomorum mel ea. Melius
                  adipisci eum id, mea cibo decore nominavi eu. Eu porro nemore mea, ius posse primis ea.
                </p>
              </div>
            </Col>
            <Col>
              <div className="px-5">
                <img className="w-100" src={img6} alt="" />
              </div>
            </Col>
            <Col>
              <div className="px-5">
                <img className="w-100" src={img4} alt="" />
              </div>
            </Col>
            <Col>
              <div className="p-5 about-info">
                <h4 className="mb-3">Branches Opened World-Wide</h4>
                <small className="text-warning">August 2012</small>
                <p className="mt-5">
                  Augue legendos eam ne, pro quot definitionem te, viderer appareat atomorum mel ea. Melius
                  adipisci eum id, mea cibo decore nominavi eu. Eu porro nemore mea, ius posse primis ea.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Introduction;
