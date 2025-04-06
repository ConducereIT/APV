import { CurseValide } from "../views/Curse.view";
import Regulament from "../assets/REGULAMENT-APV-2024.pdf";
import { Helmet } from "react-helmet";
const CurseComponent: React.FC<CurseValide> = ({ interfata }): JSX.Element => {
  const { cursa, oraStart, distanta, donatieMinima, descriere, urlHarta } =
    interfata || {};

  return (
    <>
      <Helmet>
        <title>APV 2025 | Cursa {cursa}</title>
      </Helmet>
      <div className="md:block hidden ml-8 pt-5">
        {interfata && (
          <div className="relative cursor-default">
            <h1 className="text-5xl font-bold" style={{ color: '#1D1A3F' }}>
              {" "}
              <span className="font-normal font-source-code-pro text-5xl">
                Cursa -{" "}
              </span>{" "}
              {cursa}
            </h1>
            <h1 className="text-2xl mt-10 font-semibold">
              Informații cursă:
            </h1>
            <div className="space-y-1 mt-3 mb-3">
              <p className="font-bold " style={{ color: '#1D1A3F' }}>
                {" "}
                <span className="font-semibold"> Ora start:</span> {oraStart}
              </p>
              <p className="font-bold" style={{ color: '#1D1A3F' }}>
                {" "}
                <span className="font-semibold">Distanța: </span> {distanta}{" "}
              </p>
              <p className="font-bold" style={{ color: '#1D1A3F' }}>
                {" "}
                <span className="font-semibold">Donație minimă: </span>{" "}
                {donatieMinima}{" "}
              </p>
            </div>
            <h1 className="mt-10">{descriere}</h1>

            <h2 className="text-xl text-gray-700 mt-12">
              Vezi mai jos harta traseului!
            </h2>

            <h1 className="text-lg mt-8">
              <span>
                Pentru mai multe informații consultați{" "}
              </span>{" "}
              <a href={Regulament} target="_blank" className="text-blue-600 hover:text-blue-800">
                regulamentul
              </a>
              <span>!</span>{" "}
            </h1>

            <div className="mt-10 h-[30rem] ml-1 w-1/2">
              <iframe
                src={`${urlHarta}`}
                loading="lazy"
                className="border-0 h-full w-full"
                title={`${cursa}`}
              ></iframe>
            </div>

            <br className=" mt-3" />
          </div>
        )}
      </div>

      <div className="md:hidden block ml-8 pt-5 ">
        {interfata && (
          <div className="relative cursor-default ">
            <h1 className="-ml-2 text-3xl font-bold mt-4" style={{ color: '#1D1A3F' }}>
              {" "}
              <span className="font-normal font-source-code-pro text-3xl">
                Cursa -{" "}
              </span>{" "}
              {cursa}
            </h1>
            <h1 className="text-lg mt-10 font-semibold -ml-2">
              Informații cursă:
            </h1>
            <div className=" space-y-1 mt-3 mb-3 pl-6 -ml-8">
              <p className="font-bold" style={{ color: '#1D1A3F' }}>
                {" "}
                <span className="font-semibold"> Ora start:</span> {oraStart}
              </p>
              <p className="font-bold" style={{ color: '#1D1A3F' }}>
                {" "}
                <span className="font-semibold">Distanța: </span> {distanta}{" "}
              </p>
              <p className="font-bold" style={{ color: '#1D1A3F' }}>
                {" "}
                <span className="font-semibold">Donație minimă: </span>{" "}
                {donatieMinima}{" "}
              </p>
            </div>
            <h1 className="-ml-2 mt-10 leading-7">
              {descriere}
            </h1>

            <h1 className="text-lg font-semibold mt-10 -ml-2">
              <span>Vezi mai jos harta traseului!</span>
            </h1>

            <h1 className="text-base mt-6 -ml-2">
              <span>
                Pentru mai multe informații consultați{" "}
              </span>
              <a href={Regulament} target="_blank" className="text-blue-600 hover:text-blue-800 font-bold">
              regulamentul 
              </a>
              <span>!</span>{" "}
            </h1>

            <div className="mt-10 h-[20rem] w-[75%]">
              <iframe
                src={`${urlHarta}`}
                loading="lazy"
                className="border-0 h-full w-full"
                title={`${cursa}`}
              ></iframe>
            </div>

            <br className=" mt-3" />
          </div>
        )}
      </div>
    </>
  );
};

export default CurseComponent;
