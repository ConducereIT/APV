import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthService } from '@genezio/auth';

import { Header } from "../components/Header.component";

const Account: React.FC  = () => {
    const [user, setUser] = useState(
        {
            nume: "",
            phone: "",
            marimeTricou: "",
            curse: "",
        }
    );

    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [event.target.name] : event.target.value});
      }

      useEffect(() => {
        let isMounted = true;
    
        const isLoggedIn = async () => {
          try {
            const response = await AuthService.getInstance().userInfoForToken(
              localStorage.getItem("token") as string,
            );
    
            if (!(isMounted && response)) {
                // navigate("/");
            }
          } catch (error) {
            console.log("Not logged in", error);
          }
        };
    
        isLoggedIn();
    
        return () => {
          isMounted = false;
        };
      }, [navigate]);

      return (
        <>
            <Header />
            <div className="h-96 w-auto bg-gray-200 text-center mx-auto max-w-[80rem] mt-52 rounded-lg p-6">
                <div className="mt-10">
                <h1 className="text-xl mb-10 font-semibold mt-4">Numele participantului {user.nume}</h1>
                    <input
                        type="text"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        placeholder="Număr de telefon"
                        className="rounded-full px-4 py-2 mb-4 mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        name="marimeTricou"
                        value={user.marimeTricou}
                        onChange={handleChange}
                        placeholder="Mărime tricou"
                        className="rounded-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
        </>
      )
}

export default Account;