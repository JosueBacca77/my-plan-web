import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, lightTheme } from '../themes/themeConfig'

interface RootStyledProps {
    children: React.ReactNode
}
export default function RootStyled(props:RootStyledProps) {
  return (
    <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            {props.children}
          </ThemeProvider>
  )
}
