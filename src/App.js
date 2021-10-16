import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components";
import GlobalStyle from "./global.styles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
    </Router>
  );
}

export default App;
