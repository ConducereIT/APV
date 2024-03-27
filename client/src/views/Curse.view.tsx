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
        urlHarta?: string;
    }
}

const curseArr: CurseValide[] = [
    {
        numeCurse: "allforone",
        interfata:{
            cursa: "All For One",
            oraStart: "11:30",
            distanta: "400M",
            donatieMinima: "OPTIONAL",
        }
    },
    {
        numeCurse: "kids",
        interfata:{
            cursa: "Copii < 10 ani",
            oraStart: "11:10",
            distanta: "400M",
            donatieMinima: "20 RON",
        }
    },
    {
        numeCurse: "1016feminin",
        interfata:{
            cursa: "Feminin 10-16 ani",
            oraStart: "10 : 00",
            distanta: "1.8 KM (2 x 900 M)",
            donatieMinima: "20 RON",
        }
    },
    {
        numeCurse: "1016masculin",
        interfata:{
            cursa: "Masculin 10-16 ani",
            oraStart: "10 : 20",
            distanta: "1.8 KM (2 x 900 M)",
            donatieMinima: "20 RON",
        }
    },
    {
        numeCurse: "1735feminin",
        interfata:{
            cursa: "Feminin 17-35 ani",
            oraStart: "12 : 00",
            distanta: "4 KM (2 X 2 KM)",
            donatieMinima: "20 RON",
        }
    },
    {
        numeCurse: "1735masculin",
        interfata:{
            cursa: "Masculin - 17-35ani",
            oraStart: "13 : 00",
            distanta: "6 KM (3 X 2 KM)",
            donatieMinima: "40 RON",
        }
    },
    {
        numeCurse: "35masculin",
        interfata:{
            cursa: "Masculin 35+ ani",
            oraStart: "15 : 00",
            distanta: " 4 KM (2 x 2 KM)",
            donatieMinima: "40 RON",
        }
    },
    {
        numeCurse: "35feminin",
        interfata:{
            cursa: "Feminin 35+ ani",
            oraStart: "14 : 10",
            distanta: " 2 KM ",
            donatieMinima: "40 RON",
        }
    },
];

export function getCurse(): string[]{ 
    const numeCurs: string[] = curseArr.map(cursa => cursa.numeCurse);


    return numeCurs;
}

const Curse = () => {
    const {numeCursa} = useParams();

    const cursa: CurseValide | undefined = curseArr.find(cursa => cursa.numeCurse === numeCursa);

    if (!cursa) {
        return <div>Cursa nu a fost găsită!</div>;
    }

    
    return (
        <div>
            <Header />
            <div className="bg-black  mt-36">
                <CurseComponent {...cursa} />
            </div>
        </div>
    );
}

export default Curse;

