import React from 'react'

export default function AboutText() {
  return (
    <div className="max-w-4xl mx-52 p-4 md:p-8 text-custom-blue">
        <div className='w-1/2'>
        <h2 className="text-2xl md:text-4xl lg:text-4xl font-barlow-condensed leading-normal font-bold mt-40">
            CE ESTE ALEARGĂ PENTRU VIAȚĂ?
        </h2>
        <p className="text-base md:text-base font-barlow font-normal leading-normal text-custom-gray mt-10"> 
          Având o tradiție de peste 13 ani, Aleargă Pentru Viață reprezintă un cros caritabil organizat de Liga Studenților Electroniști. Acesta este format din mai multe curse împărțite pe categorii de vârstă, la care participarea se face pe baza unei donații pentru o cauză umanitară.
        </p>
       

        <p className='text-base md:text-base font-barlow font-normal leading-normal text-custom-gray mt-8'>
          Astfel, scopul evenimentului Aleargă Pentru Viață este de a da o mână de ajutor unei persoane care se confruntă cu o situație dificilă din punct de vedere medical, reușind să aducă un aport semnificativ pentru revenirea la o viață normală a acesteia.
        </p>

        <p className='text-base md:text-base font-barlow font-normal leading-normal text-custom-gray mt-8'>
          Prin intermediul acestui eveniment reușim atât să îi ajutăm pe cei aflați în dificultate, cât și să promovăm mișcarea și un stil de viață sănătos în rândul oamenilor din jurul nostru.
        </p>

        </div>
        
        <button className="bg-[#006470] text-white font-semibold py-2 px-6 rounded-lg uppercase tracking-wide hover:bg-teal-500 focus:outline-none focus:ring transition duration-300 mt-10">
      Înscriere
    </button>


    </div>
  )
}
