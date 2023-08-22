import React from "react";
import SubHeader from "../../components/shared/subHeader/SubHeader";
import PrivateEvent from "./privateEvent/PrivateEvent";
import PartyArea from "./partyArea/PartyArea";
import { Helmet } from "react-helmet-async";

const Reservation = () => {
  return (
    <>
      <Helmet>
        <title>Tasty Delights | Reservation</title>
      </Helmet>
      <SubHeader text="Reservation" />
      <PrivateEvent />
      <PartyArea />
    </>
  );
};

export default Reservation;
