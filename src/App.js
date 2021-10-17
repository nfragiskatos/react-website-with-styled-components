import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Footer, Navbar } from "./components";
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyle from "./global.styles";
import Home from "./pages/HomePage/Home";
import Products from "./pages/Products/Products";
import Services from "./pages/Services/Services";
import SignUp from "./pages/SignUp/SignUp";
import theme from "./theme";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route
            path="/react-website-with-styled-components"
            exact
            component={Home}
          />
          <Route
            path="/react-website-with-styled-components/services"
            component={Services}
          />
          <Route
            path="/react-website-with-styled-components/products"
            component={Products}
          />
          <Route
            path="/react-website-with-styled-components/sign-up"
            component={SignUp}
          />
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
