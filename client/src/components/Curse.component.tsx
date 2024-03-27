import { CurseValide } from "../views/Curse.view";

const CurseComponent: React.FC<CurseValide> = ({ interfata}): JSX.Element => {

    const { cursa, oraStart, distanta, donatieMinima, descriere } = interfata || {};
    
    return (
        <div className="ml-8 pt-5">
            {
                interfata && (
                    <div className="relative cursor-default">
                        <h1 className="text-5xl font-bolt"> <span className="font-normal font-source-code-pro text-5xl">Cursa - </span> {cursa}</h1>
                        <h1 className="hover:text-[#A8A5BF] mt-10 font-bold ml-2">Informatii Cursa:</h1>
                        <div className=" ml-6 space-y-1 mb-3">
                            <p className="font-bolt"> <span className="font-normal"> Ora start:</span> {oraStart}</p>
                            <p className="font-bolt"> <span className="font-normal">Distanta: </span> {distanta}  </p>
                            <p className="font-bolt"> <span className="font-normal">Donatie minima: </span>  {donatieMinima}  </p>
                        </div>
                        <h1 className="hover:text-[#A8A5BF] mt-10">{descriere}</h1>

                        <h1 className="mt-12 ml-3"><span>Vezi mai jos harta traseului!</span></h1>

                        <h1 className="font-bolt text-xl mt-8"><span className="font-normal">Pentru mai multe informații consultați </span> regulamentul <span className="font-normal"> ! </span> </h1>

                        <div className="mt-10 h-[30rem] ml-1 w-1/2 ">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d1359.0739952763695!2d26.051536155519436!3d44.4381565085272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e2!4m3!3m2!1d44.4372435!2d26.047853099999998!4m3!3m2!1d44.4392806!2d26.047387!4m3!3m2!1d44.4388363!2d26.0495043!4m3!3m2!1d44.438002399999995!2d26.051835699999998!4m3!3m2!1d44.440619999999996!2d26.0526777!4m3!3m2!1d44.4378836!2d26.054248899999997!4m3!3m2!1d44.4377256!2d26.051095999999998!4m3!3m2!1d44.4380264!2d26.0493903!4m3!3m2!1d44.4372292!2d26.0480509!5e0!3m2!1sro!2sro!4v1679944496994!5m2!1sro!2sro" loading="lazy" className="border-0 h-full w-full" title={`${cursa}`} ></iframe>
                        </div>

                        <br className=" mt-3" />
                    </div>
                )
            }
        </div>
    );
}

export default CurseComponent;