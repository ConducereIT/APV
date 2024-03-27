import { redirect } from "react-router-dom";
import type { ActionFunction } from "react-router";

export const actionCurse: ActionFunction = async ({ params }) => {
    console.log(params);

    return redirect(`/contacts/${params.numeCursa}`);
}