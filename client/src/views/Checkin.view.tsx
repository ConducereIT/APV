import {BackendService} from "@genezio-sdk/apv-production";
import {AuthService} from "@genezio/auth";

const Checkin: React.FC = () => {

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
    } catch (error) {
      console.log(error);
    }
  }

  const changeCustomDetailsUserByUserId = async () => {
    try {
      const response = await BackendService.updateUserDetailsByUserId("a23efdde-3112-44ae-a98a-92f723c2b10f", {
        salut:"Salut",
        checkin: true,
        malai:"200lei",
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="mt-20 mb-10 flex flex-col items-center space-y-3">
        <h1>Poti vedea rezultatele in consola</h1>
        <button onClick={handleFunctionShowCurrentUser}
                className="bg-[#1b756f] hover:bg-[#3f9892]  h-[20%] rounded-md text-white text-base text-bold w-[10%]">
          show current user
        </button>

        <button onClick={changeCustomDetailsUserByUserId}
                className="bg-[#1b756f] hover:bg-[#3f9892]  h-[20%] rounded-md text-white text-base text-bold w-[10%]">
          update user
        </button>

        <button onClick={handleAllCursa}
                className="bg-[#1b756f] hover:bg-[#3f9892]  h-[20%] rounded-md text-white text-base text-bold w-[10%]">
          all curse
        </button>
      </div>
    </>
  );
};

export default Checkin;
