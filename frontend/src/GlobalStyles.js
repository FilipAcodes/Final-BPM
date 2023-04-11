import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle` 
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  #root{height: 100%;

  }
  
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  dl,
  dd,
  ol,
  ul,
  figure,
  hr {
    margin: 0;
    padding: 0;
    font-family: 'Fjalla One', sans-serif;
  }  
  ol,
  ul {
    list-style: none;
  }  
  a {
    color: inherit;
    text-decoration: none;
    font-family: 'Fjalla One', sans-serif;
  } 
  button,
  input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    background: none;
    cursor: pointer; 
    font-family: 'Fjalla One', sans-serif;       
  } 
  body {
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.5;  
    height:100%;    
  } 
`;

export default GlobalStyles;
