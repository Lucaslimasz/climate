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
  background: #F4F1EF;
  color: ${({ theme }) => theme.text_primary};
}

body::after {
  content: "";
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background: #23262B;
  transform: translateX(100%);
  transition: transform .5s linear;
  z-index: -1;
  transform: ${({ theme }) =>
    theme.background !== "#F4F1EF" && "translateX(0)"};
}

body,
input,
textarea,
button {
  font: 500 1rem Inter, sans-serif;
  color: ${({ theme }) => theme.text_primary};
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
  color: ${({ theme }) => theme.text_primary};
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
