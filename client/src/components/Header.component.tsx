import { FaFacebook, FaInstagram } from "react-icons/fa";
import LOGO from "../assets/LogoAPV.webp";
import Dropdown from "./DropDown.component";
import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdCancelPresentation } from "react-icons/md";
import { AuthService } from "@genezio/auth";

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
      2: { text: "Echipa", url: "/about#team" },
      3: { text: "Istoric", url: "/about#istoric" },
      4: {
        text: "Galerie Foto",
        url: "https://www.facebook.com/media/set/?set=a.603987195089837&type=3",
      },
    },
  },
  {
    id: 2,
    text: "Curse",
    url: "/curse/allforone",
    subText: {
      1: { text: "Cursa All for One", url: "/curse/allforone" },
      2: { text: "Cursa Copii", url: "/curse/kids" },
      3: { text: "Feminin 13-17 ani", url: "/curse/1016feminin" },
      4: { text: "Masculin 13-17 ani", url: "/curse/1016masculin" },
      5: { text: "Feminin 18-35 ani", url: "/curse/1735feminin" },
      6: { text: "Masculin 18-35 ani", url: "/curse/1735masculin" },
      7: { text: "Feminin 35+ ani", url: "/curse/35feminin" },
      8: { text: "Masculin 35+ ani", url: "/curse/35masculin" },
    },
  },
  {
    id: 3,
    text: "Cauza",
    url: "/cauza",
  },
  {
    id: 4,
    text: "FAQ",
    url: "/faq",
  },
  {
    id: 5,
    text: "Contact",
    url: "/contact",
  },
];

export const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [menuBurger, setMenuBurger  ] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeOpacity);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogin(true);
    }
  }, []);
  const changeOpacity = () => {
    if (window.scrollY > 60) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  return (
    <>
      <div
        className={`header h-[5.625rem] w-full fixed top-0 z-50 ${
          isScrolling ? "bg-slate-50 rounded-b-2xl shadow-lg" : ""
        } lg:block hidden`}
      >
        <div
          className={`elementHeader h-[80%] my-auto  w-[80rem] mx-auto relativ`}
        >
          <ul className="flex lg:text-xl p-0 center my-auto h-full">
            {headerTextContent.map((item: HeaderItems) => (
              <Dropdown {...item} key={item.id} />
            ))}
            {isLogin ? <Dropdown url="/profil" key={6} text="Profil" /> : null}
          </ul>

          <img
            className="absolute top-1 my-3 right-[50%] cursor-pointer scale-125"
            src={LOGO}
            alt="Logo"
            onClick={() => (window.location.href = "/")}
          />

          <div className=" absolute top-0 right-0 h-full w-[50%] flex items-center justify-center space-x-8">
            <a
              className="scale-110"
              href="https://www.facebook.com/AleargaPentruViata"
              target="_blank"
            >
              <FaFacebook size={20} />
            </a>
            <a
              className="scale-110"
              href="https://www.instagram.com/aleargapentruviata.lse/"
              target="_blank"
            >
              <FaInstagram size={20} />
            </a>
            <button
              className="bg-[#3c216a] hover:bg-[#4C268D] rounded-md translate-x-10 h-[40%] text-white text-base text-bold  w-[20%]"
              onClick={() => window.open("https://revolut.me/cesare99b7")}
            >
              DONEAZĂ
            </button>

            {!isLogin ? (
              <button
                className="bg-[#1b756f] hover:bg-[#3f9892] translate-x-10 h-[40%] rounded-md text-white text-base text-bold w-[20%]"
                onClick={() => (window.location.href = "/login")}
              >
                ÎNSCRIERE
              </button>
            ) : (
              <button
                className="bg-[#1b756f] hover:bg-[#3f9892] translate-x-10 h-[40%] rounded-md text-white text-base text-bold w-[20%]"
                onClick={async () => {
                  await AuthService.getInstance().logout();
                  window.location.reload();
                }}
              >
                LOGOUT
              </button>
            )}
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden bg-white shadow-lg block min-h-16 w-full fixed top-0   z-30  ${
          isScrolling && !menuBurger
            ? "bg-slate-50 rounded-b-2xl shadow-lg"
            : ""
        }`}
      >
        <img
          className="h-10 w-10 absolute -top-1 my-3 left-[4%] cursor-pointer"
          src={LOGO}
          alt="Logo"
          onClick={() => (window.location.href = "/")}
        />
        <div className="absolute h-10 w-10 top-[1.6rem] flex justify-center space-x-8 right-[25%]">
          <a
            className="scale-110"
            href="https://www.facebook.com/AleargaPentruViata"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            className="scale-110"
            href="https://www.instagram.com/aleargapentruviata.lse/"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
        <div className={`absolute right-[5%] h-8 w-8 top-4 `}>
          <CiMenuBurger
            onClick={() => setMenuBurger(true)}
            className={`h-full w-full ${menuBurger ? "hidden" : "block"}`}
          />
          <MdCancelPresentation
            onClick={() => setMenuBurger(false)}
            className={`h-full w-full ${menuBurger ? "block" : "hidden"}`}
          />
        </div>
        <div
          className={`${
            menuBurger ? "block" : "hidden"
          }  w-full min:h-96 mt-16 `}
        >
          <ul className=" grid p-0 center my-auto h-full">
            {headerTextContent.map((item: HeaderItems) => (
              <Dropdown {...item} key={item.id} />
            ))}
            {!isLogin ? null : <Dropdown url="/profil" key={7} text="Profil" />}
            <Dropdown
              url="https://revolut.me/cesare99b7"
              key={8}
              text="Donează"
            />
            {!isLogin ? (
              <Dropdown url="/login" key={9} text="Înscriere" />
            ) : (
              <Dropdown url="/logout" key={10} text="Logout" />
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
