import "./App.css";
import { RouterProvider } from "react-router-dom";
import { allRoutes as router } from "./routes/AllRoutes";
import ThemeContext from "./contexts/ThemeContext";
import GlobalStyle from "./styles/global";
import { lightTheme } from "./styles/themes";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";

const App = () => {
  const themeMode = lightTheme;

  return (
    <ThemeContext>
      <Helmet>
        <title>APV 2025</title>
        <meta
          name="description"
          content="Crosul caritabil “Aleargă Pentru Viață” este cea mai mare competiție sportivă din București organizată exclusiv de studenți."
        />
        <meta
          name="keywords"
          content="alearga, pentru, viata, cross, maraton, cauza, lse "
        />
        <meta
          name="author"
          content="Made by Miloiu Cristi, Boscanici Adrian, Aniculesei Mihnea, Ionita Ana-Maroa, Calin Silvian"
        />
      </Helmet>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ThemeContext>
  );
};

export default App;
