import Faqs from "../components/Faqs.component";
import { Header } from "../components/Header.component";

export default function Faq() {
  return (
    <>
      <Header />
      <div className="mt-6 lg:mt-40 ">
        <Faqs />
      </div>
    </>
  );
}
