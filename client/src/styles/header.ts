import styled from "styled-components";

const HeaderDiv = styled.div`
  height: 5.625rem;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.background};
`;

const ElementDiv = styled.div`
  border: 1px solid black;
  height: 80%;
  margin: auto;
  width: 80rem;
  margin-left: auto;
  margin-right: auto;
  background-color: ${(props) => props.theme.background};
`;

const UlHead = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: center;
  margin: auto;
  height: 100%;
`;

const LiHead = styled.li`
  margin-left: 2.5rem;
  font-size: 1.25rem;
  margin: auto;
  color: ${(props) => props.theme.text};
  &:hover {
    color: ${(props) => props.theme.textHover};
  }
`;

export { HeaderDiv, ElementDiv, UlHead, LiHead };
