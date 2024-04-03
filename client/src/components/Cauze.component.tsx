import React from "react";
import Cauza from "../assets/testimonial6.jpg";
export default function Cauze() {
  return (
    <>
      <div className=" md:hidden mb-12">
        <h1 className="text-black text-4xl font-bold flex justify-center text-center mt-36 ">
          Ionuț Frățilă
        </h1>
        <div className=" max-w-screen-md px-8 mt-12">
          <img className="rounded-lg" src={Cauza} alt="Cauza" />
        </div>
        <p className="text-gray-700 px-8 flex justify-center text-left mt-8">
          Ionuț Frățilă este un soț iubitor și tată devotat, pentru care familia
          reprezintă totul. Speranțele, planurile și visurile sale au fost
          spulberate brusc când, la doar 26 de ani, viața lui a luat o
          întorsătură dramatică.
        </p>
        <p className="text-gray-700 px-8 flex justify-center mt-8">
          În data de 13 august 2023, destinul lui Ionuț s-a schimbat radical.
          Din cauza unei probleme de funcționare a mașinii, acesta a fost
          victima unui grav accident auto, rostogolindu-se cu mașina, în urma
          căruia a suferit un traumatism vertebro-medular cervical, rezultând
          compromiterea funcției motorii.
        </p>
        <p className="text-gray-700 px-8 flex justify-center mt-8">
          A urmat o perioadă grea pentru Ionuț : nu putea să vorbească, era
          imobilizat la pat și nu își putea simți membrele. Cu ajutorul
          kinetoterapeuților și al spiritului său de luptător, a făcut progrese
          în recuperarea sa, fiind din nou capabil să vorbească, să își
          mobilizeze mâinile și picioarele și chiar să bea singur suc din
          sticlă, lucruri care pentru noi pot părea banale.
        </p>
        <p className="text-gray-700 px-8 flex justify-center mt-8">
          Evoluția lui Ionuț este condiționată de necesitatea unor tratamente
          care depășesc posibilitățile familiei sale: costul recuperării ajunge
          la suma de 23.000 de lei pe lună.
        </p>
        <p className="text-gray-700 px-8 flex justify-center mt-8">
          Liga Studenților Electroniști, motivată de lupta purtată de Ionuț,
          vine în sprijinul său. Cei peste 200 de voluntari își unesc forțele în
          cadrul celei de-a cincisprezecea ediții a crosului caritabil “Aleargă
          Pentru Viață”. Fii și tu parte din oamenii care aduc o schimbare în
          viața lui Ionuț și vino să alergi împreună cu noi pe 12 Mai 2024 în
          Rectoratul Universității Politehnica din București, deoarece suntem
          “Mai puternici împreună!”
        </p>
        <div className=" grid grid-rows-1 place-items-center mt-10 bg-teal-400 bg-opacity-5">
          <img
            className="border border-transparent shadow-xl my-8 rounded-full w-32 h-32   "
            src={Cauza}
            alt="Cauza"
          />
          <p className=" text-black font-bold">Donează şi tu!</p>
          <p className=" text-teal-800 font-bold underline">Ionuț Frățilă</p>
          <br />
          <p className=" text-teal-800 font-bold">
            <span className="text-black">Cont Revolut:{"  "}</span>
            <a
              className="text-teal-800 hover:text-gray-500 duration-300"
              href="https://revolut.me/cesare99b7"
              target="_blank"
            >
              revolut.me/cesare99b7
            </a>{" "}
          </p>
          <p className="text-black font-bold">
            {" "}
            IBAN: RO71 BREL 0005 5053 5195 0100{" "}
          </p>
          <br />
          <p className="text-black text-center text-sm hover:text-gray-700 px-8 mb-20">
            {" "}
            La detalii de plată se vor menționa “DONAȚIE APV”, numele, prenumele
            participantului care a efectuat donația.{" "}
          </p>
        </div>
      </div>
      <div className="hidden mt-36 gap-4 md:flex justify-between mx-24">
        <div className="w-1/2 flex justify-center">
          <img
            className="m-8 rounded-lg md:max-w-screen-sm h-auto"
            src={Cauza}
            alt="Cauza"
          />
        </div>
        <div className=" w-1/2">
          <h1 className="text-4xl font-bold text-black text-center">
            Ionuț Frățilă
          </h1>
          <p className="mt-12 text-gray-700 lg:text-xl 3xl:text-3xl ">
            {" "}
            Ionuț Frățilă{" "}
            <span className="text-gray-700 hover:text-gray-700">
              {" "}
              este un soț iubitor și tată devotat, pentru care familia
              reprezintă totul. Speranțele, planurile și visurile sale au fost
              spulberate brusc când, la doar 26 de ani, viața lui a luat o
              întorsătură dramatică.
            </span>
          </p>
          <p className="mt-12 text-gray-700 lg:text-xl 3xl:text-3xl">
            <span className="text-gray-700 hover:text-gray-700">
              În data de 13 august 2023, destinul lui
            </span>{" "}
            Ionuț{" "}
            <span className="text-gray-700 hover:text-gray-700">
              s-a schimbat radical. Din cauza unei probleme de funcționare a
              mașinii, acesta a fost victima unui grav accident auto,
              rostogolindu-se cu mașina, în urma căruia a suferit un traumatism
              vertebro-medular cervical, rezultând compromiterea funcției
              motorii.
            </span>
          </p>
          <br />
          <p className="hidden md:flex justify-center text-gray-700 lg:text-xl 3xl:text-3xl  ">
            <div>
              <span className="text-gray-700 hover:text-gray-700">
                A urmat o perioadă grea pentru{" "}
              </span>
              Ionuț
              <span className="text-gray-700 hover:text-gray-700">
                : nu putea să vorbească, era imobilizat la pat și nu își putea
                simți membrele. Cu ajutorul kinetoterapeuților și al spiritului
                său de luptător, a făcut progrese în recuperarea sa, fiind din
                nou capabil să vorbească, să își mobilizeze mâinile și
                picioarele și chiar să bea singur suc din sticlă, lucruri care
                pentru noi pot părea banale.
              </span>
            </div>
          </p>
          <p className="mt-12  text-gray-700 lg:text-xl 3xl:text-3xl ">
            <div>
              <span className="text-gray-700 hover:text-gray-700">
                Evoluția lui{" "}
              </span>
              Ionuț
              <span className="text-gray-700 hover:text-gray-700">
                {" "}
                este condiționată de necesitatea unor tratamente care depășesc
                posibilitățile familiei sale: costul recuperării ajunge la suma
                de 23.000 de lei pe lună.
              </span>
            </div>
          </p>
          <br />
          <p className=" hidden md:flex justify-center text-gray-700 lg:text-xl 3xl:text-3xl ">
            <div>
              Liga Studenților Electroniști
              <span className="text-gray-700 hover:text-gray-700">
                , motivată de lupta purtată de Ionuț, vine în sprijinul său. Cei
                peste 200 de voluntari își unesc forțele în cadrul celei de-a
                cincisprezecea ediții a crosului caritabil “Aleargă Pentru
                Viață”. Fii și tu parte din oamenii care aduc o schimbare în
                viața lui
              </span>{" "}
              Ionuț{" "}
              <span className="text-gray-700 hover:text-gray-700">
                și vino să alergi împreună cu noi pe 12 Mai 2024 în Rectoratul
                Universității Politehnica din București, deoarece suntem “Mai
                puternici împreună!”
              </span>
            </div>
          </p>
        </div>
      </div>

      <div className=" hidden md:grid grid-cols-10 place-items-center mx-40 p-8 bg-teal-400 bg-opacity-5 rounded-lg mt-12 mb-24">
        <div className=" max-w-1/2 col-span-2  ">
          <img
            className="border border-transparent shadow-xl my-8 mr-8 rounded-full h-auto max-w-32  -mt-2"
            src={Cauza}
            alt="Cauza"
          />
        </div>
        <div className=" col-span-5 font-bold">
          <p className="text-gray-700 hover:text-gray-700 ">Donează şi tu!</p>
          <p className=" text-teal-800 hover:text-teal-800 font-bold underline">
            Ionuț Frățilă
          </p>
          <br />
          <p>
            <span className="text-gray-700 hover:text-gray-700">
              Cont Revolut:{" "}
            </span>
            <a
              className="text-teal-800 hover:text-gray-500 duration-300"
              href="https://revolut.me/cesare99b7"
              target="_blank"
            >
              revolut.me/cesare99b7
            </a>{" "}
          </p>
          <br />
          <p className="text-gray-700 hover:text-gray-700">
            {" "}
            IBAN: RO71 BREL 0005 5053 5195 0100{" "}
          </p>
          <br />
          <p className="text-gray-700 hover:text-gray-700">
            {" "}
            La detalii de plată se vor menționa “DONAȚIE APV”, numele, prenumele
            participantului care a efectuat donația.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
