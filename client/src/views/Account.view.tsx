import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthService } from '@genezio/auth';
import { BackendService } from "@genezio-sdk/apv-production";
import { Header } from "../components/Header.component";

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
  "1": "Feminin 10-16 ani",
  "2": "Masculin 10-16 ani",
  "3": "Feminim 17-35 de ani",
  "4": "Masculin 17-35 de ani",
  "5": "Feminin 35+ de ani",
  "6": "Masculin 35+ de ani",
};
const Account: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [races, setRaces] = useState<Race[]>([]);
  const navigate = useNavigate();
  const [userPicture, setUserPicture] = useState<string>("");
  useEffect(() => {
    const isLoggedIn = async () => {
      try {
        const response = await AuthService.getInstance().userInfoForToken(
          localStorage.getItem("token") as string,
        );
        setUserName(response.name!);
        setUserPicture(response.profilePictureUrl!);
      } catch (error) {
        console.log("Not logged in", error);
        navigate("/login");
      }
    };

    isLoggedIn();
  }, [navigate]);

  useEffect(() => {
    const takeRaces = async () => {
      try {
        const response = await BackendService.getRaces();
        setRaces(response);
      } catch (error) {
        console.log(error);
      }
    }

    takeRaces();
  }, []);

  return (
    <>
      <Header />
      <div className="bg-white rounded-lg shadow-md mx-auto max-w-7xl mt-48 p-6">
        <h1 className="text-xl mb-6 font-semibold flex justify-center">Profil - {userName}</h1>
        <img src={userPicture} alt="profile" className="mx-auto rounded-full w-26 h-26" />
        {
          races.length === 0 ? (
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mt-4">Nu te-ai înscris încă la nicio cursă.</h3>
              <h3 className="text-xl font-semibold mb-6 mt-8">Dorești să te înscrii la o nouă cursă?</h3>
              <button
                className="bg-[#006470] text-white font-semibold py-2 px-2 md:py-2 md:px-4 rounded-lg uppercase tracking-wide hover:bg-teal-500 focus:outline-none focus:ring transition duration-300 w-[10rem] md:w-[12rem]"
                onClick={() => navigate("/register-race")}
              > Adaugă cursă
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto mt-4">
              <h2 className="text-2xl font-semibold mb-6 flex justify-center">Cursa la care te-ai înscris</h2>
              <table className="table-auto border border-collapse border-gray-200 mx-auto">
                <thead className="bg-gray-200">
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Categorie</th>
                  <th className="px-4 py-2">Numar Tricou</th>
                  <th className="px-4 py-2">Timp Alergat</th>
                </tr>
                </thead>
                <tbody>
                {races.map((race, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                    <td className="px-4 py-2">{racesContext[race.categorie]}</td>
                    <td className="px-4 py-2">{race.numarTricou ? race.numarTricou : 'N/A'}</td>
                    <td className="px-4 py-2">{race.timpAlergat ? race.timpAlergat : 'N/A'}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          )
        }

      </div>
    </>
  )
}

export default Account;
