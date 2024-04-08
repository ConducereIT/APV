import React, { useState, useEffect } from 'react';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { AuthService } from '@genezio/auth';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header.component';
import { BackendService } from '@genezio-sdk/dev-apv';

const Login : React.FC = () => {
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
              navigate("/");
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
        setGoogleLoginLoading(true)

        try {
            await AuthService.getInstance().googleRegistration(credentialResponse.credential!);
            
            console.log('Login Success');

            const userInfo = await BackendService.checkIfUserCreateIsComplete();

            if (userInfo.status != 202)

            navigate("/");
            setGoogleLoginLoading(false);
        } catch (error) {
            console.log("Error");
        }
    }

    return (
        <>
        <Header />
       <div className="form-container w-96 h-96 mx-auto mt-52">
       { googleLoginLoading ?
             <>Loading...</> :
             <GoogleLogin
                 onSuccess={credentialResponse => {
                     handleGoogleLogin(credentialResponse);
                 }}
                 // eslint-disable-next-line
                 onError={() => {
                     console.log('Login Failed');
                     alert('Login Failed') 
                 }}
             />
        }
        </div>
     </>
      );

}

export default Login;