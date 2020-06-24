import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "../App/App.module.scss";

// Redux
import { Provider } from "react-redux";
import store from "../../redux/store";

// Components
import Header from "../Header"

// Pages
import home from "../../pages/home";
import login from "../../pages/login";
import signup from "../../pages/signup";
import airlines from "../../pages/airlines";
import Footer from "../Footer/Footer";

// Material UI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
  },
  palette: {
    primary: {
      light: '#32b9e6',
      main: '#00A8E0',
      dark: '#0086b3',
      contrastText: '#ffffff',
    }
  }
}); 

function App() {
  return (
    <MuiThemeProvider theme={ theme }>
      <Provider store={ store }>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/airlines" component={airlines} />
              <Route exact path="/login" component={login} />
              <Route exact path="/signup" component={signup} />
            </Switch>
            <Footer />
          </Router>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
