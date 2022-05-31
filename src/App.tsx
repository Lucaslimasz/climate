import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";

import Global from "./styles/global";
import { lightTheme, darkTheme } from "./styles/theme";

function App() {
  const [isLightTheme, setIsLightTheme] = useState(false);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <Global />
      <Home />
    </ThemeProvider>
  );
}

export default App;
