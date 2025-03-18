import Ionut from "../assets/testimonial6.webp";
export default function CauzaHome() {
  return (
    <>
      <div className="grid md:hidden place-items-center">
        <h2 className="text-3xl font-barlow-condensed font-bold leading-normal text-[#1D1A3F] mb-8">
          Cauza Aleargă Pentru Viață 2025{" "}
        </h2>
        <img
          src={Ionut}
          alt="Ionut"
          className="w-[85%] md:w-full object-cover rounded-lg"
        />
        <div>
          <p className="mx-8 mt-8 overflow-visible text-base font-normal leading-normal font-barlow text-custom-gray h-1/6 md:full">
            Ionuț Frățilă este un soț iubitor și tată devotat, pentru care
            familia reprezintă totul. Speranțele, planurile și visurile sale au
            fost spulberate brusc când, la doar 26 de ani, viața lui a luat o
            întorsătură dramatică.
          </p>
          <br />
          <p className="mx-8 mb-24 overflow-visible text-base font-normal leading-normal font-barlow text-custom-gray h-1/6 md:full">
            În data de 13 august 2023, destinul lui Ionuț s-a schimbat radical.
            Din cauza unei probleme de funcționare a mașinii, acesta a fost
            victima unui grav accident auto, rostogolindu-se cu mașina, în urma
            căruia a suferit un traumatism vertebro-medular cervical, rezultând
            compromiterea funcției motorii.
          </p>
        </div>
      </div>
      <div
        className="items-center justify-center hidden w-full h-screen mt-24 md:flex "
        style={{
          transition: "opacity 1.5s ease-in-out",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full max-w-screen-lg md:h-full md:flex-row">
          <div className="w-5/6 h-screen p-2 overflow-hidden rounded-lg md:w-1/3 md:h-full">
            <div className="flex justify-center rounded-lg ">
              <img
                src={Ionut}
                alt="Ionut"
                className="w-[70%] md:w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between w-full h-screen p-4 ml-4 text-black rounded-lg md:w-2/3">
            <div className="mb-10">
              <h2 className="text-lg font-semibold tracking-widest text-center text-custom-green">
                Cauza Aleargă Pentru Viață 2025{" "}
              </h2>
              <br />
              <span className="w-1/6 text-3xl font-bold text-black md:w-full">
                <p className="w-1/6 text-3xl font-bold text-center text-black  md:w-full">
                  Ionuț Frățilă
                </p>
              </span>
              <br />
              <p className="overflow-visible text-xl font-normal leading-normal font-barlow text-custom-gray h-1/6 md:full">
                Ionuț Frățilă este un soț iubitor și tată devotat, pentru care
                familia reprezintă totul. Speranțele, planurile și visurile sale
                au fost spulberate brusc când, la doar 26 de ani, viața lui a
                luat o întorsătură dramatică.
              </p>
              <p className="mt-12 overflow-visible text-xl font-normal leading-normal font-barlow text-custom-gray h-1/6 md:full">
                În data de 13 august 2023, destinul lui Ionuț s-a schimbat
                radical. Din cauza unei probleme de funcționare a mașinii,
                acesta a fost victima unui grav accident auto, rostogolindu-se
                cu mașina, în urma căruia a suferit un traumatism
                vertebro-medular cervical, rezultând compromiterea funcției
                motorii.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
