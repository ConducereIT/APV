import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { GoogleOAuthProvider } from '@react-oauth/google'
import { AuthService } from '@genezio/auth';

AuthService.getInstance().setTokenAndRegion(
"0-liwbyaw36gcn2ndn5mrscnl3q40nqquj",
 "eu-central-1");

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='1062295332779-684ijgeeas6721n2ekoe71nkcpcqcu7s.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
)

// 30633693522-a2tc77l453c8nr0imj9k5kck86h2h3dl.apps.googleusercontent.com