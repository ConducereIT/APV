
import { ActionFunction, redirect } from "react-router";
import { getCurse } from "../views/Curse.view";

export const  loaderCurse: ActionFunction  = async ({params}) => {
    const {numeCursa} = params;


    const numeCurse: string[] = getCurse();

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