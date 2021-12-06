import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Main from './Containers/MainContainer';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// import store from './store';
// import { Provider } from 'react-redux';
import Input from './test';

// import Task from './Task';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <App />
      <Main />
    </Provider> */}
    <Input />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
