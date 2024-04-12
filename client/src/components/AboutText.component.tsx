import React from "react";
import LocationPin from "../assets/pin.webp";
import AboutImage from "../assets/aboutimg.webp";

export default function AboutText() {
  return (
    <div className="max-w-auto mx-10 mt-28 md:mt-6 md:mx-60 md:flex text-custom-blue">
      <div>
        <h2 className="md:text-5xl font-barlow-condensed leading-normal font-bold md:mt-40">
          CE ESTE ALEARGĂ PENTRU VIAȚĂ?
        </h2>
        <p className="text-sm md:text-base font-barlow font-normal leading-normal text-custom-gray mt-8 md:mt-12">
          Având o tradiție de peste 14 ani, Aleargă Pentru Viață reprezintă un
          cros caritabil organizat de Liga Studenților Electroniști. Acesta este
          format din mai multe curse împărțite pe categorii de vârstă, la care
          participarea se face pe baza unei donații pentru o cauză umanitară.
        </p>

        <p className="text-sm md:text-base font-barlow font-normal leading-normal text-custom-gray mt-4 md:mt-6">
          Astfel, scopul evenimentului Aleargă Pentru Viață este de a da o mână
          de ajutor unei persoane care se confruntă cu o situație dificilă din
          punct de vedere medical, reușind să aducă un aport semnificativ pentru
          revenirea la o viață normală a acesteia.
        </p>

        <p className="text-sm md:text-base font-barlow font-normal leading-normal text-custom-gray mt-4 md:mt-6">
          Prin intermediul acestui eveniment reușim atât să îi ajutăm pe cei
          aflați în dificultate, cât și să promovăm mișcarea și un stil de viață
          sănătos în rândul oamenilor din jurul nostru.
        </p>

        <div className="mt-6 md:mt-8 flex items-center">
          <img src={LocationPin} alt="Location Pin" className="w-4 md:w-5" />
          <span className="ml-2 text-sm md:text-lg font-barlow font-semibold text-gray-800">
            Rectoratul UPB
          </span>
        </div>

        <button className="bg-[#006470] text-white font-semibold py-2 px-4 md:py-4 md:px-6 rounded-lg uppercase tracking-wide hover:bg-teal-500 focus:outline-none focus:ring transition duration-300 mt-8 w-[10rem] md:mt-10 md:w-[12rem]">
          Înscriere
        </button>
      </div>

      <div>
        <img
          src={AboutImage}
          alt="About Image"
          className="w-auto md:w-10/12 mr-10  my-20 md:mx-72 md:my-40 rounded-lg "
        />
      </div>
    </div>
  );
}
