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
          <Route path="/React-With-Styled-Components" exact component={Home} />
          <Route
            path="/React-With-Styled-Components/services"
            component={Services}
          />
          <Route
            path="/React-With-Styled-Components/products"
            component={Products}
          />
          <Route
            path="/React-With-Styled-Components/sign-up"
            component={SignUp}
          />
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
