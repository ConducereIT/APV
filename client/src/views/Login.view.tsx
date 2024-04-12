import React, {useState, useEffect} from 'react';
import {CredentialResponse, GoogleLogin} from '@react-oauth/google';
import {AuthService} from '@genezio/auth';
import {useNavigate} from 'react-router-dom';
import {Header} from '../components/Header.component';
import {BackendService} from '@genezio-sdk/dev-apv';

const Login: React.FC = () => {

  const navigate = useNavigate();
  const [googleLoginLoading, setGoogleLoginLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const isLoggedIn = async () => {
      try {
        const response = await AuthService.getInstance().userInfoForToken(
          localStorage.getItem("token") as string,
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
      await AuthService.getInstance().googleRegistration(credentialResponse.credential!);

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
  }

  return (
    <>
      <Header/>
      <div className="md:mt-44 flex justify-center items-start">
        <aside className=" bg-white rounded-lg shadow-xl flex flex-col items-center justify-center h-[20rem] w-[50rem]">
                    <span className="text-sm mb-4 sm:mb-0 sm:text-2xl font-bold text-custom-green "
                          style={{marginTop: "-2rem"}}>
                        ÎNSCRIERE ALEARGĂ PENTRU VIAȚĂ, EDIȚIA XV
                    </span>
          <div className="flex flex-col items-center justify-center space-y-4 md:mt-16">
            {googleLoginLoading ? (
              <div className="text-center">
                <p>Loading...</p>
              </div>
            ) : (
              <GoogleLogin
                onSuccess={credentialResponse => {
                  handleGoogleLogin(credentialResponse);
                }}
                onError={() => {
                  console.error('Login Failed');
                  alert('Login Failed. Please check your connection and try again.');
                }}
              />
            )}
          </div>
        </aside>
      </div>
    </>
  );
}

export default Login;
