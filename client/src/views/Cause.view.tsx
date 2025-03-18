import { Helmet } from "react-helmet";
import Cauze from "../components/Cauze.component";
import { Header } from "../components/Header.component";

export default function Cause() {
  return (
    <>
      <Helmet>
        <title>APV 2025 | Cauza</title>
      </Helmet>
      <Header />
      <Cauze />
    </>
  );
}
