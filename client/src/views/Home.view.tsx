import { Header } from "../components/Header.component";
import { Countdown } from "../components/Countdown.component";
import AboutHome from "../components/AboutHome.component";
import VideoBanner from "../assets/Video_APV.mp4";
import Banner from "../components/Banner.component";
import LseBanner from "../assets/banner.webp";
import Gallery from "../components/Gallery.component";
import Sponsors from "../components/Sponsors.component";
import { organizatori } from "../config/OrganizerConfig";
import { sponsori } from "../config/SponsorsConfig";
import CauzaHome from "../components/CauzaHome.component";
import Program from "../components/Program.component";

const Home = () => {
  return (
    <>
      <Header />
      <Banner
        video={VideoBanner}
        LseBanner={LseBanner}
        maiputernici={false}
      />
      <Countdown />
      <AboutHome />
      <CauzaHome />
      <Program />
      <Gallery />
      <Sponsors sponsors={organizatori} grid={3} title="organizatori" />
      <Sponsors sponsors={sponsori} grid={3} title="sponsori" />
    </>
  );
};

export default Home;
