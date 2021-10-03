import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./store";
import Layout from "./components/Layout"


ReactDOM.render(
  <React.StrictMode>
    <Layout>
    <Provider store={store}>
    <App />
    </Provider>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);


