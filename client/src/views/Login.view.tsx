import React, { useState, useEffect } from 'react';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { AuthService } from '@genezio/auth';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header.component';
import { BackendService } from '@genezio-sdk/dev-apv';
import pdf from "../assets/REGULAMENT-APV-2024.pdf";
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
            console.log('Login Success');
            const checkStatus = await BackendService.addUser();
            console.log(checkStatus);

            setGoogleLoginLoading(false);
        } catch (error) {
            console.error("Login Error", error);
            alert('Login Failed. Please try again.');
            setGoogleLoginLoading(false);
        }
    }

    return (
        <>
            <Header />
            <div className="md:mt-40 flex justify-center items-start">       
                <aside className=" bg-white rounded-lg shadow-xl flex flex-col items-center justify-center h-[25rem] w-[50rem]">
                    <span className="text-2xl font-bold text-custom-green " style={{ marginTop:"-2rem" }}>
                        ÎNSCRIERE ALEARGĂ PENTRU VIAȚĂ, EDIȚIA XV
                    </span>
                    <div className="flex flex-col items-center justify-center space-y-4 md:mt-16">
                        {googleLoginLoading ? (
                            <div className="text-center">
                                <p>Loading...</p>
                                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
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
                    <a href={pdf} target='_blank'>
                    <p className="md:mt-16 text-base">
                      <i className="fa fa-info-circle mt-2 mr-1 text-custom-green text-sm"></i>
                      Vă rugăm consultați regulamentul.
                    </p>
                   </a>
                </aside>
            </div>
        </>
    );
}

export default Login;
