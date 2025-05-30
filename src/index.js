import React,{StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    <Provider store={store}>
      
<StrictMode>
  <App />
</StrictMode>
    </Provider>
    </BrowserRouter>
   
);

reportWebVitals();
