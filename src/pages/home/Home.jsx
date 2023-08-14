import Banner from "./banner/Banner";
import BlogPosts from "./blogPosts/BlogPosts";
import CoreFeatures from "./coreFeatures/CoreFeatures";
import Features from "./features/features";
import SeasonalMenus from "./seasonalMenus/SeasonalMenus";
import TeamMembers from "./teamMembers/TeamMembers";

const Home = () => {
  return (
    <div>
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
