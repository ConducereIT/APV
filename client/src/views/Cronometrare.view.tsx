import React, {useEffect, useState} from "react";
import {BackendService} from "@genezio-sdk/apv-production";
import {AuthService} from "@genezio/auth";
import {Header} from "../components/Header.component.tsx";

const initialFormData = {
  id: 0,
  name: "N/A",
  idCursa: "N/A",
  categorie: "7",
  marimeTricou: "N/A",
  numarTricou: "N/A",
  revolute_cash: "N/A",
  phone: "N/A",
  checkin: "NU",
  suma: "N/A",
};

const races = {
  "0": "Cursa Copii",
  "1": "Feminin 13-17 ani",
  "2": "Masculin 13-17 ani",
  "3": "Feminin 18-35 de ani",
  "4": "Masculin 18-35 de ani",
  "5": "Feminin 35+ de ani",
  "6": "Masculin 35+ de ani",
  "7": "Nu a selectat"
};

const Cronometrare: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]); //eslint-disable-line
  const [formDataList, setFormDataList] = useState<any[]>([]);//eslint-disable-line

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BackendService.getAllRaces();
        // sort response by checkin, categorie, timpAlergat, numarTricou, name
        response.sort((a: any, b: any) => { //eslint-disable-line
          if (a.checkin === "DA" && b.checkin === "NU") return -1;
          if (a.checkin === "NU" && b.checkin === "DA") return 1;
          if (a.categorie < b.categorie) return -1;
          if (a.categorie > b.categorie) return 1;
          if (a.timpAlergat < b.timpAlergat) return -1;
          if (a.timpAlergat > b.timpAlergat) return 1;
          if (a.numarTricou < b.numarTricou) return -1;
          if (a.numarTricou > b.numarTricou) return 1;
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        setUsers(response);
        setFormDataList(response.map((user: any) => ({...user}))); //eslint-disable-line
      } catch (error) {
        console.log(error);
      }
    };

    const checkAdmin = async () => {
      try {
        const response = await AuthService.getInstance().userInfo();
        if (response.authProvider !== "cronometrare" && response.authProvider !== "admin") {
          window.location.href = "/";
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    checkAdmin();
  }, []);

  const handleInputChange = (
    e: any, //eslint-disable-line
    userId: number,
    field: string
  ) => {
    setFormDataList((prevList) =>
      prevList.map((formData, index) =>
        index === userId ? {...formData, [field]: e.target.value} : formData
      )
    );
  };

  const handleSort = (column: string, ascending: boolean = true) => {
    console.log("column", column);
    const sortedUsers = [...users].sort((a, b) => {
      if (column === "categorie")
        return ascending ? parseInt(a[column] || "7") - parseInt(b[column] || "7") : parseInt(b[column] || "7") - parseInt(a[column] || "7");
      if (a[column] === undefined || b[column] === undefined)
        return 0;
      return ascending ? a[column]?.localeCompare(b[column]) : b[column]?.localeCompare(a[column]);
    });
    console.log("sortedUsers", sortedUsers);
    setFormDataList(sortedUsers);
    setUsers(sortedUsers);
  };

  return (
    <>
      <Header/>
      <div className="flex justify-center">
        <table className="border-collapse w-full scale-75 mt-[-50rem] mb-[-54rem] h-full">
          <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">ID</th>
            <th className="border border-gray-400 px-4 py-2">
              Nume
              <button
                onClick={() => handleSort("name")}
                className="ml-2"
              >
                &#9650;
              </button>
              <button
                onClick={() => handleSort("name", false)}
                className="ml-1"
              >
                &#9660;
              </button>
            </th>
            <th className="border border-gray-400 px-4 py-2">
              Cursa
              <button
                onClick={() => handleSort("categorie")}
                className="ml-2"
              >
                &#9650;
              </button>
              <button
                onClick={() => handleSort("categorie", false)}
                className="ml-1"
              >
                &#9660;
              </button>
            </th>
            <th className="border border-gray-400 px-4 py-2">Numar Tricou
              <button
                onClick={() => handleSort("numarTricou")}
                className="ml-2"
              >
                &#9650;
              </button>
              <button
                onClick={() => handleSort("numarTricou", false)}
                className="ml-1"
              >
                &#9660;
              </button>
            </th>
            <th className="border border-gray-400 px-4 py-2">Checkin
              <button
                onClick={() => handleSort("checkin")}
                className="ml-2"
              >
                &#9650;
              </button>
              <button
                onClick={() => handleSort("checkin", false)}
                className="ml-1"
              >
                &#9660;
              </button>
            </th>
            <th className="border border-gray-400 px-4 py-2">Timp Alergat
              <button
                onClick={() => handleSort("timpAlergat")}
                className="ml-2"
              >
                &#9650;
              </button>
              <button
                onClick={() => handleSort("timpAlergat", false)}
                className="ml-1"
              >
                &#9660;
              </button>
            </th>
            <th className="border border-gray-400 px-4 py-2">Update</th>
          </tr>
          </thead>
          <tbody>
          {users.map((_user, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-400 px-4 py-2">
                <input
                  type="text"
                  value={formDataList[index]?.name || "N/A"}
                  onChange={(e) => handleInputChange(e, index, "name")}
                  className="text-center"
                  disabled={true}
                />
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <select
                  value={formDataList[index]?.categorie || initialFormData.categorie}
                  onChange={(e) => handleInputChange(e, index, "categorie")}
                  className="text-center"
                  disabled={true}
                >
                  {Object.entries(races).map(([key, value]) => (
                    <option key={key} value={key} className="text-center">
                      {value}
                    </option>
                  ))}
                </select>
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <input
                  type="text"
                  value={formDataList[index]?.numarTricou || initialFormData.numarTricou}
                  onChange={(e) => handleInputChange(e, index, "numarTricou")}
                  className="text-center"
                  disabled={true}
                />
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {formDataList[index]?.checkin === "DA" ? (
                  <input
                    type="button"
                    value="DA"
                    placeholder="DA"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  />
                ) : (
                  <input
                    type="button"
                    value="NU"
                    placeholder="NU"
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  />
                )}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {/*TODO: add input date for timpAlergat hours:minutes:seconds*/}
                <div className="flex justify-center">
                  <input type="time"
                         value={formDataList[index]?.timpAlergat || "00:00:00"}
                         step={2}
                         onChange={(e) => handleInputChange(e, index, "timpAlergat")}
                         className="text-center"/>
                </div>
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <input
                  type="button"
                  value="Update"
                  onClick={() => {
                    const updateData = async () => {
                      try {
                        await BackendService.updateRaceTime(formDataList[index].id, formDataList[index].timpAlergat);
                        window.location.reload();
                      } catch (error) {
                        console.log(error);
                      }
                    };
                    updateData();
                  }}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                />
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cronometrare;
