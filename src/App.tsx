import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Home from "./pages/Home";

import Global from "./styles/global";
import { lightTheme, darkTheme } from "./styles/theme";

function App() {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const handleTheme = () => {
    setIsLightTheme(prevState => !prevState)
  }
  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <Global />
      <Header isLightTheme={isLightTheme} handleTheme={() => handleTheme()}/>
      <Home />
    </ThemeProvider>
  );
}

export default App;
