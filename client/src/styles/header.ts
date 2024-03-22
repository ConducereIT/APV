import styled from "styled-components";

const HeaderDiv = styled.div.attrs(props => ({
  className: `header h-[5.625rem] w-full fixed top-0 ${props.theme && `bg-${props.theme.background}`}`
}))``;

const ElementDiv = styled.div.attrs(props => ({
    className: `elementHeader border border-black h-[80%] my-auto  w-[80rem] mx-auto m ${props.theme && `bg-${props.theme.background}`}`
  }))``;

const UlHead = styled.ul.attrs( () => ({
  className: `flex list-none p-0 center my-auto`
}))``;

const LiHead = styled.li.attrs ( props => ({
  className: `liHeader ml-10 text-xl ${props.theme && `text-${props.theme.text} hover:text-${props.theme.textHover}`}`
}))``;

export {HeaderDiv, ElementDiv, UlHead, LiHead};
