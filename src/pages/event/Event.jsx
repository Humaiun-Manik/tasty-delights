import React from "react";
import SubHeader from "../../components/shared/subHeader/SubHeader";
import PrivateEvents from "./privateEvents/PrivateEvents";
import EventRoom from "./eventRoom/EventRoom";

const Event = () => {
  return (
    <div>
      <SubHeader text="Event"></SubHeader>
      <PrivateEvents />
      <EventRoom />
    </div>
  );
};

export default Event;
