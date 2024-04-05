import AboutText from "../components/AboutText.component";
import Team from "../components/Team.component";
import { Header } from "../components/Header.component";
import Gallery from "../components/Gallery.component";

export default function About() {
  return (
    <>
      <Header />
      <AboutText />
      <Team />
      <Gallery/>
    </>
  );
}
