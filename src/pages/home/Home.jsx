import Banner from "./banner/Banner";
import CoreFeatures from "./coreFeatures/CoreFeatures";
import Features from "./features/features";
import SeasonalMenus from "./seasonalMenus/SeasonalMenus";

const Home = () => {
  return (
    <div>
      <Banner />
      <CoreFeatures />
      <Features />
      <SeasonalMenus />
    </div>
  );
};

export default Home;
