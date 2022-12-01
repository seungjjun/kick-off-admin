import ReactDom from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

const container = document.getElementById('app');
const root = ReactDom.createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
