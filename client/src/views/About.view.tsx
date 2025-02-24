import AboutText from "../components/AboutText.component";
import Team from "../components/Team.component";
import { Header } from "../components/Header.component";
import Gallery from "../components/Gallery.component";
import Istoric from "../components/Istoric.component";
import carouselItems from "../config/IstoricConfig";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <title>APV 2025 | Despre</title>
      </Helmet>
      <Header />
      <AboutText />
      <Team />
      <Istoric items={carouselItems} />
      <Gallery />
    </>
  );
}
