import { Header } from "../components/Header.component";
import VideoBanner from "../assets/Video_APV.mp4";
import Banner from "../components/Banner.component";
import LseBanner from "../assets/banner.jpg";
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
    </>
  );
};

export default Home;
