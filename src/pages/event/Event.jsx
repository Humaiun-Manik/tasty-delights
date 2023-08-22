import React from "react";
import SubHeader from "../../components/shared/subHeader/SubHeader";
import PrivateEvents from "./privateEvents/PrivateEvents";
import EventRoom from "./eventRoom/EventRoom";
import { Helmet } from "react-helmet-async";

const Event = () => {
  return (
    <div>
      <Helmet>
        <title>Tasty Delights | Event</title>
      </Helmet>
      <SubHeader text="Event"></SubHeader>
      <PrivateEvents />
      <EventRoom />
    </div>
  );
};

export default Event;
