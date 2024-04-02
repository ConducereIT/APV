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
    }
}

const curseArr: CurseValide[] = [
    {
        numeCurse: "allforone",
        interfata:{
            cursa: "All For One",
            oraStart: "11 : 30",
            distanta: "400 M",
            donatieMinima: "OPTIONAL",
            descriere: "Cursa All For One este o tură populară, necompetitivă, perfectă pentru cei care vor să facă mișcare în natură pe o distanță accesibilă. Aceasta se adresează tuturor persoanelor, de orice vârstă sau gen, chiar și persoanelor cu dizabilități.",
            urlHarta: "https://www.google.com/maps/embed?pb=!1m42!1m12!1m3!1d1051.7564164316468!2d26.050924936618955!3d44.43943916368305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m27!3e2!4m5!1s0x40b201c187a44aeb%3A0x776c5045f461c6b0!2sBucure%C5%9Fti%20Sectorul%206%2C%20Bucure%C8%99ti%20061344!3m2!1d44.4396542!2d26.052221199999998!4m3!3m2!1d44.439018999999995!2d26.0515156!4m3!3m2!1d44.4397981!2d26.051081699999997!4m3!3m2!1d44.4400312!2d26.0518355!4m3!3m2!1d44.4399332!2d26.0523311!4m3!3m2!1d44.4396554!2d26.052215!5e0!3m2!1sro!2sro!4v1679949014977!5m2!1sro!2sro",
        }
    },
    {
        numeCurse: "kids",
        interfata:{
            cursa: "Copii < 10 ani",
            oraStart: "11 : 10",
            distanta: "400 M",
            donatieMinima: "20 RON",
            urlHarta: "https://www.google.com/maps/embed?pb=!1m42!1m12!1m3!1d1051.7564164316468!2d26.050924936618955!3d44.43943916368305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m27!3e2!4m5!1s0x40b201c187a44aeb%3A0x776c5045f461c6b0!2sBucure%C5%9Fti%20Sectorul%206%2C%20Bucure%C8%99ti%20061344!3m2!1d44.4396542!2d26.052221199999998!4m3!3m2!1d44.439018999999995!2d26.0515156!4m3!3m2!1d44.4397981!2d26.051081699999997!4m3!3m2!1d44.4400312!2d26.0518355!4m3!3m2!1d44.4399332!2d26.0523311!4m3!3m2!1d44.4396554!2d26.052215!5e0!3m2!1sro!2sro!4v1679949014977!5m2!1sro!2sro",
        }
    },
    {
        numeCurse: "1016feminin",
        interfata:{
            cursa: "Feminin 10-16 ani",
            oraStart: "10 : 00",
            distanta: "1.8 KM (2 x 900 M)",
            donatieMinima: "20 RON",
            urlHarta: "https://www.google.com/maps/embed?pb=!1m54!1m12!1m3!1d3197.5546921811306!2d26.052006740819518!3d44.43936790814989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m39!3e2!4m5!1s0x40b201c187a44aeb%3A0x776c5045f461c6b0!2sBucure%C5%9Fti%20Sectorul%206%2C%20Bucure%C8%99ti%20061344!3m2!1d44.4396542!2d26.052221199999998!4m3!3m2!1d44.438950999999996!2d26.0519574!4m3!3m2!1d44.4388648!2d26.052301!4m3!3m2!1d44.438254799999996!2d26.0521617!4m3!3m2!1d44.437896699999996!2d26.0542789!4m3!3m2!1d44.4400724!2d26.054449299999998!4m3!3m2!1d44.440621799999995!2d26.052691!4m3!3m2!1d44.4404821!2d26.052519099999998!4m3!3m2!1d44.4396604!2d26.0521988!5e0!3m2!1sro!2sro!4v1679943999036!5m2!1sro!2sro",
        }
    },
    {
        numeCurse: "1016masculin",
        interfata:{
            cursa: "Masculin 10-16 ani",
            oraStart: "10 : 20",
            distanta: "1.8 KM (2 x 900 M)",
            donatieMinima: "20 RON",
            urlHarta: "https://www.google.com/maps/embed?pb=!1m54!1m12!1m3!1d3197.5546921811306!2d26.052006740819518!3d44.43936790814989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m39!3e2!4m5!1s0x40b201c187a44aeb%3A0x776c5045f461c6b0!2sBucure%C5%9Fti%20Sectorul%206%2C%20Bucure%C8%99ti%20061344!3m2!1d44.4396542!2d26.052221199999998!4m3!3m2!1d44.438950999999996!2d26.0519574!4m3!3m2!1d44.4388648!2d26.052301!4m3!3m2!1d44.438254799999996!2d26.0521617!4m3!3m2!1d44.437896699999996!2d26.0542789!4m3!3m2!1d44.4400724!2d26.054449299999998!4m3!3m2!1d44.440621799999995!2d26.052691!4m3!3m2!1d44.4404821!2d26.052519099999998!4m3!3m2!1d44.4396604!2d26.0521988!5e0!3m2!1sro!2sro!4v1679943999036!5m2!1sro!2sro",
        }
    },
    {
        numeCurse: "1735feminin",
        interfata:{
            cursa: "Feminin 17-35 ani",
            oraStart: "12 : 00",
            distanta: "4 KM (2 X 2 KM)",
            donatieMinima: "20 RON",
            urlHarta: "https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d1359.0739952763695!2d26.051536155519436!3d44.4381565085272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e2!4m3!3m2!1d44.4372435!2d26.047853099999998!4m3!3m2!1d44.4392806!2d26.047387!4m3!3m2!1d44.4388363!2d26.0495043!4m3!3m2!1d44.438002399999995!2d26.051835699999998!4m3!3m2!1d44.440619999999996!2d26.0526777!4m3!3m2!1d44.4378836!2d26.054248899999997!4m3!3m2!1d44.4377256!2d26.051095999999998!4m3!3m2!1d44.4380264!2d26.0493903!4m3!3m2!1d44.4372292!2d26.0480509!5e0!3m2!1sro!2sro!4v1679944496994!5m2!1sro!2sro",
        }
    },
    {
        numeCurse: "1735masculin",
        interfata:{
            cursa: "Masculin - 17-35ani",
            oraStart: "13 : 00",
            distanta: "6 KM (3 X 2 KM)",
            donatieMinima: "40 RON",
            urlHarta: "https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d1359.0739952763695!2d26.051536155519436!3d44.4381565085272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e2!4m3!3m2!1d44.4372435!2d26.047853099999998!4m3!3m2!1d44.4392806!2d26.047387!4m3!3m2!1d44.4388363!2d26.0495043!4m3!3m2!1d44.438002399999995!2d26.051835699999998!4m3!3m2!1d44.440619999999996!2d26.0526777!4m3!3m2!1d44.4378836!2d26.054248899999997!4m3!3m2!1d44.4377256!2d26.051095999999998!4m3!3m2!1d44.4380264!2d26.0493903!4m3!3m2!1d44.4372292!2d26.0480509!5e0!3m2!1sro!2sro!4v1679944496994!5m2!1sro!2sro",
        }
    },
    {
        numeCurse: "35masculin",
        interfata:{
            cursa: "Masculin 35+ ani",
            oraStart: "15 : 00",
            distanta: " 4 KM (2 x 2 KM)",
            donatieMinima: "40 RON",
            urlHarta: "https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d1359.0739952763695!2d26.051536155519436!3d44.4381565085272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e2!4m3!3m2!1d44.4372435!2d26.047853099999998!4m3!3m2!1d44.4392806!2d26.047387!4m3!3m2!1d44.4388363!2d26.0495043!4m3!3m2!1d44.438002399999995!2d26.051835699999998!4m3!3m2!1d44.440619999999996!2d26.0526777!4m3!3m2!1d44.4378836!2d26.054248899999997!4m3!3m2!1d44.4377256!2d26.051095999999998!4m3!3m2!1d44.4380264!2d26.0493903!4m3!3m2!1d44.4372292!2d26.0480509!5e0!3m2!1sro!2sro!4v1679944496994!5m2!1sro!2sro",
        }
    },
    {
        numeCurse: "35feminin",
        interfata:{
            cursa: "Feminin 35+ ani",
            oraStart: "14 : 10",
            distanta: " 2 KM ",
            donatieMinima: "40 RON",
            urlHarta: "https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d1359.0739952763695!2d26.051536155519436!3d44.4381565085272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e2!4m3!3m2!1d44.4372435!2d26.047853099999998!4m3!3m2!1d44.4392806!2d26.047387!4m3!3m2!1d44.4388363!2d26.0495043!4m3!3m2!1d44.438002399999995!2d26.051835699999998!4m3!3m2!1d44.440619999999996!2d26.0526777!4m3!3m2!1d44.4378836!2d26.054248899999997!4m3!3m2!1d44.4377256!2d26.051095999999998!4m3!3m2!1d44.4380264!2d26.0493903!4m3!3m2!1d44.4372292!2d26.0480509!5e0!3m2!1sro!2sro!4v1679944496994!5m2!1sro!2sro",
        }
    },
];

export function getCurseName(): string[]{ 
    const numeCurs: string[] = curseArr.map(cursa => cursa.numeCurse);

    return numeCurs;
}

export function getCurse(): CurseValide[]{
    return curseArr;
}

interface RouteParams {
    numeCursa: string;
    [key: string]: string | undefined;
  }

const Curse = () => {
    const {numeCursa}  = useParams<RouteParams>();

    const cursa: CurseValide | undefined = curseArr.find(cursa => cursa.numeCurse === numeCursa);

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
}

export default Curse;

