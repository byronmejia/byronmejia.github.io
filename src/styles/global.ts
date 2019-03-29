import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* You can add global styles to this file, and also import other style files */
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');

    * {
        box-sizing: border-box;
    }

    h1, h2 {
        margin: .25em 0;
    }

    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        font-family: 'Open Sans', sans-serif;
    }

    @media print {
        body {
            -webkit-print-color-adjust: exact;
        }
    }

    @page {
        size: A4 portrait;
        margin-left: 0px;
        margin-right: 0px;
        margin-top: 0px;
        margin-bottom: 0px;
        margin: 0;
        -webkit-print-color-adjust: exact;
    }
`;

export default GlobalStyle;
