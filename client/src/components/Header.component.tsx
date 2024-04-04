import { FaFacebook, FaInstagram } from "react-icons/fa";
import LOGO from "../assets/logo.png";

import Dropdown from "./DropDown.component";
import { useEffect, useState } from "react";

interface HeaderItems {
  id: number;
  text: string;
  url?: string;
  subText?: Record<number, { text: string; url: string }>;
}

const headerTextContent: HeaderItems[] = [
  {
    id: 1,
    text: "Despre",
    url: "/about",
    subText: {
      1: {
        text: "Ce este Aleargă Pentru Viață?",
        url: "/about",
      },
      2: { text: "Echipă", url: "/about#team" },
      3: { text: "Istoric", url: "/about" },
      4: {
        text: "Galerie Foto",
        url: "https://www.facebook.com/media/set/?set=a.603987195089837&type=3",
      },
    },
  },
  {
    id: 2,
    text: "Curse",
    url: "",
    subText: {
      1: { text: "Cursa All for One", url: "/curse/allforone" },
      2: { text: "Cursa Copii", url: "/curse/kids" },
      3: { text: "Feminin 10-16 ani", url: "/curse/1016feminin" },
      4: { text: "Masculin 10-16 ani", url: "/curse/1016masculin" },
      5: { text: "Feminim 17-35 de ani", url: "/curse/1735feminin" },
      6: { text: "Masculin 17-35 de ani", url: "/curse/1735masculin" },
      7: { text: "Feminin 35 + de ani", url: "/curse/35feminin" },
      8: { text: "Masculin 35 + de ani", url: "/curse/35masculin" },
    },
  },
  {
    id: 3,
    text: "Cauza",
    url: "/cauza",
  },
  {
    id: 4,
    text: "Intrebari Frecvente",
    url: "/faq",
  },
  {
    id: 5,
    text: "Contacte",
    url: "/contact",
  },
];

export const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect( () => {
    window.addEventListener('scroll', changeOpacity);
  }, []);

  const changeOpacity = () => {
    if (window.scrollY > 60){
      setIsScrolling(true);
    }
    else {
      setIsScrolling(false);
    }
  }

  return (
    <div className={`header h-[5.625rem] w-full fixed top-0 z-50 ${isScrolling ? 'bg-slate-50 rounded-b-2xl shadow-lg' : ''}`}>
      <div className={`elementHeader h-[80%] my-auto  w-[80rem] mx-auto relativ`}>
        <ul className="flex  p-0 center my-auto h-full">
          {headerTextContent.map((item:HeaderItems) => (
            <Dropdown {...item}  key={item.id} />
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
