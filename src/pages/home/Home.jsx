import React from "react";
import Banner from "./banner/Banner";
import BlogPosts from "./blogPosts/BlogPosts";
import CoreFeatures from "./coreFeatures/CoreFeatures";
import Features from "./features/Features";
import SeasonalMenus from "./seasonalMenus/SeasonalMenus";
import TeamMembers from "./teamMembers/TeamMembers";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Tasty Delights | Home</title>
      </Helmet>
      <Banner />
      <CoreFeatures />
      <Features />
      <SeasonalMenus />
      <TeamMembers />
      <BlogPosts />
    </div>
  );
};

export default Home;
