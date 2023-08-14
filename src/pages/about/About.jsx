import React from "react";
import SubHeader from "../../components/shared/subHeader/SubHeader";
import Introduction from "./introduction/Introduction";
import Rewards from "./rewards/Rewards";

const About = () => {
  return (
    <div>
      <SubHeader text="About Us" />
      <Introduction />
      <Rewards />
    </div>
  );
};

export default About;
