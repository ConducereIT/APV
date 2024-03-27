import { createGlobalStyle, withTheme } from "styled-components";

import { ThemeProps } from "./themes";

type GlobalThemeProps = {
    theme: ThemeProps;
  };


const globalStyles = createGlobalStyle`
  :root {
    --dark-background: #292A3A;
    --dark-text: #A8A5BF;
    --dark-text-hover: #08E4D5;

    --light-background: #f2f2f2;
    --light-text: #A8A5BF;
    --light-text-hover: #00B9AE;

    --lightTheme-purple: #2F1A53;
    --lightTheme-turquoise: #00B9AE;

    --darkTheme-purple: #4C268D;
    --darkTheme-turquoise: #08E4D5;
  }


  
  body  {
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
  }

  h1 {
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }
  h1:hover{
    color: ${({ theme }: GlobalThemeProps) => theme.textHover};
  }

  p {
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

  span {
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }
  p:hover{
    color: ${({ theme }: GlobalThemeProps) => theme.textHover};
  }

  .header{
    .elementHeader{
    
    }

    .liHeader{
      color: ${({theme}: GlobalThemeProps) => theme.text};
    }


  }



`;

  const GlobalStyle = withTheme(globalStyles)

export default GlobalStyle;
