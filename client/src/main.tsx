import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { GoogleOAuthProvider } from "@react-oauth/google";

import { AuthService } from "@genezio/auth";
const authToken = import.meta.env.VITE_AUTH_TOKEN;
const region = import.meta.env.VITE_AUTH_REGION;

AuthService.getInstance().setTokenAndRegion(authToken, region);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="704760927363-un1ppmd62hm1e4osihaeb7s3vu3b5mpc.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// 30633693522-a2tc77l453c8nr0imj9k5kck86h2h3dl.apps.googleusercontent.com
