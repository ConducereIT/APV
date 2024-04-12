import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthService} from "@genezio/auth";

const Logout: React.FC = () => {

  const navigate = useNavigate();
  useEffect(() => {
    const logout = async () => {
      try {
        await AuthService.getInstance().logout();
        navigate("/");
      } catch (error) {
        console.log("Not logged out", error);
      }
    }

    logout();
  }, [navigate]);


  return (
    <>
      <h1>Logout</h1>
    </>
  );
}

export default Logout;
