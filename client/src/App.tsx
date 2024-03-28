import "./App.css";

import { RouterProvider } from "react-router-dom";

import { allRoutes as router } from "./routes/AllRoutes";
import ThemeContext from "./contexts/ThemeContext";
import GlobalStyle from './styles/global';
import { lightTheme, darkTheme } from "./styles/themes";
import useThemeMode from "./hooks/useThemeMode";
import { ThemeProvider } from "styled-components";

const App = () => {
  const { theme } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

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
