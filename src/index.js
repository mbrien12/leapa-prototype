import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App.jsx';
import '../src/css/index.css';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
  <App />
  </BrowserRouter>), document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}