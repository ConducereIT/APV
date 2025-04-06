import { Helmet } from "react-helmet";
import ContactTeam from "../components/Contact.component";
import { Header } from "../components/Header.component";
import members from "../config/MembersConfig";
export default function Contact() {
  return (
    <>
      <Helmet>
        <title>APV 2025 | Contact</title>
      </Helmet>
      <Header />
      <div className="flex justify-center mt-32">
        <ContactTeam members={members} grid={2} />
      </div>
    </>
  );
}
