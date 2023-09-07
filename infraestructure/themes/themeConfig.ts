import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    background: '#FFF',
    text: '#333',
    inputBorderColor: '#bdc3c7',
    mainColor: '#EF9223',
    pressedColor: 'rgba(239, 108, 0, 0.6)',
    hoverColor: 'rgba(239, 108, 0, 0.9)'

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