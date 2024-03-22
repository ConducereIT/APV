import styled from "styled-components";

const HeaderDiv = styled.div.attrs(props => ({
  className: `header h-[90px] w-full fixed top-0 ${props.theme && `bg-${props.theme.background}`}`
}))``;

const ElementDiv = styled.div.attrs(props => ({
    className: `elementHeader h-full w-[80rem] mx-auto m ${props.theme && `bg-${props.theme.background}`}`
  }))``;

export {HeaderDiv, ElementDiv};
