import LocationPin from "../assets/pin.webp";
import AboutImage from "../assets/aboutimg.webp";

export default function AboutText() {
  return (
    <div className="mx-10 mt-28 md:mt-32 md:mx-20 lg:mx-60 lg:mt-36 xl:flex xl:items-center xl:justify-center">
      <div className="xl:flex xl:items-center xl:justify-between xl:w-full">
        <div className="xl:w-1/2 xl:pr-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1D1A3F] font-barlow-condensed font-bold leading-normal">
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
          <div className="flex items-center mt-6 md:mt-8">
            <img src={LocationPin} alt="Location Pin" className="w-4 md:w-6"/>
            <span className="ml-2 text-sm md:text-lg font-barlow font-semibold text-gray-800">
              Rectoratul UPB
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
        <div className="xl:w-1/2 xl:pl-10 xl:mt-8">
          <img
            src={AboutImage}
            alt="About Image"
            className="w-full h-auto my-20 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
