import React from 'react';
import LocationPin from '../assets/pin.png';
import AboutImage from '../assets/aboutimg.jpg';

export default function AboutText() {
  return (
    <div className="max-w-auto md:mx-50 flex text-custom-blue">
      <div className=''>
        <h2 className="md:text-5xl lg:text-5xl font-barlow-condensed leading-normal font-bold md:mt-40">
          CE ESTE ALEARGĂ PENTRU VIAȚĂ?
        </h2>
        <p className="md:text-base font-barlow font-normal leading-normal text-custom-gray md:mt-12">
          Având o tradiție de peste 13 ani, Aleargă Pentru Viață reprezintă un cros caritabil organizat de Liga Studenților Electroniști. Acesta este format din mai multe curse împărțite pe categorii de vârstă, la care participarea se face pe baza unei donații pentru o cauză umanitară.
        </p>

        <p className='md:text-base font-barlow font-normal leading-normal text-custom-gray mt-6'>
          Astfel, scopul evenimentului Aleargă Pentru Viață este de a da o mână de ajutor unei persoane care se confruntă cu o situație dificilă din punct de vedere medical, reușind să aducă un aport semnificativ pentru revenirea la o viață normală a acesteia.
        </p>

        <p className='text-base md:text-base font-barlow font-normal leading-normal text-custom-gray mt-6'>
          Prin intermediul acestui eveniment reușim atât să îi ajutăm pe cei aflați în dificultate, cât și să promovăm mișcarea și un stil de viață sănătos în rândul oamenilor din jurul nostru.
        </p>

        <div className="md:mt-8 flex items-center">
          <img src={LocationPin} className="md:w-5 h-auto"/>
          <span className="ml-2 text-base font-barlow font-semibold text-gray-800">Rectoratul UPB</span>
        </div>

        <button className="bg-[#006470] text-white font-semibold py-4 px-6 rounded-lg uppercase tracking-wide hover:bg-teal-500 focus:outline-none focus:ring transition duration-300 mt-8 w-[12rem]">
          Înscriere
        </button>

      </div>

      <div>
        <img src={AboutImage} className="lg:w-10/12 h-auto lg:mx-72 lg:my-40"/>
      </div>

    </div>
    

    
  );
}