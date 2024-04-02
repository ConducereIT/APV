import "./App.css";

import { RouterProvider } from "react-router-dom";

import { allRoutes as router } from "./routes/AllRoutes";
import ThemeContext from "./contexts/ThemeContext";
import GlobalStyle from "./styles/global";
import { lightTheme } from "./styles/themes";
import { ThemeProvider } from "styled-components";


const App = () => {
  const themeMode = lightTheme;
  
  return (
    <ThemeContext>
        <ThemeProvider theme={themeMode}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </ThemeProvider>
      </ThemeContext>
  );
};

export default App;
