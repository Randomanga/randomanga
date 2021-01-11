import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
    html,body {
        margin: 0;
        padding: 0;
    }
    * , *::after, *::before {
        box-sizing: border-box;
        font-size: 14px;
    }
    body{
        align-items: center;
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.primaryLight};
        
        font-family: Roboto,-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        text-rendering: optimizeLegibility;
    }

    h1 {
    font-size: 2rem;
    text-align: left;
    }
    div {
      text-align: center;
    }
    
    small {
      display: block;
    }
    a {
      color: ${({ theme }) => theme.primaryLight};
      text-decoration: none;
      user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
    }

`;
