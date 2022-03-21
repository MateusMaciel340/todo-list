import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0; padding: 0; box-sizing: border-box;
        background-color: #2e292e;
    }
`

export const Container = styled.div`
    color: #FFFFFF; margin: 0 auto; width: 50%;
    margin-top: 50px; padding: 5px;
`