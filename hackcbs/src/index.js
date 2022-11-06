import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
ReactDOM.render(
<Provider store={store}>
   
      <Router>
        <App />
      </Router>
   
  </Provider>, document.getElementById('root'));
