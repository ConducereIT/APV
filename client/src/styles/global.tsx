import { createGlobalStyle, withTheme } from "styled-components";

import { ThemeProps } from "./themes";

import tw from "twin.macro";


type GlobalThemeProps = {
    theme: ThemeProps;
  };

const GlobalStyle = createGlobalStyle`
  :root {
    --dark-background: #1A1B27;
    --dark-text: #F5F5F7;

    --light-background: #f2f2f2;
    --light-text: #2E0509;

  }


  ${tw`m-0 p-0 box-border outline-none`}
  
  body  {
    -webkit-font-smoothing: antialiased;
    height: 100vh;
    width: 50vw;
    margin: 0 auto;
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 3.375rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

`;



export default withTheme(GlobalStyle);