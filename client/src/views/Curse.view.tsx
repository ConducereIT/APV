import { useParams } from "react-router-dom";
import { Header } from "../components/Header.component";
import CurseComponent from "../components/Curse.component";

export interface CurseValide {
  numeCurse: string;
  interfata?: {
    cursa: string;
    oraStart: string;
    distanta: string;
    donatieMinima: string;
    descriere?: string;
    urlHarta?: string;
  };
}

const curseArr: CurseValide[] = [
  {
    numeCurse: "allforone",
    interfata: {
      cursa: "All For One",
      oraStart: "11 : 30",
      distanta: "400 M",
      donatieMinima: "OPTIONAL",
      descriere:
        "Cursa All For One este o tură populară, necompetitivă, perfectă pentru cei care vor să facă mișcare în natură pe o distanță accesibilă. Aceasta se adresează tuturor persoanelor, de orice vârstă sau gen, chiar și persoanelor cu dizabilități.",
      urlHarta:
        "https://www.google.com/maps/embed?pb=!1m42!1m12!1m3!1d1051.7564164316468!2d26.050924936618955!3d44.43943916368305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m27!3e2!4m5!1s0x40b201c187a44aeb%3A0x776c5045f461c6b0!2sBucure%C5%9Fti%20Sectorul%206%2C%20Bucure%C8%99ti%20061344!3m2!1d44.4396542!2d26.052221199999998!4m3!3m2!1d44.439018999999995!2d26.0515156!4m3!3m2!1d44.4397981!2d26.051081699999997!4m3!3m2!1d44.4400312!2d26.0518355!4m3!3m2!1d44.4399332!2d26.0523311!4m3!3m2!1d44.4396554!2d26.052215!5e0!3m2!1sro!2sro!4v1679949014977!5m2!1sro!2sro",
    },
  },
  {
    numeCurse: "kids",
    interfata: {
      cursa: "Copii până la 12 ani",
      oraStart: "11 : 10",
      distanta: "800 M (2 x 400 M)",
      donatieMinima: "25 RON",
      urlHarta:
        "https://www.google.com/maps/embed?pb=!1m42!1m12!1m3!1d1051.7564164316468!2d26.050924936618955!3d44.43943916368305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m27!3e2!4m5!1s0x40b201c187a44aeb%3A0x776c5045f461c6b0!2sBucure%C5%9Fti%20Sectorul%206%2C%20Bucure%C8%99ti%20061344!3m2!1d44.4396542!2d26.052221199999998!4m3!3m2!1d44.439018999999995!2d26.0515156!4m3!3m2!1d44.4397981!2d26.051081699999997!4m3!3m2!1d44.4400312!2d26.0518355!4m3!3m2!1d44.4399332!2d26.0523311!4m3!3m2!1d44.4396554!2d26.052215!5e0!3m2!1sro!2sro!4v1679949014977!5m2!1sro!2sro",
    },
  },
  {
    numeCurse: "1016feminin",
    interfata: {
      cursa: "Feminin 13-17 ani",
      oraStart: "10 : 00",
      distanta: "1.5 KM ",
      donatieMinima: "25 RON",
      urlHarta:
        "https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d3483.352621954683!2d26.050829253729983!3d44.439211413364376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e2!4m3!3m2!1d44.4396103!2d26.0522039!4m3!3m2!1d44.4381681!2d26.050919399999998!4m3!3m2!1d44.4384337!2d26.0495348!4m3!3m2!1d44.4380229!2d26.049386!4m3!3m2!1d44.4382623!2d26.052127199999997!4m3!3m2!1d44.4378919!2d26.054241599999997!4m3!3m2!1d44.4401511!2d26.054354099999998!4m3!3m2!1d44.4406209!2d26.0526061!4m3!3m2!1d44.4396213!2d26.0522083!5e0!3m2!1sro!2sro!4v1712676722838!5m2!1sro!2sro",
    },
  },
  {
    numeCurse: "1016masculin",
    interfata: {
      cursa: "Masculin 13-17 ani",
      oraStart: "10 : 20",
      distanta: "1.5 KM",
      donatieMinima: "25 RON",
      urlHarta:
        "https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d3483.352621954683!2d26.050829253729983!3d44.439211413364376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e2!4m3!3m2!1d44.4396103!2d26.0522039!4m3!3m2!1d44.4381681!2d26.050919399999998!4m3!3m2!1d44.4384337!2d26.0495348!4m3!3m2!1d44.4380229!2d26.049386!4m3!3m2!1d44.4382623!2d26.052127199999997!4m3!3m2!1d44.4378919!2d26.054241599999997!4m3!3m2!1d44.4401511!2d26.054354099999998!4m3!3m2!1d44.4406209!2d26.0526061!4m3!3m2!1d44.4396213!2d26.0522083!5e0!3m2!1sro!2sro!4v1712676722838!5m2!1sro!2sro",
    },
  },
  {
    numeCurse: "1735feminin",
    interfata: {
      cursa: "Feminin 18-35 ani",
      oraStart: "12 : 00",
      distanta: "4 KM (2 X 2 KM)",
      donatieMinima: "50 RON",
      urlHarta:
        "https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d1359.0739952763695!2d26.051536155519436!3d44.4381565085272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e2!4m3!3m2!1d44.4372435!2d26.047853099999998!4m3!3m2!1d44.4392806!2d26.047387!4m3!3m2!1d44.4388363!2d26.0495043!4m3!3m2!1d44.438002399999995!2d26.051835699999998!4m3!3m2!1d44.440619999999996!2d26.0526777!4m3!3m2!1d44.4378836!2d26.054248899999997!4m3!3m2!1d44.4377256!2d26.051095999999998!4m3!3m2!1d44.4380264!2d26.0493903!4m3!3m2!1d44.4372292!2d26.0480509!5e0!3m2!1sro!2sro!4v1679944496994!5m2!1sro!2sro",
    },
  },
  {
    numeCurse: "1735masculin",
    interfata: {
      cursa: "Masculin 18-35 ani",
      oraStart: "13 : 00",
      distanta: "4 KM (2 X 2 KM)",
      donatieMinima: "50 RON",
      urlHarta:
        "https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d1359.0739952763695!2d26.051536155519436!3d44.4381565085272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e2!4m3!3m2!1d44.4372435!2d26.047853099999998!4m3!3m2!1d44.4392806!2d26.047387!4m3!3m2!1d44.4388363!2d26.0495043!4m3!3m2!1d44.438002399999995!2d26.051835699999998!4m3!3m2!1d44.440619999999996!2d26.0526777!4m3!3m2!1d44.4378836!2d26.054248899999997!4m3!3m2!1d44.4377256!2d26.051095999999998!4m3!3m2!1d44.4380264!2d26.0493903!4m3!3m2!1d44.4372292!2d26.0480509!5e0!3m2!1sro!2sro!4v1679944496994!5m2!1sro!2sro",
    },
  },
  {
    numeCurse: "35masculin",
    interfata: {
      cursa: "Masculin 35+ ani",
      oraStart: "15 : 00",
      distanta: " 3 KM (2 x 1.5 KM)",
      donatieMinima: "50 RON",
      urlHarta:
        "https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d3483.352621954683!2d26.050829253729983!3d44.439211413364376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e2!4m3!3m2!1d44.4396103!2d26.0522039!4m3!3m2!1d44.4381681!2d26.050919399999998!4m3!3m2!1d44.4384337!2d26.0495348!4m3!3m2!1d44.4380229!2d26.049386!4m3!3m2!1d44.4382623!2d26.052127199999997!4m3!3m2!1d44.4378919!2d26.054241599999997!4m3!3m2!1d44.4401511!2d26.054354099999998!4m3!3m2!1d44.4406209!2d26.0526061!4m3!3m2!1d44.4396213!2d26.0522083!5e0!3m2!1sro!2sro!4v1712676722838!5m2!1sro!2sro",
    },
  },
  {
    numeCurse: "35feminin",
    interfata: {
      cursa: "Feminin 35+ ani",
      oraStart: "14 : 10",
      distanta: " 3 KM (2 x 1.5)",
      donatieMinima: "50 RON",
      urlHarta:
        "https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d3483.352621954683!2d26.050829253729983!3d44.439211413364376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e2!4m3!3m2!1d44.4396103!2d26.0522039!4m3!3m2!1d44.4381681!2d26.050919399999998!4m3!3m2!1d44.4384337!2d26.0495348!4m3!3m2!1d44.4380229!2d26.049386!4m3!3m2!1d44.4382623!2d26.052127199999997!4m3!3m2!1d44.4378919!2d26.054241599999997!4m3!3m2!1d44.4401511!2d26.054354099999998!4m3!3m2!1d44.4406209!2d26.0526061!4m3!3m2!1d44.4396213!2d26.0522083!5e0!3m2!1sro!2sro!4v1712676722838!5m2!1sro!2sro",
    },
  },
];

export function getCurseName(): string[] {
  const numeCurs: string[] = curseArr.map((cursa) => cursa.numeCurse);

  return numeCurs;
}

export function getCurse(): CurseValide[] {
  return curseArr;
}

interface RouteParams {
  numeCursa: string;
  [key: string]: string | undefined;
}

const Curse = () => {
  const { numeCursa } = useParams<RouteParams>();

  const cursa: CurseValide | undefined = curseArr.find(
    (cursa) => cursa.numeCurse === numeCursa
  );

  if (cursa === undefined) {
    return <div>Cursa nu a fost găsită!</div>;
  }

  return (
    <div>
      <Header />
      <div className="md:block hidden bg-slate-100 rounded-xl  mt-48 max-w-[80rem] mx-auto max-h-[160vh]">
        <CurseComponent {...cursa} />
      </div>
      <div className="md:hidden block bg-slate-100 rounded-xl mt-28 max-w-[80rem] mx-auto max-h-[260vh]">
        <CurseComponent {...cursa} />
        <br className="mt-[12rem]" />
      </div>
    </div>
  );
};

export default Curse;
