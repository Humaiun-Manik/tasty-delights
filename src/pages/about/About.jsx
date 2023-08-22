import React from "react";
import SubHeader from "../../components/shared/subHeader/SubHeader";
import Introduction from "./introduction/Introduction";
import Rewards from "./rewards/Rewards";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Tasty Delights | About</title>
      </Helmet>
      <SubHeader text="About Us" />
      <Introduction />
      <Rewards />
    </div>
  );
};

export default About;
