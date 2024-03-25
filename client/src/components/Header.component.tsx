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
    <div className="header h-[5.625rem] w-full fixed top-0 border border-green-500">
      <div className="elementHeader border border-black h-[80%] my-auto  w-[80rem] mx-auto">
        <ul className="flex list-none p-0 center my-auto h-full">
          {headerTextContent.map((item, index) => (
              <Dropdown {...item} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

// export const Header = () => {
//   return (
//     <div className="header h-[5.625rem] w-full fixed top-0 border border-green-500">
//       <div className="elementHeader border border-black h-[80%] my-auto  w-[80rem] mx-auto">
//         <ul className="flex list-none p-0 center my-auto h-full">
//           {headerTextContent.map((items, index) => (
//               <li className="liHeader ml-7 text-md my-auto text-[#656372] hover:text-[#00B9AE]" key={index}>
//               {items.text}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };
