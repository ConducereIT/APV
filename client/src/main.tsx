import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { GoogleOAuthProvider } from '@react-oauth/google'
import { AuthService } from '@genezio/auth';

AuthService.getInstance().setTokenAndRegion("<token>", "<region>");

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId=''>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
)
