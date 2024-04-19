import { CurseValide } from "../views/Curse.view";
import Regulament from "../assets/REGULAMENT-APV-2024.pdf";
import { Helmet } from "react-helmet";
const CurseComponent: React.FC<CurseValide> = ({ interfata }): JSX.Element => {
  const { cursa, oraStart, distanta, donatieMinima, descriere, urlHarta } =
    interfata || {};

  return (
    <>
      <Helmet>
        <title>APV 2024 | Cursa {cursa}</title>
      </Helmet>
      <div className="md:block hidden ml-8 pt-5">
        {interfata && (
          <div className="relative cursor-default">
            <h1 className="text-5xl font-bolt">
              {" "}
              <span className="font-normal font-source-code-pro text-5xl">
                Cursa -{" "}
              </span>{" "}
              {cursa}
            </h1>
            <h1 className="hover:text-[#A8A5BF] mt-10 font-bold ml-2">
              Informatii Cursa:
            </h1>
            <div className=" ml-6 space-y-1 mb-3">
              <p className="font-bolt">
                {" "}
                <span className="font-normal"> Ora start:</span> {oraStart}
              </p>
              <p className="font-bolt">
                {" "}
                <span className="font-normal">Distanta: </span> {distanta}{" "}
              </p>
              <p className="font-bolt">
                {" "}
                <span className="font-normal">Donatie minima: </span>{" "}
                {donatieMinima}{" "}
              </p>
            </div>
            <h1 className="hover:text-[#A8A5BF] mt-10">{descriere}</h1>

            <h1 className="mt-12 ml-3">
              <span>Vezi mai jos harta traseului!</span>
            </h1>

            <h1 className="font-bolt text-xl mt-8">
              <span className="font-normal">
                Pentru mai multe informații consultați{" "}
              </span>{" "}
              <a href={Regulament} target="_blank">
                regulamentul
              </a>{" "}
              <span className="font-normal"> ! </span>{" "}
            </h1>

            <div className="mt-10 h-[30rem] ml-1 w-1/2 ">
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
            <h1 className="text-center -ml-[20%] text-2xl font-bolt mt-4">
              {" "}
              <span className="font-normal font-source-code-pro text-2xl">
                Cursa -{" "}
              </span>{" "}
              {cursa}
            </h1>
            <h1 className="hover:text-[#A8A5BF] mt-10 font-bold -ml-2">
              Informatii Cursa:
            </h1>
            <div className=" space-y-1 mb-3 pl-6 -ml-4">
              <p className="font-bolt">
                {" "}
                <span className="font-normal"> Ora start:</span> {oraStart}
              </p>
              <p className="font-bolt">
                {" "}
                <span className="font-normal">Distanta: </span> {distanta}{" "}
              </p>
              <p className="font-bolt">
                {" "}
                <span className="font-normal">Donatie minima: </span>{" "}
                {donatieMinima}{" "}
              </p>
            </div>
            <h1 className="hover:text-[#A8A5BF] -ml-2 mt-10 leading-7">
              {descriere}
            </h1>

            <h1 className="mt-12 -ml-2">
              <span>Vezi mai jos harta traseului!</span>
            </h1>

            <h1 className="font-bolt text-lg mt-8 -ml-2">
              <span className="font-normal">
                Pentru mai multe informații consultați{" "}
              </span>{" "}
              regulamentul <span className="font-normal"> ! </span>{" "}
            </h1>

            <div className="mt-10 h-[250px] ml-1 w-[250px] ">
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
