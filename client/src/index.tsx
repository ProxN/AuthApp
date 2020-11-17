import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Routes } from 'react-router-dom';
import App from './App';
import { Theme } from './styles';
import reportWebVitals from './reportWebVitals';
import AuthContext from './context/auth.context';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <AuthContext>
        <Routes>
          <App />
        </Routes>
      </AuthContext>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
