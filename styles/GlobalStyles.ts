import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    min-height: 100vh;
    display: flex;
    flex-direction: column
  }
  // your global styles
`;

export default GlobalStyles;