import React from "react";
import "./Menu.css";
import SubHeader from "../../components/shared/subHeader/SubHeader";
import Flower from "../../components/Flower";
import flower from "./../../assets/images/logo/flower-decor.webp";
import { useLoaderData } from "react-router-dom";
import Items from "./items/Items";

const Menu = () => {
  const items = useLoaderData();

  const breakfastItems = items.filter((item) => item.category === "Breakfast");
  const lunchItems = items.filter((item) => item.category === "Lunch");
  const dinnerItems = items.filter((item) => item.category === "Dinner");

  return (
    <>
      <SubHeader text="Menu" />
      <div className="container  my-5">
        <div className="text-center py-5 mx-auto w-75">
          <h2
            className="text-body-tertiary mb-0"
            style={{ fontSize: "38px", fontFamily: "'Allura', cursive" }}
          >
            Make your Order
          </h2>
          <h2 className="fw-bold">Dishes On Our Menu</h2>
          <Flower>{flower}</Flower>
          <p className="mt-4 fs-5 text-secondary">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
            fuga.
          </p>
        </div>
      </div>
      <Items time="Breakfast" items={breakfastItems}></Items>
      <div className="natural bg-img">
        <div className="h-100 d-flex flex-column justify-content-center align-items-center">
          <h1>Prepared On Site With</h1>
          <h2 className="text-warning" style={{ fontSize: "58px", fontFamily: "'Allura', cursive" }}>
            Natural Ingredients
          </h2>
        </div>
      </div>
      <Items time="Lunch" items={lunchItems}></Items>
      <div className="champagne bg-img">
        <div className="h-100 d-flex flex-column justify-content-center align-items-center">
          <h1>Offering A Champagne</h1>
          <h2 className="text-warning" style={{ fontSize: "58px", fontFamily: "'Allura', cursive" }}>
            As Complimentary
          </h2>
        </div>
      </div>
      <Items time="Dinner" items={dinnerItems}></Items>
    </>
  );
};

export default Menu;
