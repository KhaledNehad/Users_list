import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

:root {
  --primary: #a7b8a8;
  --secondary: #e1d3c7;
  --tertiary: #e8cdad;
  --white: #fff;
  --black: #000;
  --dark-text: #292929;
  --border-radius-sm: 1rem;
  --border-radius-lg: 2rem;
}

body {
  background-color: #ebe9e4;
  font-family: 'Work Sans', sans-serif;
}
`;

export default GlobalStyle;