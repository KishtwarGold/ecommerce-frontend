import Hero from "../components/Hero";
import Collections from "../components/LatestCollections";
import Reviews from "../components/Reviews";
import HomeHeritageSection from "../components/HomeHeritageSection";
import HomeContactSection from "../components/HomeContactSection";
import KongdoonDifference from "../components/KongdoonDifference";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeHeritageSection /> 
      <KongdoonDifference />
      <Collections/>
      <Reviews />
      <HomeContactSection />
    </>
  );
};

export default Home;
