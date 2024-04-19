import { Helmet } from "react-helmet";
import Faqs from "../components/Faqs.component";
import { Header } from "../components/Header.component";

export default function Faq() {
  return (
    <>
      <Helmet>
        <title>APV 2024 | FAQ</title>
      </Helmet>
      <Header />
      <div className="mt-6 lg:mt-40 ">
        <Faqs />
      </div>
    </>
  );
}
