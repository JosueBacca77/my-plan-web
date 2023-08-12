'use client';
import Login from './login/page';
import { lightTheme, GlobalStyles } from './themeConfig';
import { ThemeProvider } from "styled-components";


export default function Home() {

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Login />
    </ThemeProvider>
  )
}