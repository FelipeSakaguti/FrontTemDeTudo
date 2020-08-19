import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

    color: var(--white);
  }


  html, body, #root{
      height: 100vh;
      max-width: 100vw;

      height: 100%;
      width: 100%;
  }

  *, button, input {
      border: 0;
      background: none;
      font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  }
  html {
    background: var(--primary);
  }
  :root {
    --primary: #e4e9f0;
    --menu-buttom: #747474;
    --menu-hover: #193147;
    --menu-button-hover: #DFDFDF;
    --white: #D9D9D9;
    --menu-background: #1b2430;
  }
`;