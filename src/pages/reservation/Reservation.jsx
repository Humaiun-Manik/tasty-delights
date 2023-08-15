import React from "react";
import SubHeader from "../../components/shared/subHeader/SubHeader";
import PrivateEvent from "./privateEvent/PrivateEvent";
import PartyArea from "./partyArea/PartyArea";

const Reservation = () => {
  return (
    <>
      <SubHeader text="Reservation" />
      <PrivateEvent />
      <PartyArea />
    </>
  );
};

export default Reservation;
