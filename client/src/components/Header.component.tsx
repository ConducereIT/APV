import { FaFacebook, FaInstagram } from "react-icons/fa";
import LOGO from "../assets/logo.png";

import Dropdown from "./DropDown.component";

interface HeaderItems {
  text: string;
  url?: string;
  subText?: Record<number, { text: string; url: string }>;
}

const headerTextContent: HeaderItems[] = [
  {
    text: "Despre",
    url: "apv.lsebucuresti/about-us",
    subText: {
      1: {
        text: "Ce este Alearga Pentru Viata?",
        url: "apv3,msa.lsebucuresti/about-us/#ce_este_apv",
      },
      2: { text: "Echipa", url: "apv.lsebucuresti/about-us/#echipa" },
      3: { text: "Istoric", url: "apv.lsebucuresti/about-us/#istoric" },
      4: {
        text: "Galerie Foto",
        url: "https://www.facebook.com/media/set/?set=a.603987195089837&type=3",
      },
    },
  },
  {
    text: "Curse",
    url: "",
    subText: {
      1: { text: "Cursa All for One", url: "" },
      2: { text: "Cursa Copii", url: "" },
      3: { text: "Feminin 10-16 ani", url: "" },
      4: { text: "Masculin 10-16 ani", url: "" },
      5: { text: "Feminim 17-35 de ani", url: "" },
      6: { text: "Masculin 17-35 de ani", url: "" },
      7: { text: "Feminin 35 + de ani", url: "" },
      8: { text: "Masculin 35 + de ani", url: "" },
    },
  },
  {
    text: "Cauza",
    url: "apv.lsebucuresti.org/cauza.php",
  },
  {
    text: "Intrebari Frecvente",
    url: "https://apv.lsebucuresti.org/infoutile.php",
  },
  {
    text: "Contacte",
    url: "https://apv.lsebucuresti.org/contact.php",
  },
];

export const Header = () => {
  return (
    <div className="header h-[5.625rem] w-full fixed top-0 ">
      <div className="elementHeader h-[80%] my-auto  w-[80rem] mx-auto relative">
        <ul className="flex  p-0 center my-auto h-full">
          {headerTextContent.map((item, index) => (
            <Dropdown {...item} key={index} />
          ))}
        </ul>

        <img
          className="h-10 w-15 absolute top-1 my-3 scale-125 right-[50%]"
          src={LOGO}
          alt="Logo"
        />

        <div className=" absolute top-0 right-0 h-full w-[50%] flex items-center justify-center space-x-8">
          <a
            className="scale-110"
            href="https://www.facebook.com/AleargaPentruViata"
          >
            <FaFacebook className="" />
          </a>
          <a
            className="scale-110"
            href="https://www.instagram.com/aleargapentruviata.lse/"
          >
            <FaInstagram />
          </a>
          <button className="bg-[#3c216a] hover:bg-[#4C268D] rounded-md translate-x-10 h-[60%] text-white text-xl  w-[25%]">
            Doneaza
          </button>
          <button className="bg-[#1b756f] hover:bg-[#3f9892] translate-x-10 h-[60%] rounded-md text-white text-xl  w-[25%]">
            Inscriere
          </button>
        </div>
      </div>
    </div>
  );
};
