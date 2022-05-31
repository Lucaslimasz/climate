import { createGlobalStyle } from "styled-components";

interface ThemeStyles {
  theme: {
    background: string;
    title: string;
    text_primary: string;
    text_secundary: string;
    card: string;
    card_secundary: string;
  };
}

export default createGlobalStyle<ThemeStyles>`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${({ theme }) => theme.background};
  color: ${({theme}) => theme.text_primary};
}

body,
input,
textarea,
button {
  font: 500 1rem Inter, sans-serif;
  color: ${({theme}) => theme.text_primary};
  outline: none;
  border: none;
}

h1 {
  font-size: 2rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
  font-family: Lexend, sans-serif;
  color: ${({theme}) => theme.text_primary};
}

h2 {
  font-size: 1.5rem;
}

button {
  cursor: pointer;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}
`;
