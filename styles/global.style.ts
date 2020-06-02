import { createGlobalStyle } from 'styled-components'

const GlobalStyle:React.FC = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: Helvetica, Arial, sans-serif;
    }

    ul, li {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .App {
        margin: 0 auto;
        max-width: 1200px;
        background-color: #f6f6ef;
        min-height: 100vh;
    }
`;

export default GlobalStyle;