import Inscriere from "../components/Inscriere.component";
import { Header } from "../components/Header.component.tsx";
import { Helmet } from "react-helmet";

export default function InscriereParticipantiView() {
  return (
    <>
      <Helmet>
        <title>APV 2024 | Inregistrare in ziua evenimentului</title>
      </Helmet>
      <Header />
      <div className="mt-40" />
      <Inscriere />
    </>
  );
}
