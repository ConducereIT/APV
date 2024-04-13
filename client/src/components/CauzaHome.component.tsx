import Ionut from "../assets/testimonial6.webp";
export default function CauzaHome() {
  return (
    <>
      <div className="md:hidden grid place-items-center">
        <h2 className=" font-semibold text-teal-700 tracking-widest">
          Cauza Aleargă Pentru Viață 2024{" "}
        </h2>
        <h1 className=" text-2xl font-bold text-black hover:text-black mb-10">
          Ionuț Frățilă
        </h1>
        <img
          src={Ionut}
          alt="Ionut"
          className=" w-3/4 md:w-full h-full object-cover rounded-3xl"
        />
        <div>
          <p className="overflow-visible text-lg mx-10 mt-10 text-gray-700 hover:text-gray-700 h-1/6 md:full">
            Ionuț Frățilă este un soț iubitor și tată devotat, pentru care
            familia reprezintă totul. Speranțele, planurile și visurile sale au
            fost spulberate brusc când, la doar 26 de ani, viața lui a luat o
            întorsătură dramatică.
          </p>
          <br />
          <p className="overflow-visible mb-24 text-lg mx-10 text-gray-700 hover:text-gray-700 h-1/6 md:full">
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
        <div className=" h-full md:h-full max-w-screen-lg flex items-center justify-center flex-col md:flex-row">
          <div className="w-5/6 md:w-1/3 p-2 overflow-hidden h-screen md:h-full  rounded-lg">
            <div className=" rounded-lg flex justify-center">
              <img
                src={Ionut}
                alt="Ionut"
                className="w-[70%] md:w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
          <div className="w-full h-screen md:w-2/3 p-4 text-black flex flex-col justify-between rounded-lg ml-4">
            <div className="mb-10">
              <h2 className=" font-semibold text-teal-700 text-center tracking-widest">
                Cauza Aleargă Pentru Viață 2023{" "}
              </h2>
              <br />
              <span className="text-3xl text-black w-1/6 md:w-full font-bold">
                <p className=" text-3xl text-black w-1/6 text-center md:w-full font-bold">
                  Ionuț Frățilă
                </p>
              </span>
              <br />
              <p className="overflow-visible text-xl text-gray-700 hover:text-gray-700 h-1/6 md:full">
                Ionuț Frățilă este un soț iubitor și tată devotat, pentru care
                familia reprezintă totul. Speranțele, planurile și visurile sale
                au fost spulberate brusc când, la doar 26 de ani, viața lui a
                luat o întorsătură dramatică.
              </p>
              <p className="overflow-visible text-xl mt-10 text-gray-700 hover:text-gray-700 h-1/6 md:full">
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
