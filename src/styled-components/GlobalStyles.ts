import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  body {
    background-color: rgb(38, 80, 115);
    color: rgb(241, 250, 218);
    margin: 1rem 4rem;
   font-family: 'Lato', sans-serif;
  }

  body.modal-open {
    overflow: hidden;
  }

`;

export default GlobalStyles;
