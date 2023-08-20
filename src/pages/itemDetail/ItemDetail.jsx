import React, { useState } from "react";
import "./ItemDetail.css";
import SubHeader from "../../components/shared/subHeader/SubHeader";
import { useLoaderData, useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { Rating } from "@smastrom/react-rating";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { Carousel } from "react-responsive-carousel";
import RelatedItems from "./relatedItems/RelatedItems";

const ItemDetail = () => {
  const items = useLoaderData();
  const { id } = useParams();
  const singleItem = items.find((item) => item.id === parseInt(id));
  const relatedItem = items.filter((item) => item.category === singleItem.category);
  const { name, rating, price, description, category, index } = singleItem;
  const [count, setCount] = useState(1);

  return (
    <div>
      <SubHeader text={name} />
      <div className="container">
        <Row className="my-5 g-5">
          <Col sm="12" md="5">
            <Carousel showArrows={false} showStatus={false} showIndicators={false} selectedItem={index}>
              {relatedItem.map((item) => (
                <div className="border-0" key={item.id}>
                  <img className="w-100" src={item.img} alt="" />
                </div>
              ))}
            </Carousel>
          </Col>
          <Col sm="12" md="7">
            <div>
              <h3>{name}</h3>
              <div className="d-flex my-4">
                <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                <span className="ms-2">(0 customer reviews)</span>
              </div>
              <h4 className="mb-5">$ {price}</h4>
              <p className="fs-5 text-black-50 lh-lg">{description.slice(0, 200)}</p>
              <div className="d-flex mt-5">
                <div className="item-count">
                  <button disabled={count === 20} onClick={() => setCount(count + 1)}>
                    <AiFillPlusCircle className="text-warning fs-1" />
                  </button>
                  <span>{count}</span>
                  <button disabled={count === 1} onClick={() => setCount(count - 1)}>
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
        <div>
          <h4 className="mb-3">Description</h4>
          <p style={{ textAlign: "justify" }} className="fs-5 text-black-50 lh-lg">
            {description}
          </p>
        </div>
      </div>
      <RelatedItems items={relatedItem} />
    </div>
  );
};

export default ItemDetail;
