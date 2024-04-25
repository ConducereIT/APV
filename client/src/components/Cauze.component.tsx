import Cauza from "../assets/testimonial6.webp";

export default function Cauze() {
  return (
    <div className="flex flex-col items-center p-8">
      <div className="space-y-8 w-full max-w-screen-md">
        <h1 className="text-4xl font-bold text-center mt-12 mb-8">Ionuț Frățilă</h1>
        <img className="rounded-lg mx-auto" src={Cauza} alt="Cauza" />
        <p className="text-gray-700 text-lg">
          Ionuț Frățilă este un soț iubitor și tată devotat, pentru care familia
          reprezintă totul. Speranțele, planurile și visurile sale au fost
          spulberate brusc când, la doar 26 de ani, viața lui a luat o
          întorsătură dramatică.
        </p>
        <p className="text-gray-700 text-lg">
          În data de 13 august 2023, destinul lui Ionuț s-a schimbat radical.
          Din cauza unei probleme de funcționare a mașinii, acesta a fost
          victima unui grav accident auto, rostogolindu-se cu mașina, în urma
          căruia a suferit un traumatism vertebro-medular cervical, rezultând
          compromiterea funcției motorii.
        </p>
        <p className="text-gray-700 text-lg">
          A urmat o perioadă grea pentru Ionuț: nu putea să vorbească, era
          imobilizat la pat și nu își putea simți membrele. Cu ajutorul
          kinetoterapeuților și al spiritului său de luptător, a făcut progrese
          în recuperarea sa, fiind din nou capabil să vorbească, să își
          mobilizeze mâinile și picioarele și chiar să bea singur suc din
          sticlă, lucruri care pentru noi pot părea banale.
        </p>
        <p className="text-gray-700 text-lg">
          Evoluția lui Ionuț este condiționată de necesitatea unor tratamente
          care depășesc posibilitățile familiei sale: costul recuperării ajunge
          la suma de 23.000 de lei pe lună.
        </p>
        <p className="text-gray-700 text-lg">
          Liga Studenților Electroniști, motivată de lupta purtată de Ionuț,
          vine în sprijinul său. Cei peste 200 de voluntari își unesc forțele în
          cadrul celei de-a cincisprezecea ediții a crosului caritabil “Aleargă
          Pentru Viață”. Fii și tu parte din oamenii care aduc o schimbare în
          viața lui Ionuț și vino să alergi împreună cu noi pe 12 mai 2024 în
          Rectoratul Universității Politehnica din București, deoarece suntem
          “Mai puternici împreună!”
        </p>
      </div>
      <div className="w-full max-w-screen-md bg-teal-400 bg-opacity-5 rounded-lg mt-16 mb-12 p-8 text-center">
        <p className="text-black font-bold">Donează şi tu!</p>
        <p className="text-teal-800 font-bold underline">Ionuț Frățilă</p>
        <a
          className="text-teal-800 hover:text-gray-500 duration-300"
          href="https://revolut.me/cesare99b7"
          target="_blank"
          rel="noopener noreferrer"
        >
          revolut.me/cesare99b7
        </a>
        <p className="text-black font-bold">
          IBAN: RO71 BREL 0005 5053 5195 0100
        </p>
        <p className="text-black text-sm hover:text-gray-700">
          La detalii de plată se vor menționa “DONAȚIE APV”, numele, prenumele 
          participantului care a efectuat donația.
        </p>
      </div>
    </div>
  );
}
