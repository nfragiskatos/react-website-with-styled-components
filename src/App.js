import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Navbar } from "./components";
import GlobalStyle from "./global.styles";
import theme from "./theme";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
      </ThemeProvider>
    </Router>
  );
}

export default App;
