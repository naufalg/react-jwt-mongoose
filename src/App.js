import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Profile from "./components/pages/Profile";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// const useStyles = makeStyles((theme) => ({
// }));

function App() {
  // const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#4dabf5',
        main: '#2196f3',
        dark: '#1769aa',
        // contrastText: '#fff',
      },
      secondary: {
        light: '#f73378',
        main: '#f50057',
        dark: '#ab003c',
        // contrastText: '#000',
      },
      },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/sign-in">
              <Login />
            </Route>
            <Route exact path="/sign-up">
              <Register />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
