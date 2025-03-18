import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "@genezio/auth";
import { BackendService } from "@genezio-sdk/apv";
import { Header } from "../components/Header.component";
import { Helmet } from "react-helmet";

interface Race {
  id: number;
  categorie: string;
  numarTricou: string;
  timpAlergat: string;
}

interface RacesContext {
  [key: string]: string;
}

const racesContext: RacesContext = {
  "0": "Cursa Copii",
  "1": "Feminin 13-17 ani",
  "2": "Masculin 13-17 ani",
  "3": "Feminim 18-35 de ani",
  "4": "Masculin 18-35 de ani",
  "5": "Feminin 35+ de ani",
  "6": "Masculin 35+ de ani",
};
const Account: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [races, setRaces] = useState<Race[]>([]);
  const navigate = useNavigate();
  const [userPicture, setUserPicture] = useState<string>("");
  const [locOcupat, setLocOcupat] = useState<number>(0);
  useEffect(() => {
    const isLoggedIn = async () => {
      try {
        const response = await AuthService.getInstance().userInfoForToken(
          localStorage.getItem("token") as string
        );
        setUserName(response.name!);
        setUserPicture(response.profilePictureUrl!);
      } catch (error) {
        console.log("Not logged in", error);
        navigate("/login");
      }
    };

    const takeLocOcupat = async () => {
      try {
        const response = await BackendService.getAllRaces();

        let locOcupat = 1;
        for (let i = 0; i < response.length; i++) {
          if (response[i].categorie === races[0].categorie) {
            if (response[i].timpAlergat < races[0].timpAlergat) {
              locOcupat++;
            }
          }
        }
        setLocOcupat(locOcupat);
      } catch (error) {
        console.log(error);
      }
    };

    isLoggedIn();
    takeLocOcupat();
  }, [navigate, races]);

  useEffect(() => {
    const takeRaces = async () => {
      try {
        const response = await BackendService.getRaces();
        setRaces(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    
    takeRaces();
  }, []);

  return (
    <>
  
      <Helmet>
        <title>APV 2025 | Account</title>
      </Helmet>
      <Header />
      <div className="p-6 mx-auto mt-48 bg-white rounded-lg shadow-md max-w-7xl">
        <h1 className="flex justify-center mb-6 text-xl font-semibold">
          Profil - {userName}
        </h1>
        <img
          src={userPicture}
          alt="profile"
          className="mx-auto rounded-full w-26 h-26"
        />
        {races.length === 0 ? (
          <div className="flex flex-col items-center">
            <h3 className="mt-4 text-xl font-semibold">
              Nu te-ai înscris încă la nicio cursă.
            </h3>
            <h3 className="mt-8 mb-6 text-xl font-semibold">
              Dorești să te înscrii la o nouă cursă?
            </h3>
            <button
              className="bg-[#006470] text-white font-semibold py-2 px-2 md:py-2 md:px-4 rounded-lg uppercase tracking-wide hover:bg-teal-500 focus:outline-none focus:ring transition duration-300 w-[10rem] md:w-[12rem]"
              onClick={() => navigate("/register-race")}
            >
              {" "}
              Adaugă cursă
            </button>
          </div>
        ) : (
          <div className="mt-4 overflow-x-auto">
            <h2 className="flex justify-center mb-6 text-2xl font-semibold">
              Cursa la care te-ai înscris
            </h2>
            <table className="mx-auto border border-collapse border-gray-200 table-auto">
              <thead className="bg-gray-200">
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Categorie</th>
                  <th className="px-4 py-2">Numar Tricou</th>
                  <th className="px-4 py-2">Timp Alergat</th>
                  <th className="px-4 py-2">Loc ocupat</th>
                </tr>
              </thead>
              <tbody>
                {races.map((race, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-100" : ""}
                  >
                    <td className="px-4 py-2 text-center">
                      {racesContext[race.categorie]}
                    </td>
                    <td className="px-4 py-2 text-center">
                      {race.numarTricou ? race.numarTricou : "N/A"}
                    </td>
                    <td className="px-4 py-2 text-center">
                      {race.timpAlergat ? race.timpAlergat : "N/A"}
                    </td>
                    <td className="px-4 py-2 text-center">
                      {locOcupat === 0 ||
                      race.timpAlergat === null ||
                      race.timpAlergat === "00:00:00"
                        ? "N/A"
                        : locOcupat}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Account;
