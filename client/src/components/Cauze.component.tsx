import Cauza from "../assets/Poza-1-crop-webp.webp";

export default function Cauze() {
  return (
    <div className="flex flex-col items-center p-8">
      <div className="space-y-8 w-full max-w-screen-md">
        <h1 className="text-4xl font-bold text-center mt-12 mb-8">Ionuț Frățilă</h1>
        <img className="rounded-lg mx-auto" src={Cauza} alt="Cauza" />
        <p className="text-gray-700 text-lg">
          După un efort de 5 ani de a avea copii, părea că viața soților Săvulescu începe
          să prindă culoare atunci când au aflat că vor avea tripleți. Fericirea nu a durat
          mult, căci cei 3 bebeluși s-au născut prematur, la doar 26 de săptămâni,
          cântărind câte 800 de grame. În urma nașterii, Andrei și Iselyn au fost
        </p>
        <p className="text-gray-700 text-lg">
          Dezvoltarea insuficientă și statul în incubator au rescris rapid povestea
          familiei, una dintre fetițe stingându-se. Ceilalți doi copii, Andrei și Iselyn, au
          continuat să lupte și fac asta de 9 ani încoace, fiind diagnosticați cu o serie de
           afecțiuni.
        </p>
        <p className="text-gray-700 text-lg">
          Iselyn, fetița al cărei zâmbet umple camera de lumină, suferă de dipareză
          spastică. Fratele său, Andrei, a trecut prin mai multe operații în străinătate,
          punându-i-se diagnostice precum paralizie cerebrală și dizabilitate
          intelectuală severă.
        </p>
        <p className="text-gray-700 text-lg">
          Destinele celor doi frați și șansa lor spre progres sunt condiționate de
          necesitatea unor operații ale căror costuri se ridică la 50.000 de euro.
        </p>
        <p className="text-gray-700 text-lg">
          Liga Studenților Electroniști sare în ajutorul familiei Săvulescu, hotărâtă să
          pună un zâmbet pe buzele celor doi copii. Voluntarii noștri dedicați sunt
          pregătiți să demonstreze, din nou, că o comunitate unită poate face lucruri
          minunate, în cadrul celei de-a șaisprezecea ediții a crosului caritabil
          “Aleargă Pentru Viață”.
          Haideți să ne mobilizăm împreună pentru șansa lui Andrei și a lui Iselyn de a
          alerga spre o viață normală, pe 11 Mai 2025, în Rectoratul Universității
          Naționale de Știință și Tehnologie Politehnica București!
        </p>
      </div>
      <div className="w-full max-w-screen-md bg-teal-400 bg-opacity-5 rounded-lg mt-16 mb-12 p-8 text-center">
        <p className="text-black font-bold">Doneaza petru:</p>
        <p className="text-teal-800 font-bold underline">Andrei si Iselyn Săvulescu</p>
        <a
          className="text-teal-800 hover:text-gray-500 duration-300"
          href="https://revolut.me/dianaradulescu16"
          target="_blank"
          rel="noopener noreferrer"
        >
          revolut.me/dianaradulescu16
        </a>
        <p className="text-black font-bold">
          IBAN:RO11 REVO 0000 1982 0905 0618
        </p>
        <p className="text-black text-sm hover:text-gray-700">
          La detalii de plată se vor menționa “DONAȚIE APV”, numele, prenumele 
          participantului care a efectuat donația.
        </p>
      </div>
    </div>
  );
}
