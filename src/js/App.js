import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import reducer from './store/exerciseResults';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import ExerciseSession from "./components/ExerciseSession";

const store = createStore(reducer);

const App = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <ExerciseSession />
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
