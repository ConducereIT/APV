import RaceRegistration from "../components/RaceRegistration.component";
import { Header } from "../components/Header.component.tsx";
import { Helmet } from "react-helmet";

export default function RaceRegistrationView() {
  return (
    <>
      <Helmet>
        <title>APV 2025 | Inregistrare Cursa</title>
      </Helmet>
      <Header />
      <div className="mt-40" />
      <RaceRegistration />
    </>
  );
}
