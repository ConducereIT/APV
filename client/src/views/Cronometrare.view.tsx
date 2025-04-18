import React, { useEffect, useState } from "react";
import { BackendService } from "@genezio-sdk/apv";
import { AuthService } from "@genezio/auth";
import { Header } from "../components/Header.component.tsx";

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
  "7": "Nu a selectat",
};

const Cronometrare: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]); //eslint-disable-line
  const [formDataList, setFormDataList] = useState<any[]>([]); //eslint-disable-line

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BackendService.getAllRaces();
        // sort response by checkin, categorie, timpAlergat, numarTricou, name
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        response.sort((a: any, b: any) => {
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
        setFormDataList(response.map((user: any) => ({ ...user }))); //eslint-disable-line
      } catch (error) {
        console.log(error);
      }
    };

    const checkAdmin = async () => {
      try {
        const response = await AuthService.getInstance().userInfo();
        if (
          response.authProvider !== "cronometrare" &&
          response.authProvider !== "admin"
        ) {
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
        index === userId ? { ...formData, [field]: e.target.value } : formData
      )
    );
  };

  const handleSort = (column: string, ascending: boolean = true) => {
    console.log("column", column);
    const sortedUsers = [...users].sort((a, b) => {
      if (column === "categorie")
        return ascending
          ? parseInt(a[column] || "7") - parseInt(b[column] || "7")
          : parseInt(b[column] || "7") - parseInt(a[column] || "7");
      if (a[column] === undefined || b[column] === undefined) return 0;
      return ascending
        ? a[column]?.localeCompare(b[column])
        : b[column]?.localeCompare(a[column]);
    });
    console.log("sortedUsers", sortedUsers);
    setFormDataList(sortedUsers);
    setUsers(sortedUsers);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center pt-36">
        <h1 className="text-2xl font-bold mb-6">Panou de cronometrare</h1>
        <div className="w-full px-4 overflow-x-auto max-w-[1200px] mb-10">
          <table className="border-collapse w-full mb-5 h-full text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border border-gray-400">ID</th>
                <th className="px-4 py-2 border border-gray-400">
                  Nume
                  <button onClick={() => handleSort("name")} className="ml-2">
                    &#9650;
                  </button>
                  <button
                    onClick={() => handleSort("name", false)}
                    className="ml-1"
                  >
                    &#9660;
                  </button>
                </th>
                <th className="px-4 py-2 border border-gray-400">
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
                <th className="px-4 py-2 border border-gray-400">
                  Numar Tricou
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
                <th className="px-4 py-2 border border-gray-400">
                  Checkin
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
                <th className="px-4 py-2 border border-gray-400">
                  Timp Alergat
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
                <th className="px-4 py-2 border border-gray-400">Update</th>
                <th className="px-4 py-2 border border-gray-400">Send email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((_user, index) => (
                <tr key={index} className="text-center">
                  <td className="px-4 py-2 border border-gray-400">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    <input
                      type="text"
                      value={formDataList[index]?.name || "N/A"}
                      onChange={(e) => handleInputChange(e, index, "name")}
                      className="text-center"
                      disabled={true}
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    <select
                      value={
                        formDataList[index]?.categorie ||
                        initialFormData.categorie
                      }
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
                  <td className="px-4 py-2 border border-gray-400">
                    <input
                      type="text"
                      value={
                        formDataList[index]?.numarTricou ||
                        initialFormData.numarTricou
                      }
                      onChange={(e) =>
                        handleInputChange(e, index, "numarTricou")
                      }
                      className="text-center"
                      disabled={true}
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    {formDataList[index]?.checkin === "DA" ? (
                      <input
                        type="button"
                        value="DA"
                        placeholder="DA"
                        className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
                      />
                    ) : (
                      <input
                        type="button"
                        value="NU"
                        placeholder="NU"
                        className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
                      />
                    )}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    {/*TODO: add input date for timpAlergat hours:minutes:seconds*/}
                    <div className="flex justify-center">
                      <input
                        type="time"
                        value={formDataList[index]?.timpAlergat || "00:00:00"}
                        step={2}
                        onChange={(e) =>
                          handleInputChange(e, index, "timpAlergat")
                        }
                        className="text-center"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    <input
                      type="button"
                      value="Update"
                      onClick={() => {
                        const updateData = async () => {
                          try {
                            await BackendService.updateRaceTime(
                              formDataList[index].id,
                              formDataList[index].timpAlergat
                            );
                            window.location.reload();
                          } catch (error) {
                            console.log(error);
                          }
                        };
                        updateData();
                      }}
                      className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    {formDataList[index].emailTrimis === "DA" ? (
                      <input
                        type="button"
                        value="Trimis"
                        className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
                        disabled={true}
                      />
                    ) : (
                      <input
                        type="button"
                        value="Send"
                        onClick={() => {
                          const sendEmail = async () => {
                            try {
                              const response =
                                await BackendService.sendRaceCompletionEmail(
                                  formDataList[index].id
                                );
                              if (response) {
                                alert(response.message);
                                window.location.reload();
                              }
                            } catch (error) {
                              console.log(error);
                              alert("Error sending email");
                            }
                          };
                          sendEmail();
                        }}
                        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cronometrare;
