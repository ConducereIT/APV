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

const Admin: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]); //eslint-disable-line
  const [formDataList, setFormDataList] = useState<any[]>([]); //eslint-disable-line
  const [allUsers, setAllUsers] = useState<any[]>([]); //eslint-disable-line
  const [sortedAllUsers, setSortedAllUsers] = useState<any[]>([]); //eslint-disable-line
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BackendService.getAllRaces();
        setUsers(response);
        setFormDataList(response.map((user: any) => ({ ...user }))); //eslint-disable-line
      } catch (error) {
        console.log(error);
      }
    };

    const fetchAllUsers = async () => {
      try {
        const response = await BackendService.getAllUsers();
        console.log("response", response);
        setAllUsers(response);
        setSortedAllUsers(response);
      } catch (error) {
        console.log(error);
      }
    };

    const checkAdmin = async () => {
      try {
        const response = await AuthService.getInstance().userInfo();

        if (response.authProvider !== "admin") {
          window.location.href = "/";
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    checkAdmin();
    fetchAllUsers();
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

  const handleInputButtonChange = (
    value: string,
    userId: number,
    field: string
  ) => {
    setFormDataList((prevList) =>
      prevList.map((formData, index) =>
        index === userId ? { ...formData, [field]: value } : formData
      )
    );
  };

  const handleSubmit = async (userId: number) => {
    try {
      const formData = formDataList[userId];
      await BackendService.updateUserById(
        formData.name || initialFormData.name,
        parseInt(formData.id) || initialFormData.id,
        formData.idCursa || initialFormData.idCursa,
        formData.categorie || initialFormData.categorie,
        formData.marimeTricou || initialFormData.marimeTricou,
        formData.numarTricou || initialFormData.numarTricou,
        formData.revolute_cash || initialFormData.revolute_cash,
        formData.phone || initialFormData.phone,
        formData.checkin || initialFormData.checkin,
        formData.suma || initialFormData.suma
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSort = (column: string, ascending: boolean = true) => {
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
    setFormDataList(sortedUsers);
    setUsers(sortedUsers);
  };

  const handleSortUsers = (column: string, ascending: boolean = true) => {
    const sortedUsers = [...allUsers].sort((a, b) => {
      if (column === "createdAt") {
        return ascending
          ? new Date(a[column]).getTime() - new Date(b[column]).getTime()
          : new Date(b[column]).getTime() - new Date(a[column]).getTime();
      }
      if (a[column] === undefined || b[column] === undefined) return 0;
      return ascending
        ? a[column]?.localeCompare(b[column])
        : b[column]?.localeCompare(a[column]);
    });
    setSortedAllUsers(sortedUsers);
  };

  return (
    <>
      <Header />

      <div className="flex flex-col items-center pt-36">
        <h1 className="text-2xl font-bold mb-10">Conturi create</h1>
        <div className="w-full px-4 overflow-x-auto max-w-[1200px] mb-10">
          <table className="border-collapse w-full mb-5 h-full text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-1 py-1 border border-gray-400">ID</th>
                <th className="px-1 py-1 border border-gray-400">
                  UserID
                  <button
                    onClick={() => handleSortUsers("userId")}
                    className="ml-1 text-xs"
                  >
                    &#9650;
                  </button>
                  <button
                    onClick={() => handleSortUsers("userId", false)}
                    className="ml-1 text-xs"
                  >
                    &#9660;
                  </button>
                </th>
                <th className="px-1 py-1 border border-gray-400">
                  Nume
                  <button
                    onClick={() => handleSortUsers("name")}
                    className="ml-1 text-xs"
                  >
                    &#9650;
                  </button>
                  <button
                    onClick={() => handleSortUsers("name", false)}
                    className="ml-1 text-xs"
                  >
                    &#9660;
                  </button>
                </th>
                <th className="px-1 py-1 border border-gray-400">
                  Email
                  <button
                    onClick={() => handleSortUsers("email")}
                    className="ml-1 text-xs"
                  >
                    &#9650;
                  </button>
                  <button
                    onClick={() => handleSortUsers("email", false)}
                    className="ml-1 text-xs"
                  >
                    &#9660;
                  </button>
                </th>
                <th className="px-1 py-1 border border-gray-400">
                  Provider
                  <button
                    onClick={() => handleSortUsers("authProvider")}
                    className="ml-1 text-xs"
                  >
                    &#9650;
                  </button>
                  <button
                    onClick={() => handleSortUsers("authProvider", false)}
                    className="ml-1 text-xs"
                  >
                    &#9660;
                  </button>
                </th>
                <th className="px-1 py-1 border border-gray-400">
                  Data înregistrării
                  <button
                    onClick={() => handleSortUsers("createdAt")}
                    className="ml-1 text-xs"
                  >
                    &#9650;
                  </button>
                  <button
                    onClick={() => handleSortUsers("createdAt", false)}
                    className="ml-1 text-xs"
                  >
                    &#9660;
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedAllUsers.map((user, index) => (
                <tr key={index} className="text-center">
                  <td className="px-1 py-1 border border-gray-400">
                    {index + 1}
                  </td>
                  <td className="px-1 py-1 border border-gray-400">
                    {user.userId}
                  </td>
                  <td className="px-1 py-1 border border-gray-400">
                    {user.name}
                  </td>
                  <td className="px-1 py-1 border border-gray-400">
                    {user.email}
                  </td>
                  <td className="px-1 py-1 border border-gray-400">
                    {user.authProvider}
                  </td>
                  <td className="px-1 py-1 border border-gray-400">
                    {new Date(user.createdAt).toLocaleDateString("ro-RO")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h1 className="text-2xl font-bold mb-10">Toate cursele - Checkin</h1>
        <div className="w-full px-4 overflow-x-auto max-w-[1200px]">
          <table className="border-collapse w-full mb-[5rem] h-full text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-1 py-1 border border-gray-400">ID</th>
                <th className="px-1 py-1 border border-gray-400">
                  UserID
                  <button
                    onClick={() => handleSort("idCursa")}
                    className="ml-1 text-xs"
                  >
                    &#9650;
                  </button>
                  <button
                    onClick={() => handleSort("idCursa", false)}
                    className="ml-1 text-xs"
                  >
                    &#9660;
                  </button>
                </th>
                <th className="px-1 py-1 border border-gray-400">
                  Nume
                  <button
                    onClick={() => handleSort("name")}
                    className="ml-1 text-xs"
                  >
                    &#9650;
                  </button>
                  <button
                    onClick={() => handleSort("name", false)}
                    className="ml-1 text-xs"
                  >
                    &#9660;
                  </button>
                </th>
                <th className="px-1 py-1 border border-gray-400">
                  Cursa
                  <button
                    onClick={() => handleSort("categorie")}
                    className="ml-1 text-xs"
                  >
                    &#9650;
                  </button>
                  <button
                    onClick={() => handleSort("categorie", false)}
                    className="ml-1 text-xs"
                  >
                    &#9660;
                  </button>
                </th>
                <th className="px-1 py-1 border border-gray-400">
                  Marime Tricou
                  <button
                    onClick={() => handleSort("marimeTricou")}
                    className="ml-1 text-xs"
                  >
                    &#9650;
                  </button>
                  <button
                    onClick={() => handleSort("marimeTricou", false)}
                    className="ml-1 text-xs"
                  >
                    &#9660;
                  </button>
                </th>
                <th className="px-1 py-1 border border-gray-400">
                  Numar Tricou
                  <button
                    onClick={() => handleSort("numarTricou")}
                    className="ml-1 text-xs"
                  >
                    &#9650;
                  </button>
                  <button
                    onClick={() => handleSort("numarTricou", false)}
                    className="ml-1 text-xs"
                  >
                    &#9660;
                  </button>
                </th>
                <th className="px-1 py-1 border border-gray-400">
                  Plata
                  <button
                    onClick={() => handleSort("revolute_cash")}
                    className="ml-1 text-xs"
                  >
                    &#9650;
                  </button>
                  <button
                    onClick={() => handleSort("revolute_cash", false)}
                    className="ml-1 text-xs"
                  >
                    &#9660;
                  </button>
                </th>
                <th className="px-1 py-1 border border-gray-400">
                  Phone
                  <button
                    onClick={() => handleSort("phone")}
                    className="ml-1 text-xs"
                  >
                    &#9650;
                  </button>
                  <button
                    onClick={() => handleSort("phone", false)}
                    className="ml-1 text-xs"
                  >
                    &#9660;
                  </button>
                </th>
                <th className="px-1 py-1 border border-gray-400">
                  Money
                  <button
                    onClick={() => handleSort("suma")}
                    className="ml-1 text-xs"
                  >
                    &#9650;
                  </button>
                  <button
                    onClick={() => handleSort("suma", false)}
                    className="ml-1 text-xs"
                  >
                    &#9660;
                  </button>
                </th>
                <th className="px-1 py-1 border border-gray-400">
                  Venit
                  <button
                    onClick={() => handleSort("checkin")}
                    className="ml-1 text-xs"
                  >
                    &#9650;
                  </button>
                  <button
                    onClick={() => handleSort("checkin", false)}
                    className="ml-1 text-xs"
                  >
                    &#9660;
                  </button>
                </th>
                <th className="px-1 py-1 border border-gray-400">Update</th>
              </tr>
            </thead>
            <tbody>
              {users.map((_user, index) => (
                <tr key={index} className="text-center">
                  <td className="px-1 py-1 border border-gray-400">
                    {index + 1}
                  </td>
                  <td className="px-1 py-1 border border-gray-400">
                    {formDataList[index]?.idCursa}
                  </td>
                  <td className="px-1 py-1 border border-gray-400">
                    <input
                      type="text"
                      value={formDataList[index]?.name || "N/A"}
                      onChange={(e) => handleInputChange(e, index, "name")}
                      className="text-center w-full"
                    />
                  </td>
                  <td className="px-1 py-1 border border-gray-400">
                    <select
                      value={
                        formDataList[index]?.categorie ||
                        initialFormData.categorie
                      }
                      onChange={(e) => handleInputChange(e, index, "categorie")}
                      className="text-center w-full"
                    >
                      {Object.entries(races).map(([key, value]) => (
                        <option key={key} value={key} className="text-center">
                          {value}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-1 py-1 border border-gray-400">
                    <input
                      type="text"
                      value={
                        formDataList[index]?.marimeTricou ||
                        initialFormData.marimeTricou
                      }
                      onChange={(e) =>
                        handleInputChange(e, index, "marimeTricou")
                      }
                      className="text-center w-full"
                    />
                  </td>
                  <td className="px-1 py-1 border border-gray-400">
                    <input
                      type="text"
                      value={
                        formDataList[index]?.numarTricou ||
                        initialFormData.numarTricou
                      }
                      onChange={(e) =>
                        handleInputChange(e, index, "numarTricou")
                      }
                      className="text-center w-full"
                    />
                  </td>
                  <td className="px-1 py-1 border border-gray-400">
                    <input
                      type="text"
                      value={
                        formDataList[index]?.revolute_cash ||
                        initialFormData.revolute_cash
                      }
                      onChange={(e) =>
                        handleInputChange(e, index, "revolute_cash")
                      }
                      className="text-center w-full"
                    />
                  </td>
                  <td className="px-1 py-1 border border-gray-400">
                    <input
                      type="text"
                      value={
                        formDataList[index]?.phone || initialFormData.phone
                      }
                      onChange={(e) => handleInputChange(e, index, "phone")}
                      className="text-center w-full"
                    />
                  </td>
                  <td className="px-1 py-1 border border-gray-400">
                    <input
                      type="text"
                      value={formDataList[index]?.suma || initialFormData.suma}
                      onChange={(e) => handleInputChange(e, index, "suma")}
                      className="text-center w-full"
                    />
                  </td>
                  <td className="px-1 py-1 border border-gray-400">
                    {formDataList[index]?.checkin === "DA" ? (
                      <input
                        type="button"
                        value="DA"
                        placeholder="DA"
                        onClick={() => {
                          handleInputButtonChange("NU", index, "checkin");
                        }}
                        className="px-2 py-1 text-xs font-bold text-white bg-green-500 rounded hover:bg-green-700"
                      />
                    ) : (
                      <input
                        type="button"
                        value="NU"
                        onClick={() => {
                          handleInputButtonChange("DA", index, "checkin");
                        }}
                        placeholder="NU"
                        className="px-2 py-1 text-xs font-bold text-white bg-red-500 rounded hover:bg-red-700"
                      />
                    )}
                  </td>
                  <td className="px-1 py-1 border border-gray-400">
                    <button
                      onClick={() => handleSubmit(index)}
                      className="px-2 py-1 text-xs font-bold text-white bg-green-500 rounded hover:bg-green-700"
                    >
                      Update
                    </button>
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

export default Admin;
