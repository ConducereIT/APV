import { CurseValide } from "../views/Curse.view";

const CurseComponent: React.FC<CurseValide> = ({numeCurse, interfata}): JSX.Element => {

    const { cursa, oraStart, distanta, donatieMinima, urlHarta } = interfata || {};
    
    return (
        <div className="text-white">
            <h2>Nume cursa: {numeCurse}</h2>
            {interfata && (
                <div>
                    <p>Nume cursa: {cursa}</p>
                    <p>Ora start: {oraStart}</p>
                    <p>Distanta: {distanta}</p>
                    <p>Donatie minima: {donatieMinima}</p>
                    {urlHarta && <p>URL harta: {urlHarta}</p>}
                </div>
            )}
        </div>
    );
}

export default CurseComponent;