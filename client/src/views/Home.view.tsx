import { Header } from "../components/Header.component";

const Home = () => {
  return (
    <>
      <Header />
      <div className="h-96 w-auto bg-black text-center mx-auto max-w-[80rem] mt-96">
        <h1 className="text-yellow-400">Alearga Pentru Viata</h1>
      </div>
    </>
  );
};

export default Home;
