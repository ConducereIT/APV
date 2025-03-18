import cauza from "../assets/Poza-1-crop-webp.webp";
export default function CauzaHome() {
  return (
    <>
      <div className="md:hidden grid place-items-center">
        <h2 className="text-3xl font-barlow-condensed font-bold leading-normal text-[#1D1A3F] mb-8">
          Cauza Aleargă Pentru Viață 2024{" "}
        </h2>
        <img
          src={cauza}
          alt="cauza"
          className="w-[85%] md:w-full object-cover rounded-lg"
        />
        <div>
          <p className="overflow-visible text-base font-barlow font-normal leading-normal mx-8 text-custom-gray mt-8 h-1/6 md:full">
            Ionuț Frățilă este un soț iubitor și tată devotat, pentru care
            familia reprezintă totul. Speranțele, planurile și visurile sale au
            fost spulberate brusc când, la doar 26 de ani, viața lui a luat o
            întorsătură dramatică.
          </p>
          <br />
          <p className="overflow-visible mb-24 text-base font-barlow font-normal leading-normal mx-8 text-custom-gray h-1/6 md:full">
            În data de 13 august 2023, destinul lui Ionuț s-a schimbat radical.
            Din cauza unei probleme de funcționare a mașinii, acesta a fost
            victima unui grav accident auto, rostogolindu-se cu mașina, în urma
            căruia a suferit un traumatism vertebro-medular cervical, rezultând
            compromiterea funcției motorii.
          </p>
        </div>
      </div>
      <div
        className="hidden w-full h-screen md:flex items-center mt-24 justify-center "
        style={{
          transition: "opacity 1.5s ease-in-out",
        }}
      >
        <div className="h-full md:h-full max-w-screen-lg flex items-center justify-center flex-col md:flex-row">
          <div className="w-5/6 md:w-1/3 p-2 overflow-hidden h-screen md:h-full rounded-lg">
            <div className=" rounded-lg flex justify-center">
              <img
                src={cauza}
                alt="cauza"
                className="w-[70%] md:w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="w-full h-screen md:w-2/3 p-4 text-black flex flex-col justify-between rounded-lg ml-4">
            <div className="mb-10">
              <h2 className="text-lg font-semibold text-custom-green text-center tracking-widest">
                Cauza Aleargă Pentru Viață 2025{" "}
              </h2>
              <br />
              <span className="text-3xl text-black w-1/6 md:w-full font-bold">
                <p className=" text-3xl text-black w-1/6 text-center md:w-full font-bold">
                Andrei si Iselyn Săvulescu
                </p>
              </span>
              <br />
              <p className="overflow-visible  font-barlow font-normal leading-normal text-custom-gray text-xl h-1/6 md:full">
                După 5 ani de așteptare, familia Săvulescu a primit
                vestea că vor avea tripleți. Din păcate, bebelușii s-au
                născut prematur, la 26 de săptămâni, cântărind doar 800
                g. Pierderea uneia dintre fetițe a fost devastatoare, iar
                lupta a continuat pentru Andrei și Iselyn.
              </p>
              <p className="overflow-visible font-barlow font-normal leading-normal text-xl text-custom-gray mt-12 h-1/6 md:full">
                
                Andrei a trecut prin multiple operații, fiind diagnosticat cu
                paralizie cerebrală și dizabilitate intelectuală severă.
                Iselyn, mereu cu zâmbetul pe buze, suferă de dipareză
                spastică. De 9 ani, acești copii curajoși și părinții lor nu
                renunță la speranță.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
