import React, { useState } from "react";
import { BackendService } from "@genezio-sdk/apv-production";
import { AuthService } from "@genezio/auth";

const Checkin: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [render, setRender] = useState(false);

  const handleFunctionShowCurrentUser = async () => {
    try {
      const response = await AuthService.getInstance().userInfo();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAllCursa = async () => {
    try {
      const response = await BackendService.getAllRaces();
      console.log(response);
      setUsers(response);
      setRender(true);
    } catch (error) {
      console.log(error);
    }
  };

  const changeCustomDetailsUserByUserId = async () => {
    try {
      const response = await BackendService.updateUserDetailsByUserId(
        "a23efdde-3112-44ae-a98a-92f723c2b10f",
        {
          salut: "Salut",
          checkin: true,
          malai: "200lei",
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-20 mb-10 flex flex-col items-center space-y-3">
      <h1>Poti vedea rezultatele in consola</h1>
      <button
        onClick={handleFunctionShowCurrentUser}
        className="bg-[#1b756f] hover:bg-[#3f9892] h-[10%] rounded-md text-white text-base font-bold w-[20%]"
      >
        Show Current User
      </button>
      <button
        onClick={changeCustomDetailsUserByUserId}
        className="bg-[#1b756f] hover:bg-[#3f9892] h-[10%] rounded-md text-white text-base font-bold w-[20%]"
      >
        Update User
      </button>
      <button
        onClick={handleAllCursa}
        className="bg-[#1b756f] hover:bg-[#3f9892] h-[10%] rounded-md text-white text-base font-bold w-[20%]"
      >
        All Curse
      </button>

      {render && (
        <div className="grid grid-cols-7 gap-2 mx-12 mt-24">
          <div className="font-bold">Id</div>
          <div className="font-bold">Nume</div>
          <div className="font-bold">Telefon</div>
          <div className="font-bold">Marime Tricou</div>
          <div className="font-bold">Numar Tricou</div>
          <div className="font-bold">Metoda Plata</div>
          <div className="font-bold">Timp</div>
          {users.map((user, index) => (
            <React.Fragment key={index}>
              <div>{user.id}</div>
              <div>
                {user.name != "" && user.name != null ? (
                  user.name
                ) : (
                  <span className="text-red-600">null</span>
                )}
              </div>
              <div>
                {user.phone != "" && user.phone != null ? (
                  user.phone
                ) : (
                  <span className="text-red-600">null</span>
                )}
              </div>
              <div>
                {user.marimeTricou != "" && user.marimeTricou != null ? (
                  user.marimeTricou
                ) : (
                  <span className="text-red-600">null</span>
                )}
              </div>
              <div>
                {user.numarTricou != null ? (
                  user.numarTricou
                ) : (
                  <span className="text-red-600">null</span>
                )}
              </div>
              <div>
                {user.revolute_cash != "" && user.revolute_cash != null ? (
                  user.revolute_cash
                ) : (
                  <span className="text-red-600">null</span>
                )}
              </div>
              <div>
                {user.timpAlergat != null ? (
                  user.timpAlergat
                ) : (
                  <span className="text-red-600">null</span>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Checkin;
