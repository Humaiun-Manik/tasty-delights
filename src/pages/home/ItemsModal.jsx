import { Modal } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "./../../assets/images/home/seasonal-item-1.jpg";
import img2 from "./../../assets/images/home/seasonal-item-2.jpg";
import img3 from "./../../assets/images/home/seasonal-item-3.jpg";
import img4 from "./../../assets/images/home/seasonal-item-4.jpg";
import img5 from "./../../assets/images/home/seasonal-item-5.jpg";
import img6 from "./../../assets/images/home/seasonal-item-6.jpg";

const ItemsModal = (props) => {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header className="border-0" closeButton></Modal.Header>
      <Modal.Body>
        <Carousel>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
          <div>
            <img src={img3} />
          </div>
          <div>
            <img src={img4} />
          </div>
          <div>
            <img src={img5} />
          </div>
          <div>
            <img src={img6} />
          </div>
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default ItemsModal;
