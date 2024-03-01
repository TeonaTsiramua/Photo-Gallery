import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  body {
    background-color: rgb(38, 80, 115);
  color: rgb(241, 250, 218);
  margin: 1rem 4rem;
  font-family: 'Lato', sans-serif;
  }

`;

export default GlobalStyles;
