import { useParams } from "react-router-dom";

const Curse = () => {
    const {numeCursa} = useParams();

    return (
        <h1>{numeCursa}</h1>
    );
}

export default Curse;