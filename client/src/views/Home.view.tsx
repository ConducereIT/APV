import { Header } from "../components/Header.component";
import { Countdown } from "../components/CountDown.component";
import AboutHome from "../components/AboutHome.component";

const Home = () => {
  return (
    <>
      <Header />
      <div className="h-96 w-auto bg-black text-center mx-auto max-w-[80rem] mt-96">
        <h1 className="text-yellow-400">Aleargă Pentru Viață</h1>
      </div>
      <Countdown />
      <AboutHome/>
    </>
  );
};

export default Home;
