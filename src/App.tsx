import React from 'react';
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@src/assets/styles/global-styles";
import { theme } from "@src/assets/styles/theme";

// Router
import Router from "@src/Router"



function App() {
  console.log(theme)
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
