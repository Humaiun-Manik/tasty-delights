import "./SeasonalMenus.css";
import { Col, Row } from "react-bootstrap";
import img1 from "./../../../assets/images/home/center-img2.jpg";
import ico1 from "./../../../assets/images/home/ico7.webp";
import ico2 from "./../../../assets/images/home/ico8.webp";
import ico3 from "./../../../assets/images/home/ico9.webp";
import ico4 from "./../../../assets/images/home/ico10.webp";
import ico5 from "./../../../assets/images/home/ico11.webp";
import ico6 from "./../../../assets/images/home/ico12.webp";
import ButtonWarning from "../../../components/ButtonWarning";
import item1 from "./../../../assets/images/home/seasonal-item-1.jpg";
import item2 from "./../../../assets/images/home/seasonal-item-2.jpg";
import item3 from "./../../../assets/images/home/seasonal-item-3.jpg";
import item4 from "./../../../assets/images/home/seasonal-item-4.jpg";
import item5 from "./../../../assets/images/home/seasonal-item-5.jpg";
import item6 from "./../../../assets/images/home/seasonal-item-6.jpg";
import { useState } from "react";
import ItemsModal from "../ItemsModal";
import { BsPlusLg } from "react-icons/bs";

const SeasonalMenus = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="mb-5 pb-5">
      <div className="container">
        <Row xs={1} md={3}>
          <Col className="my-5">
            <div className="seasonal-menu">
              <div className="text-end">
                <h3>Salubrious Snacks</h3>
                <p className="lh-base fs-4 text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid iduntus
                  ut
                </p>
              </div>
              <div className="ms-5">
                <img src={ico1} alt="" />
              </div>
            </div>
            <div className="seasonal-menu">
              <div className="text-end">
                <h3>Salubrious Snacks</h3>
                <p className="lh-base fs-4 text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid iduntus
                  ut
                </p>
              </div>
              <div className="ms-5">
                <img src={ico2} alt="" />
              </div>
            </div>
            <div className="seasonal-menu">
              <div className="text-end">
                <h3>Salubrious Snacks</h3>
                <p className="lh-base fs-4 text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid iduntus
                  ut
                </p>
              </div>
              <div className="ms-5">
                <img src={ico3} alt="" />
              </div>
            </div>
          </Col>
          <Col>
            <img className="w-100 h-100" src={img1} alt="" />
          </Col>
          <Col className="my-5">
            <div className="seasonal-menu">
              <div className="me-5">
                <img src={ico4} alt="" />
              </div>
              <div>
                <h3>Salubrious Snacks</h3>
                <p className="lh-base fs-4 text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid iduntus
                  ut
                </p>
              </div>
            </div>
            <div className="seasonal-menu">
              <div className="me-5">
                <img src={ico5} alt="" />
              </div>
              <div>
                <h3>Salubrious Snacks</h3>
                <p className="lh-base fs-4 text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid iduntus
                  ut
                </p>
              </div>
            </div>
            <div className="seasonal-menu">
              <div className="me-5">
                <img src={ico6} alt="" />
              </div>
              <div>
                <h3>Salubrious Snacks</h3>
                <p className="lh-base fs-4 text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid iduntus
                  ut
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row xs={1} md={2}>
          <Col sm={12} md={4} className="text-center p-5 seasonal-menu-left">
            <div className="w-100 h-100 d-flex align-items-center">
              <div>
                <h1
                  className="text-body-tertiary fw-semibold mb-0"
                  style={{ fontFamily: "'Allura', cursive" }}
                >
                  Embracing
                </h1>
                <h1 className="fw-bold">Seasonal Menus</h1>
                <div className="under-line"></div>
                <p className="w-75 mx-auto fs-5 lh-lg text-secondary">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                  voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                  cupiditate non provident.
                </p>
                <ButtonWarning>Shop Now</ButtonWarning>
              </div>
            </div>
          </Col>
          <Col sm={12} md={8} className="seasonal-items">
            <Row xs={1} md={3}>
              <Col className="p-0 item">
                <img className="w-100" src={item1} alt="" />
                <div className="content d-flex align-items-center justify-content-center">
                  <BsPlusLg onClick={() => setModalShow(true)} className="plus-icon" />
                </div>
              </Col>
              <Col className="p-0 item">
                <img onClick={() => setModalShow(true)} className="w-100" src={item2} alt="" />
                <div className="content d-flex align-items-center justify-content-center">
                  <BsPlusLg onClick={() => setModalShow(true)} className="plus-icon" />
                </div>
              </Col>
              <Col className="p-0 item">
                <img onClick={() => setModalShow(true)} className="w-100" src={item3} alt="" />
                <div className="content d-flex align-items-center justify-content-center">
                  <BsPlusLg onClick={() => setModalShow(true)} className="plus-icon" />
                </div>
              </Col>
            </Row>
            <Row xs={1} md={3}>
              <Col className="p-0 item">
                <img onClick={() => setModalShow(true)} className="w-100" src={item4} alt="" />
                <div className="content d-flex align-items-center justify-content-center">
                  <BsPlusLg onClick={() => setModalShow(true)} className="plus-icon" />
                </div>
              </Col>
              <Col className="p-0 item">
                <img onClick={() => setModalShow(true)} className="w-100" src={item5} alt="" />
                <div className="content d-flex align-items-center justify-content-center">
                  <BsPlusLg onClick={() => setModalShow(true)} className="plus-icon" />
                </div>
              </Col>
              <Col className="p-0 item">
                <img onClick={() => setModalShow(true)} className="w-100" src={item6} alt="" />
                <div className="content d-flex align-items-center justify-content-center">
                  <BsPlusLg onClick={() => setModalShow(true)} className="plus-icon" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <ItemsModal show={modalShow} onHide={() => setModalShow(false)}></ItemsModal>
    </div>
  );
};

export default SeasonalMenus;
