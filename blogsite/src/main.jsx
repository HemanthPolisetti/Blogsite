import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom';
import {NextUIProvider} from '@nextui-org/react';
import { Provider } from 'react-redux';
import {store} from '../src/Store/store'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
  <Router>
      <Provider store={store}>
    <App />
    </Provider>
    </Router>
    </NextUIProvider>
  </React.StrictMode>,
)
