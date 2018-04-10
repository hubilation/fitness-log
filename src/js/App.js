import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import LogRecord from "./components/LogRecord";

const App = () => (
  <MuiThemeProvider>
    <LogRecord />
    <LogRecord />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
