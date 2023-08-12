'use client';
import { lightTheme, GlobalStyles } from './themeConfig';
import styled, { ThemeProvider } from "styled-components";


const Main = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
`;

export default function Home() {

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Main>SOY EL PAGE PRINCIPAL</Main>
    </ThemeProvider>
  )
}