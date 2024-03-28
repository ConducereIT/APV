
import { ActionFunction, redirect } from "react-router";
import { getCurseName } from "../views/Curse.view";

interface IRouteParams{
    numeCursa: string;
}

export const loaderCurse: ActionFunction<IRouteParams> = async ({ params }) => {   
    
    const {numeCursa} = params;

    const numeCurse: string[] = getCurseName();

    let isValid = false;

    numeCurse.forEach( curse => {
        if (curse == numeCursa){
            isValid = true;
        }
    })

    if (!isValid){
        return redirect("/");
    }

    return {}
}