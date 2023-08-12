import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    background: '#FFF',
    text: '#333',
    inputBorderColor: '#bdc3c7',
    inputFocusedBorderColor: '#F4B154'
}

export const darkTheme = {}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`