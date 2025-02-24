import LocationPin from "../assets/pin.webp";
import AboutImage from "../assets/aboutimg.webp";

export default function AboutText() {
  return (
    <div className="mx-10 mt-28 md:mt-32 md:mx-20 lg:mx-60 lg:mt-36 lg:flex lg:flex-wrap lg:justify-center">
      <div className="lg:flex lg:flex-col lg:justify-center lg:items-start lg:w-1/2 lg:pr-8">
        <h2 className="text-2xl md:text-3xl lg:text-5xl text-[#1D1A3F] font-barlow-condensed font-bold leading-normal">
          CE ESTE ALEARGĂ PENTRU VIAȚĂ?
        </h2>
        <p className="text-sm md:text-base lg:text-lg font-barlow font-normal text-custom-gray mt-8 lg:mt-14">
          Având o tradiție de peste 16 ani, Aleargă Pentru Viață reprezintă un
          cros caritabil organizat de Liga Studenților Electroniști. Acesta este
          format din mai multe curse împărțite pe categorii de vârstă, la care
          participarea se face pe baza unei donații pentru o cauză umanitară.
        </p>
        <p className="text-sm md:text-base lg:text-lg font-barlow font-normal leading-normal text-custom-gray mt-4 md:mt-6">
          Astfel, scopul evenimentului Aleargă Pentru Viață este de a da o mână
          de ajutor unei persoane care se confruntă cu o situație dificilă din
          punct de vedere medical, reușind să aducă un aport semnificativ pentru
          revenirea la o viață normală a acesteia.
        </p>
        <p className="text-sm md:text-base lg:text-lg font-barlow font-normal leading-normal text-custom-gray mt-4 md:mt-6">
          Prin intermediul acestui eveniment reușim atât să îi ajutăm pe cei
          aflați în dificultate, cât și să promovăm mișcarea și un stil de viață
          sănătos în rândul oamenilor din jurul nostru.
        </p>
        <div className="flex items-center mt-6 md:mt-8">
          <img src={LocationPin} alt="Location Pin" className="w-4 md:w-6"/>
          <span className="ml-2 text-sm md:text-lg font-barlow font-semibold text-gray-800">
            Rectoratul UNSTPB
          </span>
        </div>
        <button
          className="bg-[#006470] text-white font-semibold py-2 px-4 md:py-4 md:px-6 rounded-lg uppercase tracking-wide hover:bg-teal-500 focus:outline-none focus:ring transition duration-300 mt-8 w-[10rem] md:w-[12rem]"
          onClick={() => {
            window.location.href = "/cauza";
          }}>
          Cauza
        </button>
      </div>
      <div className="lg:flex lg:items-center lg:justify-center lg:w-1/2 lg:pl-8 mt-10 lg:mt-8">
        <img
          src={AboutImage}
          alt="About Image"
          className="w-auto md:w-11/12 mr-6 md:mr-40 my-20 md:mx-64 md:my-40 rounded-lg"
        />
      </div>
    </div>
  );
}
