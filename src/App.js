import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Footer, Navbar } from "./components";
import GlobalStyle from "./global.styles";
import Home from "./pages/HomePage/Home";
import theme from "./theme";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
