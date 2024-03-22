import ThemeContext from "../contexts/ThemeContext";
import { HeaderDiv, ElementDiv } from "../styles/header";

export const Header = () => {
  return (
    <>
      <ThemeContext>
        <HeaderDiv>
          <ElementDiv>
            <h1>ceva</h1>
          </ElementDiv>
        </HeaderDiv>
      </ThemeContext>
    </>
  );
};
