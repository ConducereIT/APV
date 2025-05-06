import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  background: "white",
  text: "black",
  textHover: "gray-600",
};

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    text: string;
    textHover: string;
  }
}
