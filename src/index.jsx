import ReactDom from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { memberApiService } from './services/MemberApiService';
import { postApiService } from './services/PostApiService';

const container = document.getElementById('app');
const root = ReactDom.createRoot(container);

const data = localStorage.getItem('accessToken');
const accessToken = JSON.parse(data);

memberApiService.setAccessToken(accessToken);
postApiService.setAccessToken(accessToken);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
