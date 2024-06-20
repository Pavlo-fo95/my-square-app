import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Если вы хотите начать измерять производительность в вашем приложении, передайте функцию
// для логирования результатов (например: reportWebVitals(console.log))
// или отправьте данные на аналитический endpoint. Узнайте больше: https://bit.ly/CRA-vitals
reportWebVitals();