import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import NewArrivals from "../components/NewArrivals";
import ShowcaseSection from "../components/ShowcaseSection";
import VideoSection from "../components/VideoSection";
import Footer from "../components/Footer";
import WhatsAppButton from "components/WhatsAppButton";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <NewArrivals />
      <ShowcaseSection />
      <VideoSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Home;
