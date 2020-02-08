import { createGlobalStyle } from 'styled-components/macro';

const ResetStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
  }

   html {
    font-size: 100%;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul, li, blockquote, q {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-style: normal;
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default ResetStyles;
