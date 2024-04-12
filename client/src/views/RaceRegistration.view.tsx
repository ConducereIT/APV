import RaceRegistration from "../components/RaceRegistration.component";
import {Header} from "../components/Header.component.tsx";

export default function RaceRegistrationView() {
  return (
    <>
      <Header/>
      <div className="mt-40"/>
      <RaceRegistration />
    </>
  );
}
