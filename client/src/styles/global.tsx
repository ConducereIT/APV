import { createGlobalStyle, withTheme } from "styled-components";

import { ThemeProps } from "./themes";

// import tw from "tailwind-styled-components"


type GlobalThemeProps = {
    theme: ThemeProps;
  };


const globalStyles = createGlobalStyle`
  :root {
    --dark-background: #1A1B27;
    --dark-text: #F5F5F7;

    --light-background: #f2f2f2;
    --light-text: #2E0509;
  }


  
  body  {
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
  }

  h1 {
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

`;

  const GlobalStyle = withTheme(globalStyles)

export default GlobalStyle;