import { Header } from "../components/Header.component";
import AboutHome from "../components/AboutHome.component";
import VideoBanner from "../assets/Video_APV.mp4";
import Banner from "../components/Banner.component";
import LseBanner from "../assets/banner.jpg";
import Gallery from "../components/Gallery.component";
import Sponsors from "../components/Sponsors.component";
import { organizatori } from "../config/SponsorsConfig";
const Home = () => {
  return (
    <>
      <Header />
      <Banner
        firstTitle={"Aleargă pentru viață"}
        secondTitle={"APV"}
        video={VideoBanner}
        LseBanner={LseBanner}
        maiputernici={false}
      />
      <AboutHome />

      <Gallery />
      <Sponsors sponsors={organizatori} grid={3} title="organizatori" />
    </>
  );
};

export default Home;
