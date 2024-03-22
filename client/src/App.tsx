import "./App.css";

import React from "react";

import { RouterProvider } from "react-router-dom";

import { allRoutes as router } from "./routes/AllRoutes";
import ThemeContext from "./contexts/ThemeContext";
import GlobalStyle from './styles/global';
import { lightTheme, darkTheme } from "./styles/themes";
import useThemeMode from "./hooks/useThemeMode";
import { ThemeProvider } from "styled-components";

const App = () => {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <React.Fragment>
      <ThemeContext>
        <ThemeProvider theme={themeMode}>
          <GlobalStyle />
          <RouterProvider router={router} />
          <h1>ceva</h1>
          <button onClick={() => themeToggler()}>ceva</button>
        </ThemeProvider>
      </ThemeContext>
    </React.Fragment>
  );
};

export default App;
