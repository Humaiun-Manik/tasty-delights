import React, { useState } from "react";
import "./ItemDetail.css";
import SubHeader from "../../components/shared/subHeader/SubHeader";
import { useLoaderData, useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { Rating } from "@smastrom/react-rating";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";

const ItemDetail = () => {
  const items = useLoaderData();
  const { id } = useParams();
  const singleItem = items.find((item) => item.id === parseInt(id));
  const relatedItem = items.filter((item) => item.category === singleItem.category);
  const { name, img, rating, price, description, category } = singleItem;
  const [image, setImage] = useState(singleItem.img);

  return (
    <div>
      <SubHeader text={name} />
      <div className="container">
        <Row className="my-5 g-5">
          <Col sm="12" md="4">
            <img className="w-100" src={image} alt="" />
            <Row className="mt-5">
              {relatedItem.map((item) => (
                <Col key={item.id}>
                  <img onClick={() => setImage(item.img)} className="w-100" src={item.img} alt="" />
                </Col>
              ))}
            </Row>
          </Col>
          <Col sm="12" md="8">
            <div>
              <h3>{name}</h3>
              <div className="d-flex my-4">
                <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                <span className="ms-2">(0 customer reviews)</span>
              </div>
              <h4 className="mb-5">$ {price}</h4>
              <p className="fs-5 text-black-50 lh-lg">{description.slice(0, 200)}</p>
              <div className="d-flex m4-5">
                <div className="item-count">
                  <button>
                    <AiFillPlusCircle className="text-warning fs-1" />
                  </button>
                  <span>1</span>
                  <button>
                    <AiFillMinusCircle className="text-warning fs-1" />
                  </button>
                </div>
                <button className="add-cart-btn ms-4">Add to cart</button>
              </div>
              <button className="add-wishlist-btn">
                <GiSelfLove className="me-1" /> add to wishlist
              </button>
              <p className="mt-4 fs-5 text-secondary">Category: {category}</p>
            </div>
          </Col>
        </Row>
        <h4 className="mb-3">Description</h4>
        <p style={{ textAlign: "justify" }} className="fs-5 text-black-50 lh-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ItemDetail;
