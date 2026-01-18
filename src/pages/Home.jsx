import Hero from "../components/Hero";
import Collections from "../components/LatestCollections";
import Reviews from "../components/Reviews";
import HomeHeritageSection from "../components/HomeHeritageSection";
import HomeContactSection from "../components/HomeContactSection";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeHeritageSection /> 
      <Collections/>
      <Reviews />
      <HomeContactSection />
    </>
  );
};

export default Home;
