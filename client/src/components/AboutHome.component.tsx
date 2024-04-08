import React from "react";
import LocationPin from "../assets/pin.webp";
import AboutImgHome from "../assets/about.webp";

export default function AboutHome() {
  return (
    <div className="max-w-auto mx-10 mt-28 md:mt-6 md:mx-56 md:flex text-custom-blue">
      <div>
        <h1 className="text-base md:text-2xl tracking-wider font-barlow-condensed leading-normal text-custom-green font-semibold md:mt-40">
          DESPRE APV
        </h1>
        <h2 className="text-3xl md:text-5xl font-barlow-condensed leading-normal font-bold md:mt-3">
          ALEARGĂ PENTRU VIAȚĂ, CROS CARITABIL
        </h2>
        <h2 className="text-2xl md:text-5xl font-barlow-condensed leading-normal font-bold mt-4 md:mt-16">
          O TRADIȚIE DE 15 ANI
        </h2>
        <p className="text-base md:text-2xl font-barlow font-normal leading-normal text-custom-gray mt-8 md:mt-12">
          Crosul caritabil “Aleargă Pentru Viață” este cea mai mare competiție
          sportivă din București organizată exclusiv de studenți. În fiecare an
          își propune ca fiecare alergător care trece linia de sosire să
          trăiască o experiență de neuitat, îmbinând astfel mișcarea cu facerea
          unui bine.
        </p>

        <div className="mt-8 md:mt-12 flex items-center">
          <img src={LocationPin} alt="Location Pin" className="w-4 md:w-6" />
          <span className="ml-4 text-xl md:text-xl font-barlow font-semibold text-gray-800">
            Rectoratul UPB
          </span>
        </div>

        <button className="bg-[#006470] text-white font-bold py-2 px-4 md:py-4 md:px-3 rounded-lg uppercase tracking-wide hover:bg-teal-500 focus:outline-none focus:ring transition duration-300 mt-8 w-36 md:mt-16 md:w-44">
          Înscriere
        </button>
      </div>

      <div>
        <img
          src={AboutImgHome}
          alt="About Image"
          className="w-auto md:w-11/12 mr-6 my-20 md:mx-64 md:my-40"
        />
      </div>
    </div>
  );
}
