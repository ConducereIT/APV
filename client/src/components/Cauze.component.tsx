import Cauza from "../assets/Poza-1-crop-webp.webp";

export default function Cauze() {
  return (
    <div className="flex flex-col items-center p-8">
      <div className="space-y-8 w-full max-w-screen-md">
        <h1 className="text-4xl font-bold text-center mt-12 mb-8">Andrei și Iselyn Săvulescu</h1>
        <img className="rounded-lg mx-auto" src={Cauza} alt="Cauza" />
        <p className="text-gray-700 text-lg">
          După <b> un efort de 5 ani</b> de a avea copii, părea că viața soților Săvulescu începe
          să prindă culoare atunci când au aflat că vor avea <b>tripleți</b>. Fericirea nu a durat
          mult, căci cei 3 bebeluși s-au născut <b>prematur</b>, la doar 26 de săptămâni,
          cântărind câte <b>800 de grame</b>.
        </p>
        <p className="text-gray-700 text-lg">
          <b>Dezvoltarea insuficientă și statul în incubator</b> au rescris rapid povestea
          familiei, <b>una dintre fetițe stingându-se</b>. Ceilalți doi copii, <b>Andrei și Iselyn</b>, au
          continuat <b>să lupte</b> și fac asta <b>de 9 ani</b> încoace, fiind diagnosticați cu o serie de
           afecțiuni.
        </p>
        <p className="text-gray-700 text-lg">
          <b>Iselyn</b>, fetița al cărei zâmbet umple camera de lumină, suferă de dipareză
          spastică. Fratele său, <b>Andrei</b>, a trecut prin mai multe operații în străinătate,
          punându-i-se diagnostice precum <b>paralizie cerebrală</b> și <b>dizabilitate
          intelectuală severă</b>.
        </p>
        <p className="text-gray-700 text-lg">
          Destinele celor doi frați și șansa lor spre progres sunt condiționate de
          necesitatea unor operații ale căror costuri se ridică la <b>50.000 de euro</b>.
        </p>
        <p className="text-gray-700 text-lg">
          <b>Liga Studenților Electroniști</b> sare în ajutorul familiei Săvulescu, hotărâtă să
          pună un zâmbet pe buzele celor doi copii. <b>Voluntarii noștri</b> dedicați sunt
          pregătiți să demonstreze, din nou, că o comunitate unită poate face lucruri
          minunate, în cadrul celei de-a șaisprezecea ediții a crosului caritabil
          <b>“Aleargă Pentru Viață”</b>.
          Haideți să ne mobilizăm împreună pentru șansa lui Andrei și a lui Iselyn de a
          alerga spre o viață normală, pe <b>11 Mai 2025</b>, în <b>Rectoratul Universității
          Naționale de Știință și Tehnologie Politehnica București</b>!
        </p>
      </div>
      <div className="w-full max-w-screen-md bg-teal-400 bg-opacity-5 rounded-lg mt-16 mb-12 p-8 text-center">
        <p className="text-black font-bold">Doneaza pentru:</p>
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
