import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    :focus{
        outline:0;
    }
    body{
        background: ${(props) => props.theme.colors["base-background"]};
        -webkit-font-smoothing : antialiased;
    }
}`;
