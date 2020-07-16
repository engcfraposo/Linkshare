import { createGlobalStyle } from 'styled-components';

import background from '../assets/background.svg';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #3f51b5 url(${background}) no-repeat center top ;
  }

  html, body, input, button {
     font-family: 'Roboto', sans-serif;
    
  }

  #root {
     max-width: 1020px;
    /* margin: 0 auto; */
    padding: 0 20px 50px;
    /* margin: 0 0; */
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`;
