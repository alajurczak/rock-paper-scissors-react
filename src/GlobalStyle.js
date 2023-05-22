import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        margin: 0 auto;
        word-break: break-word;
        background: radial-gradient(at top,hsl(214, 47%, 23%), hsl(237, 49%, 15%));
        min-height: 100vh;
        min-width: 100vw;
        padding-top: 80px;
        font-family: "Barlow Semi Condensed", sans-serif;
    }
`;
