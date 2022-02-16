import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url('/images/system.gif');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
