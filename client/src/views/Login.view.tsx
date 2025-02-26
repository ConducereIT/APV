import React, { useState, useEffect } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { AuthService } from "@genezio/auth";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header.component";
import { BackendService } from "@genezio-sdk/apv";
import { Helmet } from "react-helmet";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [googleLoginLoading, setGoogleLoginLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    console.log(AuthService.getInstance());
    const isLoggedIn = async () => {
      try {
        const response = await AuthService.getInstance().userInfoForToken(
          localStorage.getItem("token") as string
        );

        if (isMounted && response) {
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

  const handleGoogleLogin = async (credentialResponse: CredentialResponse) => {
    setGoogleLoginLoading(true);

    try {
      await AuthService.getInstance().googleRegistration(
        credentialResponse.credential!
      );
      await BackendService.addUser();
      const allRace = await BackendService.getRaces();

      if (localStorage.getItem("token") && allRace.length === 0) {
        navigate("/register-race");
      } else {
        navigate("/");
      }
      setGoogleLoginLoading(false);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>APV 2024 | Login</title>
      </Helmet>
      <Header />
      <div className="flex items-start justify-center md:mt-44">
        <aside className=" bg-white rounded-lg shadow-xl flex flex-col items-center justify-center h-[20rem] w-[50rem]">
          <span
            className="mb-4 text-sm font-bold sm:mb-0 sm:text-2xl text-custom-green "
            style={{ marginTop: "-2rem" }}
          >
            ÎNSCRIERE ALEARGĂ PENTRU VIAȚĂ, EDIȚIA XV
          </span>
          <div className="flex flex-col items-center justify-center space-y-4 md:mt-16">
            {googleLoginLoading ? (
              <div className="text-center">
                <p>Loading...</p>
              </div>
            ) : (
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  handleGoogleLogin(credentialResponse);
                }}
                onError={() => {
                  console.error("Login Failed");
                  alert(
                    "Login Failed. Please check your connection and try again."
                  );
                }}
              />
            )}
          </div>
        </aside>
      </div>
    </>
  );
};

export default Login;
