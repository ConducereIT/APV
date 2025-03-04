import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { GoogleOAuthProvider } from "@react-oauth/google";

import { AuthService } from "@genezio/auth";

const authToken = import.meta.env.VITE_AUTH_TOKEN1;
const region = import.meta.env.VITE_AUTH_REGION1;

console.log("Auth Token:", import.meta.env.VITE_AUTH_TOKEN1);



AuthService.getInstance().setTokenAndRegion(authToken, region);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="704760927363-un1ppmd62hm1e4osihaeb7s3vu3b5mpc.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// 704760927363-un1ppmd62hm1e4osihaeb7s3vu3b5mpc.apps.googleusercontent.com
