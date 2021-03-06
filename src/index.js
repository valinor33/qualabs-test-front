import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/configureStore";

import { App } from './App';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);