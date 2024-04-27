import React, {useEffect, useState} from "react";
import {BackendService} from "@genezio-sdk/apv-production";
import {AuthService} from "@genezio/auth";
import {Header} from "../components/Header.component.tsx";

const initialFormData = {
  id: 0,
  idCursa: "",
  categorie: "",
  marimeTricou: "",
  numarTricou: "",
  revolute_cash: "",
  phone: "",
  checkin: "",
  money: ""
};

const Checkin: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]); //eslint-disable-line
  const [formDataList, setFormDataList] = useState<any[]>([]); //eslint-disable-line

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BackendService.getAllRaces();
        setUsers(response);
        setFormDataList(response.map((user: any) => ({...user})));//eslint-disable-line
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
  }, []); // Add fetchData and checkAdmin to the dependency array

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, userId: number, field: string) => {
    setFormDataList(prevList => prevList.map((formData, index) => (
      index === userId ? {...formData, [field]: e.target.value} : formData
    )));
  };

  const handleInputButtonChange = (value: string, userId: number, field: string) => {
    setFormDataList(prevList => prevList.map((formData, index) => (
      index === userId ? {...formData, [field]: value} : formData
    )));
  }

  const handleSubmit = async (userId: number) => {
    try {
      const formData = formDataList[userId];
      await BackendService.updateUserById(
        parseInt(formData.id) || initialFormData.id,
        formData.idCursa || initialFormData.idCursa,
        formData.categorie || initialFormData.categorie,
        formData.marimeTricou || initialFormData.marimeTricou,
        formData.numarTricou || initialFormData.numarTricou,
        formData.revolute_cash || initialFormData.revolute_cash,
        formData.phone || initialFormData.phone,
        formData.checkin || initialFormData.checkin,
        formData.money || initialFormData.money
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header/>
      <div>
        <table className="border-collapse w-full scale-90 h-full">
          <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">ID</th>
            <th className="border border-gray-400 px-4 py-2">Nume</th>
            <th className="border border-gray-400 px-4 py-2">Marime Tricou</th>
            <th className="border border-gray-400 px-4 py-2">Numar Tricou</th>
            <th className="border border-gray-400 px-4 py-2">Metoda de plata</th>
            <th className="border border-gray-400 px-4 py-2">Phone</th>
            <th className="border border-gray-400 px-4 py-2">Money</th>
            <th className="border border-gray-400 px-4 py-2">Checkin</th>
            <th className="border border-gray-400 px-4 py-2">Update</th>
          </tr>
          </thead>
          <tbody>
          {users.map((user, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-400 px-4 py-2">{user.name}</td>
              <td className="border border-gray-400 px-4 py-2">
                <input
                  type="text"
                  value={formDataList[index]?.marimeTricou || initialFormData.marimeTricou}
                  onChange={(e) => handleInputChange(e, index, "marimeTricou")}
                  className="text-center"
                />
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <input
                  type="text"
                  value={formDataList[index]?.numarTricou || initialFormData.numarTricou}
                  onChange={(e) => handleInputChange(e, index, "numarTricou")}
                  className="text-center"
                />
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <input
                  type="text"
                  value={formDataList[index]?.revolute_cash || initialFormData.revolute_cash}
                  onChange={(e) => handleInputChange(e, index, "revolute_cash")}
                  className="text-center"
                />
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <input
                  type="text"
                  value={formDataList[index]?.phone || initialFormData.phone}
                  onChange={(e) => handleInputChange(e, index, "phone")}
                  className="text-center"
                />
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <input
                  type="text"
                  value={formDataList[index]?.money || initialFormData.money}
                  onChange={(e) => handleInputChange(e, index, "money")}
                />
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {formDataList[index]?.checkin === "DA" ? (
                  <input
                    type="button"
                    value="DA"
                    placeholder="DA"
                    onClick={() => {
                      handleInputButtonChange("NU", index, "checkin")
                    }}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  />
                ) : (
                  <input
                    type="button"
                    value="NU"
                    onClick={() => {
                      handleInputButtonChange("DA", index, "checkin")
                    }}
                    placeholder="NU"
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  />
                )}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <button onClick={() => handleSubmit(index)}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Update
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Checkin;
