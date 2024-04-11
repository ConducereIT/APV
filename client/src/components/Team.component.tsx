
import TeamImage from "../assets/team.webp";

export default function Team() {
  return (
    <div
      id="team"
      className="max-w-auto mx-10 mt-32 md:mx-60 md:flex text-custom-blue"
    >
      <div>
        <h2 className="md:text-5xl font-barlow-condensed leading-normal font-bold md:mt-40">
          Echipa
        </h2>

        <p className="text-sm md:text-xl font-barlow font-bold leading-normal text-custom-green mt-8 md:mt-12">
          „MUNCA ÎN ECHIPĂ ESTE SURSA CE LE PERMITE OAMENILOR OBIȘNUIȚI SĂ
          ATINGĂ REZULTATE NEOBIȘNUITE.”
        </p>

        <p className="text-sm md:text-xl font-barlow font-normal leading-normal text-custom-gray mt-4 md:mt-6">
          Prin intermediul evenimentului “Aleargă Pentru Viață” se distinge
          munca în echipă depusă de voluntarii Departamentului Sportiv al Ligii
          Studenților Electroniști, fără de care toate aceste reușite nu ar fi
          posibile.
        </p>

        <p className="text-sm md:text-xl font-barlow font-normal leading-normal text-custom-gray mt-4 md:mt-6">
          În fiecare an, studenții voluntari își doresc ca totul să iasă
          perfect, așa că pasiunea și aspirația cu care aceștia organizează
          evenimentul sunt intense. Cu toții lucrează împreună concentrându-se
          pe obiectivul final, iar efortul depus de fiecare în parte duce spre
          atingerea unor niveluri de înaltă performanță.
        </p>
      </div>

      <div>
        <img
          src={TeamImage}
          alt="Team Image"
          className="w-auto md:w-10/12 mr-10  my-20 md:mx-72 md:my-40 rounded-lg"
        />
      </div>
    </div>
  );
}
